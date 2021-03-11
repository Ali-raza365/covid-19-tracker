import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getALLCountries } from "../api";
import { NativeSelect, Typography } from "@material-ui/core";

function CountryPicker({ handleChange, country }) {
  useEffect(() => {
    const getCountries = async () => {
      let res = await getALLCountries();
      setallcountry(res.countries);
    };
    getCountries();
  }, []);

  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(3),
      minWidth: 300,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

  const classes = useStyles();
  const [allcountry, setallcountry] = useState(null);
  return (
    <>
      <div className="select">
        <FormControl className={classes.formControl}>
          <NativeSelect
            onChange={(evt) => {
              handleChange(evt.target.value);
            }}
            id="select"
            defaultValue={country}
            value={country}
          >
            <option value={"all"}> All States</option>
            {allcountry &&
              allcountry.map((country, ind) => (
                <option key={ind} value={country.name}>
                  {country.name}
                </option>
              ))}
          </NativeSelect>
        </FormControl>
      </div>
    </>
  );
}

export default CountryPicker;
