import React, { useState } from "react";
import Navbar from "../../NavBar/Navbar";
import md5 from "md5";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import {
  // TextField, FormControl, InputLabel, Select, MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  ListItemText,
  Button,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import {
  ExpandMore as ExpandMoreIcon,
  Edit as EditIcon,
  DoneAll as DoneAllIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import "bootstrap/dist/css/bootstrap.css";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../Auth";
import { database } from "../../../firebase/client";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Revision({ formData, navigation }) {
  const { go } = navigation;
  const { nombreCompleto, edad, email, genero, tipoSangre, motivoConsulta, consentimiento } =
    formData;
  const [
    // loading,
    setLoading,
  ] = useState(false);
  const [
    // errors,
    setErrors,
  ] = useState(null);
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Función que envia los datos a Firebase
  const handleSubmit = async (e) => {
    const hash = md5(email);

    try {
      await database
        .collection("clientes")
        .doc()
        .set(
          {
            fechaCreacion: firebase.firestore.FieldValue.serverTimestamp(),
            nombreCompleto: nombreCompleto,
            nombreBusqueda: nombreCompleto.trim().toLowerCase(),
            edad: edad,
            email: email,
            genero: genero,
            tipoSangre: tipoSangre,
            motivoConsulta: motivoConsulta,
            consentimiento: consentimiento,
            avatar: `https://www.gravatar.com/avatar/${hash}?d=identicon`,
          },
          { merge: true }
        );
      setLoading(false);
      setOpen(true);
      history.push("/");
    } catch (error) {
      setLoading(false);
      setErrors(error);
    }
  };

  const { user } = useAuth();
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Navbar text={"Nuevo Paciente - Revision"} />
      <div className="Form-Container">
        <h1>Revision</h1>
        <RenderAccordion
          summary="General"
          go={go}
          details={[
            {
              "Nombre Completo": nombreCompleto,
            },
            {
              Edad: edad,
            },
            {
              "Correo electronico": email,
            },
            {
              Genero: genero,
            },
            {
              "Tipo de sangre": tipoSangre,
            },
          ]}
        />
        <RenderAccordion
          summary="Anamnesis"
          go={go}
          details={[
            {
              "Motivo de la consulta": motivoConsulta,
            },
          ]}
        />
        <RenderAccordion
          summary="Consentimiento"
          go={go}
          details={[
            {
              "Acepto el consentimiento": consentimiento,
            },
          ]}
        />
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Cliente añadido!
          </Alert>
        </Snackbar>
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
            endIcon={<DoneAllIcon />}
            onClick={() => handleSubmit()}
            variant="contained"
          >
            Terminar
          </Button>
        </div>
      </div>
    </>
  );
}

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>{summary}</AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>;
        })}
        <IconButton
          onClick={() => {
            go(`${summary}`);
          }}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
);
