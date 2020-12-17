import React from "react";
// Material UI Components
import { CircularProgress } from "@material-ui/core/";
// Estilos CSS
import "./styles/Loader.css";

export default function Loader() {
  return (
    <div className="Loader">
      <CircularProgress size="40px" />
    </div>
  );
}

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
