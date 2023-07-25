import React, { useState, useEffect, createRef } from "react";
import TextField from "@material-ui/core/TextField";
import {
  CircularProgress,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
} from "@material-ui/core";

import useStyles from "./Styles.js";
import PlaceDetails from "../PlaceDetails/PlaceDetails.jsx";

const List = ({ places }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">Restaurant</Typography>

      <FormControl className={classes.formControl}>
        <InputLabel id="range">Distance</InputLabel>

        <input type="range" id="range" min="0" max="11" height="9px" />
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel id="date"></InputLabel>
        <div
          style={{
            margin: "auto",
            display: "block",
            width: "fit-content",
          }}
        >
          <TextField
            id="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
            {/* <PlaceDetails place={place} /> */}
            {/* Note: PlaceDetails component is commented out as it's not defined */}
            {/* If you want to use the PlaceDetails component, uncomment and import it */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default List;
