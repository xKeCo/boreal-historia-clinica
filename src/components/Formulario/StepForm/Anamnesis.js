import React, { useState } from "react";
import Navbar from "../../NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.css";
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { ArrowForward as ArrowForwardIcon, ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Auth";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginRight: "1rem",
    maxWidth: 160,
    width: "100%",
    marginTop: "1rem",
  },
  formControl1: {
    marginRight: "1rem",
    maxWidth: 150,
    width: "100%",
  },
  smallFormControl: {
    marginRight: "1rem",
    maxWidth: 85,
    width: "100%",
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
    marginTop: "0.6rem",
  },
  divContainer: {
    marginRight: "1rem",
    maxWidth: 270,
    width: "100%",
    marginTop: "0.6rem",
  },
  txtDivContainer: {
    maxWidth: 340,
    width: "100%",
    marginTop: "0.6rem",
  },
  oneDivContainer: {
    maxWidth: 100,
    width: "100%",
    marginTop: "0.6rem",
    marginRight: "0.8rem",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Anamnesis({ formData, setForm, navigation }) {
  const {
    motivoConsulta,
    enfermedadActual,
    antDiabetes,
    antCancer,
    antLeucemia,
    antCardiopatias,
    alergia,
    diabetes,
    cancer,
    leucemia,
    cardiopatias,
    cirugias,
    hospitalarios,
    psicologicos,
    HTA,
  } = formData;
  const [setChange] = useState("");
  const [Diabetess, setDiabetess] = useState("NO");
  const [Cancer, setCancer] = useState("NO");
  const [Leucemia, setLeucemia] = useState("NO");
  const [Cardiopatias, setCardiopatias] = useState("NO");
  const [Cirugias, setCirugias] = useState("NO");
  const [Hospitalarios, setHospitalarios] = useState("NO");
  const [Psicologicos, setPsicologicos] = useState("NO");
  const classes = useStyles();

  const handleChange = (event) => {
    setChange(event.target.value);
  };
  const handleChangeCancer = (event) => {
    setCancer(event.target.value);
  };
  const handleChangeLeucemia = (event) => {
    setLeucemia(event.target.value);
  };
  const handleChangePsicologicos = (event) => {
    setPsicologicos(event.target.value);
  };
  const handleChangeHospitalarios = (event) => {
    setHospitalarios(event.target.value);
  };
  const handleChangeCirugias = (event) => {
    setCirugias(event.target.value);
  };
  const handleChangeCardiopatias = (event) => {
    setCardiopatias(event.target.value);
  };
  const handleChangeDiabetess = (event) => {
    setDiabetess(event.target.value);
  };

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
          className=" mt-3"
          defaultValue={motivoConsulta}
          label="Motivo de la consulta"
          name="motivoConsulta"
          onChange={setForm}
          variant="outlined"
          fullWidth
          required
          inputProps={{
            maxLength: 150,
          }}
        />
        <TextField
          className=" mt-3"
          defaultValue={enfermedadActual}
          label="Enfermedad actual"
          name="enfermedadActual"
          onChange={setForm}
          variant="outlined"
          fullWidth
          helperText="En caso de tener varias separarlas por un guion ( - ), en el caso contrario colocar NADA"
        />

        <h5 className="mt-3">Antecedentes familiares</h5>
        <div className=" select-options-container">
          <div className={classes.divContainer}>
            <p>Diabetes</p>

            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="Diabetes"
                onChange={handleChangeDiabetess}
                value={Diabetess}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {Diabetess === "SI" && (
              <FormControl variant="outlined" className={classes.formControl1}>
                <InputLabel>Familiar</InputLabel>
                <Select
                  label="Familiar"
                  name="antDiabetes"
                  onChange={(handleChange, setForm)}
                  value={antDiabetes}
                >
                  <MenuItem value={"Padre"}>Padre</MenuItem>
                  <MenuItem value={"Madre"}>Madre</MenuItem>
                  <MenuItem value={"Abuela-Madre"}>Abuela-Madre</MenuItem>
                  <MenuItem value={"Abuela-Padre"}>Abuela-Padre</MenuItem>
                  <MenuItem value={"Abuelo-Madre"}>Abuelo-Madre</MenuItem>
                  <MenuItem value={"Abuelo-Padre"}>Abuelo-Padre</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>

          <div className={classes.divContainer}>
            <p>Cancer</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select label="Cancer" name="Cancer" onChange={handleChangeCancer} value={Cancer}>
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {Cancer === "SI" && (
              <FormControl variant="outlined" className={classes.formControl1}>
                <InputLabel>Familiar</InputLabel>
                <Select
                  label="antCancer"
                  name="antCancer"
                  onChange={(handleChange, setForm)}
                  value={antCancer}
                >
                  <MenuItem value={"Padre"}>Padre</MenuItem>
                  <MenuItem value={"Madre"}>Madre</MenuItem>
                  <MenuItem value={"Abuela-Madre"}>Abuela-Madre</MenuItem>
                  <MenuItem value={"Abuela-Padre"}>Abuela-Padre</MenuItem>
                  <MenuItem value={"Abuelo-Madre"}>Abuelo-Madre</MenuItem>
                  <MenuItem value={"Abuelo-Padre"}>Abuelo-Padre</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>

          <div className={classes.divContainer}>
            <p>Leucemia</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="Leucemia"
                onChange={handleChangeLeucemia}
                value={Leucemia}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {Leucemia === "SI" && (
              <FormControl variant="outlined" className={classes.formControl1}>
                <InputLabel>Familiar</InputLabel>
                <Select
                  label="antLeucemia"
                  name="antLeucemia"
                  onChange={(handleChange, setForm)}
                  value={antLeucemia}
                >
                  <MenuItem value={"Padre"}>Padre</MenuItem>
                  <MenuItem value={"Madre"}>Madre</MenuItem>
                  <MenuItem value={"Abuela-Madre"}>Abuela-Madre</MenuItem>
                  <MenuItem value={"Abuela-Padre"}>Abuela-Padre</MenuItem>
                  <MenuItem value={"Abuelo-Madre"}>Abuelo-Madre</MenuItem>
                  <MenuItem value={"Abuelo-Padre"}>Abuelo-Padre</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>

          <div className={classes.divContainer}>
            <p>Cardiopatias</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="Cardiopatias"
                onChange={handleChangeCardiopatias}
                value={Cardiopatias}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {Cardiopatias === "SI" && (
              <FormControl variant="outlined" className={classes.formControl1}>
                <InputLabel>Familiar</InputLabel>
                <Select
                  label="antCardiopatias"
                  name="antCardiopatias"
                  onChange={(handleChange, setForm)}
                  value={antCardiopatias}
                >
                  <MenuItem value={"Padre"}>Padre</MenuItem>
                  <MenuItem value={"Madre"}>Madre</MenuItem>
                  <MenuItem value={"Abuela-Madre"}>Abuela-Madre</MenuItem>
                  <MenuItem value={"Abuela-Padre"}>Abuela-Padre</MenuItem>
                  <MenuItem value={"Abuelo-Madre"}>Abuelo-Madre</MenuItem>
                  <MenuItem value={"Abuelo-Padre"}>Abuelo-Padre</MenuItem>
                </Select>
              </FormControl>
            )}
          </div>
        </div>

        <h5 className="mt-3">Antecedentes personales</h5>
        <TextField
          className=" mt-3 mb-2"
          defaultValue={alergia}
          label="Alegias a:"
          name="alergia"
          onChange={setForm}
          variant="outlined"
          fullWidth
          helperText="En caso de tener alegias separarlas por un guion ( - ), en el caso contrario colocar NADA"
        />
        <div className=" select-options-container">
          <div className={classes.oneDivContainer}>
            <p>Diabetes</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="diabetes"
                onChange={(handleChange, setForm)}
                required
                value={diabetes}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={classes.oneDivContainer}>
            <p>Cancer</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="cancer"
                onChange={(handleChange, setForm)}
                required
                value={cancer}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={classes.oneDivContainer}>
            <p>Leucemia</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="leucemia"
                onChange={(handleChange, setForm)}
                required
                value={leucemia}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={classes.oneDivContainer}>
            <p>Cardiopatias</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="cardiopatias"
                onChange={(handleChange, setForm)}
                required
                value={cardiopatias}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={classes.oneDivContainer}>
            <p>HTA</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="HTA"
                onChange={(handleChange, setForm)}
                required
                value={HTA}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className={classes.txtDivContainer}>
            <p>Cirugias</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="Cirugias"
                onChange={handleChangeCirugias}
                value={Cirugias}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {Cirugias === "SI" && (
              <TextField
                className="mr-3 "
                label="¿Cual/es?"
                name="cirugias"
                defaultValue={cirugias}
                onChange={setForm}
                variant="outlined"
              />
            )}
          </div>

          <div className={classes.txtDivContainer}>
            <p>Hospitalarios</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="Hospitalarios"
                onChange={handleChangeHospitalarios}
                value={Hospitalarios}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {Hospitalarios === "SI" && (
              <TextField
                className="mr-3 "
                label="¿Cual/es?"
                name="hospitalarios"
                defaultValue={hospitalarios}
                onChange={setForm}
                variant="outlined"
              />
            )}
          </div>

          <div className={classes.txtDivContainer}>
            <p>Psicologicos</p>
            <FormControl variant="outlined" className={classes.smallFormControl}>
              <InputLabel>Si/No</InputLabel>
              <Select
                label="Si/No"
                name="Psicologicos"
                onChange={handleChangePsicologicos}
                value={Psicologicos}
              >
                <MenuItem value={"SI"}>Si</MenuItem>
                <MenuItem value={"NO"}>No</MenuItem>
              </Select>
            </FormControl>

            {Psicologicos === "SI" && (
              <TextField
                className="mr-3 "
                label="¿Cual/es?"
                name="psicologicos"
                defaultValue={psicologicos}
                onChange={setForm}
                variant="outlined"
              />
            )}
          </div>
        </div>

        <div className="stepForm_buttons-container mt-4 mb-3">
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
            disabled={
              !motivoConsulta ||
              !enfermedadActual ||
              !alergia ||
              (Cirugias === "SI" && !cirugias) ||
              (Hospitalarios === "SI" && !hospitalarios) ||
              (Psicologicos === "SI" && !psicologicos)
            }
          >
            Continuar
          </Button>
        </div>
      </div>
    </>
  );
}
