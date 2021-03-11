import axios from "axios";

const GlobalStats = "https://covid19.mathdro.id/api";
const Allcountries = "https://covid19.mathdro.id/api/countries";
const GetCountry = "https://covid19.mathdro.id/api/countries/";
const DailyData = "https://covid19.mathdro.id/api/daily";

const getAllData = async () => {
  try {
    let response = await axios.get(GlobalStats);
    let data = await response.data;
    console.log("getAllData", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const getALLCountries = async () => {
  try {
    let response = await axios.get(Allcountries);
    let data = await response.data;

    return data;
  } catch (error) {
    console.log(error);
  }
};

const getdailyData = async () => {
  try {
    let response = await axios.get(DailyData);
    let data = await response.data;
    let modifiedData = data.map((daily) => ({
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
      date: daily.reportDate,
    }));
    console.log({ modifiedData });
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

const getCountry = async (country) => {
  try {
    let response = await axios.get(GetCountry + country);
    let data = await response.data;
    console.log("seleceted", { data });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { getAllData, getALLCountries, getCountry, getdailyData };
