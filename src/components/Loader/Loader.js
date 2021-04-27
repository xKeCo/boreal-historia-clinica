import React from "react";
// Material UI Components
import { CircularProgress } from "@material-ui/core/";
// Estilos CSS
import "./Loader.css";

export const Loader = ({ size }) => {
  return (
    <div className="Loader">
      <CircularProgress size={size} />
    </div>
  );
};
export const FullLoader = ({ size }) => {
  return (
    <div className="FullLoader">
      <CircularProgress size={size} />
    </div>
  );
};

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     "& > * + *": {
//       marginTop: theme.spacing(5),
//     },
//   },
// }));

// export default function Loader() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <LinearProgress />
//     </div>
//   );
// }
