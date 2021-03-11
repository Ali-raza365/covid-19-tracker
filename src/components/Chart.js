import React from "react";
import { Bar, Line } from "react-chartjs-2";

function Chart({ data, country }) {
  console.log(data);
  return (
    <div className="barChart">
      {country !== "all" ? (
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "rgba(17, 105, 142, 0.3)",
                  "rgb(38, 192, 38) ",
                  " rgb(253, 52, 52)",
                ],
                data: [
                  data.confirmed.value,
                  data.recovered.value,
                  data.deaths.value,
                ],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text:
                country == "all" ? `Global ` : `Current Country is ${country}`,
            },
          }}
        />
      ) : (
        data && (
          <Line
            data={{
              labels: data.map((item) => item.date),
              datasets: [
                {
                  label: "Infacted",
                  data: data.map((item) => item.confirmed),
                  fill: true,
                  backgroundColor: "rgba(17, 105, 142, 0.3)",
                  borderColor: "rgba(17, 105, 142, 1)",
                },
                {
                  label: "Deaths",
                  data: data.map((item) => item.deaths),
                  fill: true,
                  borderColor: "#fa1e0e",
                  backgroundColor: "rgba(250, 30, 14, 0.4)",
                },
              ],
            }}
          />
        )
      )}
    </div>
  );
}

export default Chart;
