import React from "react";
import Navbar from "../../NavBar/Navbar";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.css";

export default function Revision({ formData, setForm, navigation }) {
  return (
    <>
      <Navbar text={"Nuevo Paciente - Revision"} />
      <div className="Form-Container">
        <h1>Revision</h1>
        <Button
          variant="contained"
          color="secondary"
          // style={styles.button}
          // onClick={this.props.onOpenModal}
          onClick={() => navigation.previous()}
          startIcon={<ArrowBackIcon />}
        >
          Atras
        </Button>
        <Button
          variant="contained"
          color="primary"
          // style={styles.button}
          // onClick={this.props.onOpenModal}
          onClick={() => navigation.next()}
          endIcon={<ArrowForwardIcon />}
        >
          Terminar
        </Button>
      </div>
    </>
  );
}
