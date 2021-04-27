import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import General from "./StepForm/General";
import Anamnesis from "./StepForm/Anamnesis";
import Consentimiento from "./StepForm/Consentimiento";
import Revision from "./StepForm/Revision";

const defaultData = {
  nombreCompleto: "",
  edad: "",
  email: "",
  genero: "",
  tipoSangre: "",
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
  }

  return (
    <>
      <h1>Holis</h1>
    </>
  );
};