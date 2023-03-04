import React from "react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

const Root = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

const useStyles = makeStyles((theme: Theme) => {
  console.log("theme", theme);
  return {
    root: {
      height: "100vh",
      backgroundColor: theme.palette.grey[300],
    },
  };
});

export default Root;
