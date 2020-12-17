import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, IconButton, Tooltip, Zoom } from "@material-ui/core";
import Avatar from "./Avatar";
import { Menu as MenuIcon } from "@material-ui/icons";
import firebaseConfig from "../firebase/client";
import { AuthContext } from "./Auth";
import { Dropdown } from "react-bootstrap";
import "./styles/Navbar.css";
import "bootstrap/dist/css/bootstrap.css";

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

export default function ButtonAppBar(props) {
  const { userData, setUserData } = useContext(AuthContext);
  const classes = useStyles();
  const logOut = () => {
    firebaseConfig
      .auth()
      .signOut()
      .then(() => {
        setUserData(null);
      });
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Inicio
            </Typography>
            {userData && (
              <Dropdown alignRight className="">
                <Tooltip title="Menu" arrow TransitionComponent={Zoom} placement="right">
                  <Dropdown.Toggle className="menu-usuario" id="dropdown-menu-align-right">
                    <Avatar src={userData.avatar} alt={"Avatar"} text={userData.username} />
                  </Dropdown.Toggle>
                </Tooltip>

                <Dropdown.Menu>
                  <Link to="/home" className="nav-item text-decoration-none items-dropdown">
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
      {props.children}
    </>
  );
}
