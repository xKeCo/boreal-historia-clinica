import React, { useState } from "react";
import Navbar from "../../NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  InputAdornment,
} from "@material-ui/core";
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
  formControl1: {
    marginRight: "1rem",
    maxWidth: 160,
    width: "100%",
  },
  smallFormControl: {
    marginRight: "1rem",
    maxWidth: 100,
    width: "100%",
  },
  smallTextField: {
    marginRight: "1rem",
    maxWidth: 115,
    width: "100%",
    marginTop: "1rem",
  },
  mediumTextField: {
    marginRight: "1rem",
    maxWidth: 600,
    width: "100%",
    marginTop: "0.6rem",
  },
  telTextField: {
    marginRight: "1rem",
    maxWidth: 210,
    width: "100%",
    marginTop: "0.6rem",
  },
  divContainer: {
    // marginRight: "1rem",
    maxWidth: 382,
    width: "100%",
    marginTop: "0.6rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function General({ formData, setForm, navigation }) {
  const {
    nombreCompleto,
    genero,
    tipoSangre,
    edad,
    estatura,
    peso,
    email,
    numeroDocumento,
    estadoCivil,
    direccion,
    telefono1,
    telefono2,
    numeroEmergencia,
    EPS,
    consultaMedica,
    tratamientoMedico,
    radiografias,
  } = formData;
  const [setChange] = useState("");
  const [afiliado, setAfiliado] = useState("SI");
  const [consulta, setConsulta] = useState("SI");
  const [actualizadas, setActualizadas] = useState("NO");
  const classes = useStyles();

  const handleChange = (event) => {
    setChange(event.target.value);
  };
  const handleChangeConsulta = (event) => {
    setConsulta(event.target.value);
  };
  const handleChangeActualizadas = (event) => {
    setActualizadas(event.target.value);
  };
  const handleChangeAfiliado = (event) => {
    setAfiliado(event.target.value);
  };

  const { user } = useAuth();
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar text={"Nuevo Paciente - Info. General"} />
      <div className="Form-Container">
        <h3 className="font-weight-bold main-title mt-3 mb-3">Informaci&oacute;n del paciente</h3>
        <div className="form">
          <div className="w-100">
            <h4 className="">Informaci&oacute;n general</h4>

            <TextField
              autoFocus
              className="mt-2"
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
                onChange={(handleChange, setForm)}
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
                onChange={(handleChange, setForm)}
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
              type="number"
              onChange={setForm}
              variant="outlined"
              inputProps={{
                maxLength: 2,
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">años</InputAdornment>,
              }}
            />
            <TextField
              className={classes.smallTextField}
              label="Estatura"
              name="estatura"
              type="number"
              defaultValue={estatura}
              onChange={setForm}
              variant="outlined"
              inputProps={{
                maxLength: 3,
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
              }}
              required
            />
            <TextField
              className={classes.smallTextField}
              defaultValue={peso}
              label="Peso"
              name="peso"
              type="number"
              onChange={setForm}
              variant="outlined"
              inputProps={{
                maxLength: 5,
              }}
              InputProps={{
                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
              }}
              required
            />
            <TextField
              className="mr-3 mt-3"
              label="Correo electronico"
              name="email"
              defaultValue={email}
              onChange={setForm}
              variant="outlined"
              type="email"
              required
            />
            <TextField
              className="mr-3 mt-3"
              label="Numero de documento"
              name="numeroDocumento"
              defaultValue={numeroDocumento}
              onChange={setForm}
              variant="outlined"
              required
            />
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Estado civil</InputLabel>
              <Select
                label="Estado Civil"
                name="estadoCivil"
                onChange={(handleChange, setForm)}
                value={estadoCivil}
              >
                <MenuItem value={"Solter@"}>Solter@</MenuItem>
                <MenuItem value={"Casad@"}>Casad@</MenuItem>
                <MenuItem value={"Viud@"}>Viud@</MenuItem>
                <MenuItem value={"Divorciad@"}>Divorciad@</MenuItem>
                <MenuItem value={"Menor"}>Menor</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="w-100">
            <h5 className=" mt-3">Contacto</h5>
            <TextField
              className={classes.mediumTextField}
              label="Direccion"
              name="direccion"
              defaultValue={direccion}
              onChange={setForm}
              variant="outlined"
              multiline
              rowsMax={2}
              required
            />

            <TextField
              className={classes.telTextField}
              label="Telefono 1"
              name="telefono1"
              defaultValue={telefono1}
              onChange={setForm}
              variant="outlined"
              required
            />
            <TextField
              className={classes.telTextField}
              label="Telefono 2 (opcional)"
              name="telefono2"
              defaultValue={telefono2}
              onChange={setForm}
              variant="outlined"
            />
            <TextField
              className={classes.telTextField}
              label="Numero de emergencia"
              name="numeroEmergencia"
              defaultValue={numeroEmergencia}
              onChange={setForm}
              variant="outlined"
              required
            />
          </div>
        </div>

        <h5 className="mt-3">Salud</h5>
        <div className=" select-options-container">
          <div className={classes.divContainer}>
            <p>Esta afiliado a una EPS?</p>

            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="afiliado"
                name="afiliado"
                onChange={handleChangeAfiliado}
                value={afiliado}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {afiliado === "SI" && (
              <TextField
                className="mr-3 "
                label="¿Cual?"
                name="EPS"
                defaultValue={EPS}
                onChange={setForm}
                variant="outlined"
              />
            )}
          </div>

          <div className={classes.divContainer}>
            <p>En el ultimo año ha consultado a su medico?</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="afiliado"
                name="afiliado"
                onChange={handleChangeConsulta}
                value={consulta}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {consulta === "SI" && (
              <FormControl variant="outlined" className={classes.formControl1}>
                <InputLabel>¿Cual?</InputLabel>
                <Select
                  label="consultaMedica"
                  name="consultaMedica"
                  onChange={(handleChange, setForm)}
                  value={consultaMedica}
                >
                  <MenuItem value={"General"}>General</MenuItem>
                  <MenuItem value={"Especialista"}>Especialista</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
          <div className={classes.divContainer}>
            <p>Posee radiografias actualizadas?</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="actualizadas"
                name="actualizadas"
                onChange={handleChangeActualizadas}
                value={actualizadas}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {actualizadas === "SI" && (
              <TextField
                className="mr-3 "
                label="¿Cuales?"
                name="radiografias"
                defaultValue={radiografias}
                onChange={setForm}
                variant="outlined"
                helperText="Separelas con una guion (-)"
              />
            )}
          </div>

          <div className={classes.divContainer}>
            <p>Actualmente se encuentra en tratamiento medico?</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="tratamientoMedico"
                name="tratamientoMedico"
                onChange={(handleChange, setForm)}
                value={tratamientoMedico}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="stepForm_buttons-container mt-3 mb-3">
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigation.next()}
            endIcon={<ArrowForwardIcon />}
            disabled={
              !nombreCompleto ||
              !genero ||
              !tipoSangre ||
              !edad ||
              !estatura ||
              !peso ||
              !email ||
              !numeroDocumento ||
              !estadoCivil ||
              !direccion ||
              !telefono1 ||
              !numeroEmergencia ||
              !tratamientoMedico ||
              (afiliado === "SI" && !EPS) ||
              (actualizadas === "SI" && !radiografias) ||
              (consulta === "SI" && !consultaMedica)
            }
          >
            continuar
          </Button>
        </div>
      </div>
    </>
  );
}
