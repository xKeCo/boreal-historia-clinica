import React from "react";
import Navbar from "../../NavBar/Navbar";
import {
  TextField,
  Button,
  // , FormControl, InputLabel, Select, MenuItem,
} from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Auth";

export default function Anamnesis({ formData, setForm, navigation }) {
  const { motivoConsulta } = formData;

  const { user } = useAuth();
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar text={"Nuevo Paciente - Anamnesis"} />
      <div className="Form-Container">
        <h1>Anamnesis</h1>
        <TextField
          autoFocus
          className=" mr-3"
          defaultValue={motivoConsulta}
          label="Motivo de la consulta"
          name="motivoConsulta"
          onChange={setForm}
          variant="outlined"
          fullWidth
        />

        <div className="stepForm_buttons-container mt-3 mb-3">
          <Button
            className="mr-3"
            color="secondary"
            onClick={() => navigation.previous()}
            startIcon={<ArrowBackIcon />}
            variant="contained"
          >
            Atras
          </Button>
          <Button
            color="primary"
            endIcon={<ArrowForwardIcon />}
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
