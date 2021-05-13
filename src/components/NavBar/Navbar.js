import React from "react";
import { Link } from "react-router-dom";
// Componentes
import {
  AppBar,
  Toolbar,
  // , Typography, IconButton
  Tooltip,
  Zoom,
} from "@material-ui/core";
import { Dropdown } from "react-bootstrap";
import { auth } from "../../firebase/client";

import Avatar from "../Avatar/Avatar";
// Estilos
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { makeStyles } from "@material-ui/core/styles";
import BorealLogo from "../../images/BorealLogo";
import { useAuth } from "../Auth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
<<<<<<< HEAD
<<<<<<< HEAD
  const { userData, setUserData } = useAuth();
=======
  const { userData, loadingUser, setUserData } = useAuth();
>>>>>>> 7157e9bd162392a3b01a7e1eb8f21ccaa62f905e
=======
  const { userData, loadingUser, setUserData } = useAuth();
>>>>>>> 7157e9bd162392a3b01a7e1eb8f21ccaa62f905e

  const logOut = () => {
    auth.signOut().then(() => {
      setUserData(null);
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <BorealLogo width={60} height={60} />
          </Link>

          {userData && (
            <Dropdown alignRight className="">
              <Tooltip title="Menu" arrow TransitionComponent={Zoom} placement="right">
                <Dropdown.Toggle className="menu-usuario" id="dropdown-menu-align-right">
                  <Avatar src={userData.avatar} alt={"Avatar"} text={userData.username} />
                </Dropdown.Toggle>
              </Tooltip>

              <Dropdown.Menu>
                <Link to="/" className="nav-item text-decoration-none items-dropdown">
                  <div className="dropdown-1">Inicio</div>
                </Link>

                {/* <Link
                  to={`/perfil/${userData.uID}`}
                  className="nav-item text-decoration-none items-dropdown"
                > */}
                <div className="dropdown-1">Perfil</div>
                {/* </Link> */}
                <Dropdown.Divider />

                <Dropdown.Item onClick={logOut} className="dropdown text-danger">
                  Cerrar sesi&oacute;n
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
