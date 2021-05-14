import React, { useEffect, useState } from "react";
import {
  Redirect,
  Link,
  // useHistory,
} from "react-router-dom";
// Estilos CSS
import "./styles/SaludUsuario.css";
import "bootstrap/dist/css/bootstrap.css";
// Conexion Firebase Database
import { database } from "../firebase/client";
// Componentes utilizados
import NavegationBar from "../components/NavBar/Navbar";
import { useAuth } from "../components/Auth";
// import Loader from "../components/Loader";
import { LoaderBottom } from "../components/Loader/Loader";
// import Avatar from "../components/Avatar/Avatar";
// Material UI
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
  Drawer,
  // Breadcrumbs,
  // Typography,
} from "@material-ui/core";
// Material UI Icons
import {
  Person as PersonIcon,
  Assignment as AssignmentIcon,
  ExitToApp as ExitToAppIcon,
  MoreVert as MoreVertIcon,
  PlaylistAdd as PlaylistAddIcon,
} from "@material-ui/icons/";
// Material UI Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    height: "200px",
  },
  buttonsContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
});

export default function PerfilUsuario(props) {
  const { userData } = useAuth();
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Errors, setErrors] = useState(null);

  const id = props.match.params.id;

  useEffect(() => {
    document.title = "Sinapsis UAO - Perfil";
    getDataCliente();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Conseguir informacion del emprendedor a revisar
  const getDataCliente = async () => {
    try {
      setLoading(true);
      const res = await database.collection("clientes").doc(id).get();

      setLoading(false);
      setData(res.data());
    } catch (error) {
      setLoading(false);
      setErrors(error);
    }
  };

  // Drawer - Menu desplazable
  const classes = useStyles();
  const [state, setState] = React.useState({
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="ml-3">
        <Link to="/" className="nav-item text-decoration-none items-dropdown">
          <ListItem className="sideMenu-Item-emprendedor">
            <ListItemIcon>
              <PlaylistAddIcon />
            </ListItemIcon>
            <ListItemText primary={"Crear nuevo reporte"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
  // Drawer - Menu desplazable END

  // Funcion para sacar a un usuario que no tiene la sesión activa
  if (!userData) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <NavegationBar />
      {Loading ? (
        <div>
          <LoaderBottom />
          {/* <Loader /> */}
        </div>
      ) : (
        <>
          {Errors ? (
            <h3>Ocurri&oacute; un error.</h3>
          ) : (
            <>
              {
                <>
                  <div className="todo-revisarautodiagnostico_container ">
                    <h3 className="text-center mt-5 font-weight-bold mb-4">
                      {Data.nombreCompleto}
                    </h3>
                    <div className="datos-usuario_container">
                      {/* <div className="UserImage_container">
                        <Avatar
                          src={Data.avatar}
                          alt={"Avatar"}
                          className="User-Avatar_container"
                        />
                        <div className="FirstLogin_button_container mt-4">
                          <div>
                            <h6 className="text-center">{Data.motivoConsulta}</h6>
                          </div>
                        </div>
                      </div> */}
                      <div className="UserInformation_container">
                        <List disablePadding className="RevisarAutodiagnostico-List mb-3">
                          <ListItem>
                            <ListItemText primary="Alergias" secondary={Data.alergia} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText
                              primary="Enfermedad actual"
                              secondary={Data.enfermedadActual}
                            />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText
                              primary="Antecedentes familiar de diabetes"
                              secondary={Data.antDiabetes}
                            />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText
                              primary="Antecedentes familiar de cancer"
                              secondary={Data.antCancer}
                            />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText
                              primary="Antecedentes familiar de leucemia"
                              secondary={Data.antLeucemia}
                            />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText
                              primary="Antecedentes familiar de cardiopatias"
                              secondary={Data.antCardiopatias}
                            />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemText primary="Cirugias" secondary={Data.cirugias} />
                          </ListItem>
                        </List>

                        <List disablePadding className="RevisarAutodiagnostico-List">
                          <ListItem>
                            <ListItemText primary="Diabetes" secondary={Data.diabetes} />
                          </ListItem>

                          <Divider />
                          <ListItem>
                            <ListItemText primary="Cancer" secondary={Data.cancer} />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemText primary="Leucemia" secondary={Data.leucemia} />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemText primary="Cardiopatias" secondary={Data.cardiopatias} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText primary="HTA" secondary={Data.HTA} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText primary="Hospitalarios" secondary={Data.hospitalarios} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText primary="Psicologicos" secondary={Data.psicologicos} />
                          </ListItem>
                        </List>
                      </div>
                      <div className={classes.buttonsContainer}>
                        <div className="FirstLogin_button_container ml-3 mr-3 mt-4">
                          <div>
                            <Link
                              to={`/reporte/${id}`}
                              className=" text-decoration-none items-dropdown"
                            >
                              <Button
                                type="input"
                                variant="contained"
                                className="button-0"
                                color="primary"
                                endIcon={<AssignmentIcon />}
                              >
                                Reporte
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <div className="FirstLogin_button_container mr-3 ml-3 mt-4">
                          <div>
                            <Link
                              to={`/perfil/${id}`}
                              className="text-decoration-none items-dropdown"
                            >
                              <Button
                                type="input"
                                variant="contained"
                                className="button-0"
                                color="primary"
                                endIcon={<PersonIcon />}
                              >
                                General
                              </Button>
                            </Link>
                          </div>
                        </div>
                        <React.Fragment key={"bottom"}>
                          <div className="FirstLogin_button_container ml-3 mr-3 mt-4">
                            <div>
                              <Button
                                variant="contained"
                                className="button-0"
                                color="primary"
                                endIcon={<MoreVertIcon />}
                                onClick={toggleDrawer("bottom", true)}
                              >
                                Acciones
                              </Button>
                            </div>
                          </div>
                          <Drawer
                            anchor={"bottom"}
                            open={state["bottom"]}
                            onClose={toggleDrawer("bottom", false)}
                          >
                            {list("bottom")}
                          </Drawer>
                        </React.Fragment>
                      </div>
                    </div>

                    <div className="Button-volver mt-4 mb-5 ">
                      <Link to={`/perfil/${id}`} className=" text-decoration-none items-dropdown">
                        <Button
                          variant="contained"
                          color="secondary"
                          className="button-2"
                          startIcon={<ExitToAppIcon />}
                        >
                          Volver
                        </Button>
                      </Link>
                    </div>
                  </div>
                </>
              }
            </>
          )}
        </>
      )}
    </>
  );
}
