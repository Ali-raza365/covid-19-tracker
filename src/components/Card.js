import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CountUp from "react-countup";

import Typography from "@material-ui/core/Typography";
import logo from "../images/corona-virus.png";

const useStyles = makeStyles({
  root: {
    paddingTop: 335,
    maxWidth: 1200,
    margin: "0 auto",
  },
  card: {
    minWidth: 275,
    borderBottom: "4 solid gray",
    textAlign: "left",
  },
  title: {
    padding: 0,
    fontWeight: "bold",
    fontSize: 20,
  },
  num: {
    fontSize: 18,
    marginBottom: 12,
  },
  date: {
    fontSize: 18,
    marginBottom: 12,
  },
});

function Cards({ AllStatedata }) {
  const classes = useStyles();
  if (!AllStatedata) {
    return null;
  }
  return (
    <>
      <div>
        <div className="imgContainer">
          <img src={logo} />
        </div>
        <Grid className={classes.root} container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card
              elevation={3}
              className={classes.card}
              style={{ borderBottom: "7px solid rgba(17, 105, 142, 0.3)" }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  component="h2"
                >
                  Infacted
                </Typography>
                <Typography className={[classes.num, "infacted"]}>
                  <CountUp
                    start={0}
                    end={AllStatedata.confirmed.value}
                    duration={2}
                    separator=" "
                  />
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.date}
                  gutterBottom
                >
                  {new Date(AllStatedata.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Numbers of active cases of COVID-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              elevation={3}
              className={classes.card}
              style={{ borderBottom: "7px solid  rgb(38, 192, 38)" }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  component="h2"
                >
                  Recovered
                </Typography>
                <Typography className={[classes.num, "recovered"]}>
                  <CountUp
                    start={0}
                    end={AllStatedata.recovered.value}
                    duration={2}
                  />
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.date}
                  gutterBottom
                >
                  {new Date(AllStatedata.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Numbers of Recoveries from COVID-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              elevation={3}
              className={classes.card}
              style={{ borderBottom: "7px solid red" }}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  gutterBottom
                  component="h2"
                >
                  Deaths
                </Typography>
                <Typography className={[classes.num, "deaths"]}>
                  <CountUp
                    start={0}
                    end={AllStatedata.deaths.value}
                    duration={2}
                    separator=" "
                  />
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.date}
                  gutterBottom
                >
                  {new Date(AllStatedata.lastUpdate).toDateString()}
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                  Numbers of deaths caused by COVID-19
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Cards;
