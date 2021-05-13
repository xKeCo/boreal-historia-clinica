import React from "react";
import Navbar from "../../NavBar/Navbar";
import {
  //  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.css";
import { useAuth } from "../../Auth";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: "1rem",
    maxWidth: 160,
    width: "100%",
    marginTop: "1rem",
  },
  smallTextField: {
    marginRight: "1rem",
    maxWidth: 110,
    width: "100%",
    marginTop: "1rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Consentimiento({ formData, setForm, navigation }) {
  const { consentimiento } = formData;
  const [setConsentimiento] = React.useState("");
  const classes = useStyles();

  const handleChangeConsentimiento = (event) => {
    setConsentimiento(event.target.value);
  };

  const { user } = useAuth();
  if (!user) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <Navbar text={"Nuevo Paciente - Consentimiento"} />
      <div className="Form-Container">
        <h1>Consentimiento</h1>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Acepta?</InputLabel>
          <Select
            label="consentimiento"
            name="consentimiento"
            onChange={(handleChangeConsentimiento, setForm)}
            required
            value={consentimiento}
          >
            <MenuItem value={"Si"}>Si</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>

        <div className="stepForm_buttons-container mt-3 mb-3">
          <Button
            color="secondary"
            className="mr-3"
            onClick={() => navigation.previous()}
            startIcon={<ArrowBackIcon />}
            variant="contained"
          >
            Atras
          </Button>

          <Button
            color="primary"
            endIcon={<ArrowForwardIcon />}
            disabled={consentimiento === "No"}
            onClick={() => navigation.next()}
            variant="contained"
          >
            Continuar
          </Button>
        </div>
      </div>
    </>
  );
}
