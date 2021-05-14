import React, { useEffect, useState } from "react";
import {
  Redirect,
  Link,
  // useHistory,
} from "react-router-dom";
// Estilos CSS
import "./styles/PerfilUsuario.css";
import "bootstrap/dist/css/bootstrap.css";
// Conexion Firebase Database
import { database } from "../firebase/client";
// Componentes utilizados
import NavegationBar from "../components/NavBar/Navbar";
import { useAuth } from "../components/Auth";
// import Loader from "../components/Loader";
import { LoaderBottom } from "../components/Loader/Loader";
import Avatar from "../components/Avatar/Avatar";
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
  Favorite as FavoriteIcon,
  Assignment as AssignmentIcon,
  ExitToApp as ExitToAppIcon,
  Edit as EditIcon,
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
});

export default function SaludUsuario(props) {
  const { userData } = useAuth();
  const [Data, setData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Errors, setErrors] = useState(null);

  const id = props.match.params.id;

  useEffect(() => {
    document.title = "Sinapsis UAO - Salud";
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
                      <div className="UserImage_container">
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
                      </div>
                      <div className="UserInformation_container">
                        <List disablePadding className="RevisarAutodiagnostico-List mb-3">
                          <ListItem>
                            <ListItemText primary="Correo del emprendedor" secondary={Data.email} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText primary="Direcci&oacute;n" secondary={Data.direccion} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText primary="EPS" secondary={Data.EPS} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText primary="Tipo de sangre" secondary={Data.tipoSangre} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText primary="Tel&eacute;fono 1" secondary={Data.telefono1} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText
                              primary="Tel&eacute;fono emergencia"
                              secondary={Data.numeroEmergencia}
                            />
                          </ListItem>
                          <Divider />
                        </List>

                        <List disablePadding className="RevisarAutodiagnostico-List">
                          <ListItem>
                            <ListItemText primary="Cedula" secondary={Data.numeroDocumento} />
                          </ListItem>

                          <Divider />
                          <ListItem>
                            <ListItemText primary="G&eacute;nero" secondary={Data.genero} />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemText primary="Edad" secondary={`${Data.edad} años`} />
                          </ListItem>
                          <Divider />
                          <ListItem>
                            <ListItemText primary="Estatura" secondary={`${Data.estatura} cm`} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText primary="Tel&eacute;fono 2" secondary={Data.telefono2} />
                          </ListItem>
                          <Divider />

                          <ListItem>
                            <ListItemText primary="Estado civil" secondary={Data.estadoCivil} />
                          </ListItem>
                          <Divider />
                        </List>
                      </div>
                      <>
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
                              to={`/salud/${id}`}
                              className=" text-decoration-none items-dropdown"
                            >
                              <Button
                                type="input"
                                variant="contained"
                                className="button-0"
                                color="primary"
                                endIcon={<FavoriteIcon />}
                              >
                                Salud
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </>
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
                      <div className="FirstLogin_button_container ml-3 mr-3 mt-4">
                        <div>
                          <Link to="/" className=" text-decoration-none items-dropdown">
                            <Button
                              variant="contained"
                              className="button-0"
                              color="primary"
                              endIcon={<EditIcon />}
                            >
                              Editar Perfil
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="Button-volver mt-4 mb-5 ">
                      <Link to="/" className=" text-decoration-none items-dropdown">
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
