import React from "react"; // , { useState }
import Navbar from "../../NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useAuth } from "../../Auth";
import { Redirect } from "react-router-dom";

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
  mediumTextField: {
    marginRight: "1rem",
    maxWidth: 600,
    width: "100%",
    marginTop: "1rem",
  },
  telTextField: {
    marginRight: "1rem",
    maxWidth: 190,
    width: "100%",
    marginTop: "1rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function General({ formData, setForm, navigation }) {
  const {
    nombreCompleto,
    edad,
    email,
    genero,
    tipoSangre,
    direccion,
    telefono1,
    telefono2,
    estadoCivil,
    EPS,
    consultaMedico,
    tratamientoMedico,
    radiografias,
    numeroEmergencia,
  } = formData;
  const [setGenero] = React.useState("");
  const [setEstado] = React.useState("");
  const [setTipoSangre] = React.useState("");
  const classes = useStyles();

  const handleChangeGenero = (event) => {
    setGenero(event.target.value);
  };
  const handleChangeEstadoCivil = (event) => {
    setEstado(event.target.value);
  };
  const handleChangeSangre = (event) => {
    setTipoSangre(event.target.value);
  };

  const { user } = useAuth();
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar text={"Nuevo Paciente - Info. General"} />
      <div className="Form-Container">
        <h3 className="main-title mt-3 mb-3">Informaci&oacute;n general</h3>
        <form>
          <TextField
            autoFocus
            className={classes.mediumTextField}
            defaultValue={nombreCompleto}
            label="Nombre Completo"
            name="nombreCompleto"
            onChange={setForm}
            variant="outlined"
            fullWidth
            required
            multiline
            rowsMax={2}
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>G&eacute;nero</InputLabel>
            <Select
              label="genero"
              name="genero"
              onChange={(handleChangeGenero, setForm)}
              required
              value={genero}
            >
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
              onChange={(handleChangeSangre, setForm)}
              required
              value={tipoSangre}
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
            className={classes.smallTextField}
            defaultValue={edad}
            label="Edad"
            name="edad"
            onChange={setForm}
            variant="outlined"
            inputProps={{
              maxLength: 2,
            }}
          />
          <TextField
            className="mr-3 mt-3"
            label="Correo electronico"
            name="email"
            defaultValue={email}
            onChange={setForm}
            variant="outlined"
            type="email"
          />
          <TextField
            className="mr-3 mt-3"
            label="Numero de documento"
            // name="nombreCompleto"
            defaultValue={edad}
            onChange={setForm}
            variant="outlined"
          />
          <TextField
            className={classes.telTextField}
            label="Telefono 1"
            // name="nombreCompleto"
            defaultValue={telefono1}
            onChange={setForm}
            variant="outlined"
          />
          <TextField
            className={classes.telTextField}
            label="Telefono 2"
            // name="nombreCompleto"
            defaultValue={telefono2}
            onChange={setForm}
            variant="outlined"
          />
          <TextField
            className={classes.mediumTextField}
            label="Direccion"
            // name="nombreCompleto"
            defaultValue={direccion}
            onChange={setForm}
            variant="outlined"
            multiline
            rowsMax={2}
          />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel>Estado civil</InputLabel>
            <Select
              label="Estado Civil"
              name="estadoCivil"
              onChange={(handleChangeEstadoCivil, setForm)}
              required
              value={estadoCivil}
            >
              <MenuItem value={"Solter@"}>Solter@</MenuItem>
              <MenuItem value={"Casad@"}>Casad@</MenuItem>
              <MenuItem value={"Viud@"}>Viud@</MenuItem>
              <MenuItem value={"Divorciad@"}>Divorciad@</MenuItem>
              <MenuItem value={"Menor"}>Menor</MenuItem>
            </Select>
          </FormControl>

          <div className="stepForm_buttons-container mt-3 mb-3">
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigation.next()}
              endIcon={<ArrowForwardIcon />}
              disabled={!nombreCompleto || !edad || !email || !genero || !tipoSangre}
            >
              continuar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
