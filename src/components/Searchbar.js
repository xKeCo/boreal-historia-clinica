import React from "react";
// Material UI Components
import { Paper, IconButton, InputBase, Divider, makeStyles } from "@material-ui/core";
// Iconos Material UI
import { Search as SearchIcon, Tune as TuneIcon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    border: "1px solid rgba(0,0,0,0.20)",
    boxShadow: "unset !important",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  container: {
    padding: "0.875em 7%",
  },
}));

export default function Searchbar() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Buscar Paciente"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton color="primary" className={classes.iconButton} aria-label="directions">
          <TuneIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          // type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </div>
  );
}
