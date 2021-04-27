import React, { useState } from "react";
import Navbar from "../../NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: "1rem",
    maxWidth: 160,
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function General({ formData, setForm, navigation }) {
  const { nombreCompleto, edad, email, genero, tipoSangre } = formData;
  const classes = useStyles();

  return (
    <>
      <Navbar text={"Nuevo Paciente - Info. General"} />
      <div className="Form-Container">
        <h3 className="main-title mt-3 mb-3">Informaci&oacute;n general</h3>

        <TextField
          autoFocus
          className=" mr-3"
          defaultValue={nombreCompleto}
          label="Nombre Completo"
          name="nombreCompleto"
          onChange={setForm}
          variant="outlined"
        />

        <TextField
          className="  mr-3"
          defaultValue={edad}
          label="Edad"
          name="edad"
          onChange={setForm}
          variant="outlined"
        />

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>G&eacute;nero</InputLabel>
          <Select defaultValue={genero} label="genero" name="genero" onChange={setForm} required>
            <MenuItem value={"Masculino"}>Masculino</MenuItem>
            <MenuItem value={"Femenino"}>Femenino</MenuItem>
            <MenuItem value={"Bigenero"}>Big&eacute;nero</MenuItem>
            <MenuItem value={"Sin genero"}>Sin g&eacute;nero</MenuItem>
            <MenuItem value={"Prefiero no decir"}>Prefiero no decir</MenuItem>
            <MenuItem value={"Otro"}>Otro</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Tipo de Sangre</InputLabel>
          <Select
            label="Tipo de sangre"
            name="tipoSangre"
            defaultValue={tipoSangre}
            required
            onChange={setForm}
          >
            <MenuItem value={"A+"}>A+</MenuItem>
            <MenuItem value={"A-"}>A-</MenuItem>
            <MenuItem value={"B+"}>B+</MenuItem>
            <MenuItem value={"B-"}>B-</MenuItem>
            <MenuItem value={"O+"}>O+</MenuItem>
            <MenuItem value={"O-"}>O-</MenuItem>
            <MenuItem value={"AB+"}>AB+</MenuItem>
            <MenuItem value={"AB-"}>AB-</MenuItem>
          </Select>
        </FormControl>

        <TextField
          className="mr-3"
          label="Numero de documento"
          // name="nombreCompleto"
          defaultValue={edad}
          onChange={setForm}
          variant="outlined"
        />
        <TextField
          className="mr-3"
          label="Numero de documento"
          // name="nombreCompleto"
          defaultValue={edad}
          onChange={setForm}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          // style={styles.button}
          // onClick={this.props.onOpenModal}
          onClick={() => navigation.next()}
          endIcon={<ArrowForwardIcon />}
        >
          continuar
        </Button>
      </div>
    </>
  );
}
