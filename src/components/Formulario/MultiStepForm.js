import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import General from "./StepForm/General";
import Anamnesis from "./StepForm/Anamnesis";
import Consentimiento from "./StepForm/Consentimiento";
import Revision from "./StepForm/Revision";

const defaultData = {
  nombreCompleto: "",
  genero: "",
  tipoSangre: "",
  edad: "",
  estatura: "1",
  peso: "",
  email: "",
  numeroDocumento: "",
  estadoCivil: "",
  direccion: "",
  telefono1: "",
  telefono2: "",
  numeroEmergencia: "",
  EPS: "",
  consultaMedica: "",
  tratamientoMedico: "",
  radiografias: "",
  motivoConsulta: "",
  enfermedadActual: "NADA",
  antDiabetes: "",
  antCancer: "",
  antLeucemia: "",
  antCardiopatias: "",
  alergia: "NADA",
  diabetes: "NO",
  cancer: "NO",
  leucemia: "NO",
  cardiopatias: "NO",
  cirugias: "",
  hospitalarios: "",
  psicologicos: "",
  HTA: "NO",
  consentimiento: "No",
};

const steps = [
  { id: "General" },
  { id: "Anamnesis" },
  { id: "Consentimiento" },
  { id: "Revision" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "General":
      return <General {...props} />;
    case "Anamnesis":
      return <Anamnesis {...props} />;
    case "Consentimiento":
      return <Consentimiento {...props} />;
    case "Revision":
      return <Revision {...props} />;
    default:
      return "Ha ocurrido un error, intentalo despues";
  }
};
