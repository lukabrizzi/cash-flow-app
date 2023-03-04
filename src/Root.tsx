import React from "react";
import { makeStyles } from "@mui/styles";

const Root = () => {
  const classes = useStyles();
  return <div>Holaasss</div>;
};

const useStyles = makeStyles((theme) => {
  console.log("theme", theme);
  return {
    root: {
      height: "100vh",
      backgroundColor: "red",
    },
  };
});

export default Root;
