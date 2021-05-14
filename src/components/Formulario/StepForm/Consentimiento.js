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
  container: {
    marginRight: "1rem",
    marginTop: "1rem",
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Consentimiento({ formData, setForm, navigation }) {
  const { nombreCompleto, numeroDocumento, consentimiento } = formData;
  const [setConsentimiento] = React.useState("");
  const classes = useStyles();
  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const fechaHoy = new Date();
  const ano = fechaHoy.getFullYear();
  const mesTexto = meses[fechaHoy.getMonth()];
  const dia = fechaHoy.getDate();

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
        <h3 className="font-weight-bold mt-3">
          CONSENTIMIENTO INFORMADO PARA LA PRACTICA DE INTERVENCIONES Y RPOCEDIMIENTOS CLINICOS
          ODONTOLOGICOS
        </h3>
        <div className={classes.container}>
          <h6 className="font-weight-bold mt-3 mr-3">
            Ciudad: <span>Santiago de Cali, Colombia.</span>
          </h6>
          <h6 className="font-weight-bold mt-3 mr-3">
            Fecha:
            <span>{` ${ano} / ${mesTexto} / ${dia}`}</span>
          </h6>
        </div>
        <p className="mt-3">
          Yo <span className="font-weight-bold text-capitalize">{`${nombreCompleto} `}</span>
          idendentificado con N°
          <span className="font-weight-bold">{` ${numeroDocumento}`}</span> por medio del presente
          escrito y en mi condicion de paciente. Manifiesto que:
        </p>

        <ol className="ml-4">
          <li>
            Se me ha informado con claridad y en detalle la alteración odontológica que padezco se
            denomina
          </li>
          <li>
            Se me ha informado con claridad y en detalle que la alteración, patologia o enfermedad
            odontológica descrita anteriormente, requiere para su tratamiento, la práctica del
            procedimiento odontológico o intervención quirúrgica denominada:
          </li>
          <li>
            Se me ha informado con claridad y en detalle acerca de los riesgos que se derivan del
            procedimiento odontológico o intervención quirúrgica a practicar, que son entre otros,
            riesgos potenciales inherentes a cualquier procedimientos clinico y entiendo que los
            riesgos no están limitados solo a complicaciones debido al uso de instrumental,
            medicamentos, inflamación, sensibilidad, sangrado, dolor, sensación de adormecimiento,
            de labios, lengua, mentón, encia y dientes, reacciones a inyecciones, cambios en la
            oclusión (mordida); espasmos en la mandibula y músculos, dificultades a nivel de la
            articulación temporomandibular, movilidad dental y de coronas o puentes existentes,
            dolor referido al oido, cuello y cabeza, nausea, vómito, reacciones alérgicas,
            cicatrización tardia, perforación de senos maxilares, fractura de dientes, corona o raiz
            de compleja resolución.
          </li>
          <li>
            Autorizo que el procedimiento odontologico o intervencion quirurgica, asi como todo
            procedimiento necesario para enfrentar situaciones imprevisibles, riesgos o
            complicaciones derivadas directa o indirectamente del procedimiento inicial, se efectuen
            por el/la doctor@
            <span className="font-weight-bold"> Dra. Sandra Patricia Peña Burbano </span>y el
            personal profesional que estimen conveniente.
          </li>
          <li>
            Otorgo mi consentimiento para que la anestesia sea aplicada por parte del odontólogo y
            los autorizo para utilizar el tipo de anestesia que consideren más aconsejable de
            acuerdo con mi condición clinico patológica y el tipo de intervención que requiero. He
            sido advertido por el/la doctor@ de odontologia, sobre los riesgos que para mi caso
            comporta la aplicación de anestesia, de conformidad con la constancia que figura en la
            historia clinica.
          </li>
          <li>
            Me obligo con el profesional y con el personal de odontologia a cumplir con los cuidados
            pre y post al procedimiento indicado por el especialista para restablecer mi salud.
            Cumpliré o vigilaré que se cumpla con las citas odontológicas, prescripciones, dietas,
            instrucciones y controles periódicos.
          </li>
          <li>Me Obligo a cancelar el costo total de los servicios de salud oral.</li>
        </ol>

        <p>
          En constancia de lo anterior, firmo el presente documento a los
          <span className="font-weight-bold text-capitalize">{` ${dia}`}</span> días del mes de
          <span className="font-weight-bold text-capitalize">{` ${mesTexto} `}</span>
          del año <span className="font-weight-bold text-capitalize">{` ${ano}`}</span>.
        </p>

        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Acepta?</InputLabel>
          <Select
            label="consentimiento"
            name="consentimiento"
            onChange={(handleChangeConsentimiento, setForm)}
            required
            value={consentimiento}
            error={consentimiento === "No"}
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
