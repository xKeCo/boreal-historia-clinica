// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// // Conmponentes
// import { AppBar, Toolbar, Typography, IconButton, Tooltip, Zoom } from "@material-ui/core";
// // Drawer
// import {
//   Drawer,
//   // Button,
//   List,
//   // Divider,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from "@material-ui/core";
// import { Dropdown } from "react-bootstrap";
// import { AuthContext } from "../Auth";
// import firebaseConfig from "../../firebase/client";
// import Avatar from "../Avatar/Avatar";
// // Iconos
// import {
//   Menu as MenuIcon,
//   Close as CloseIcon,
//   AddCircleOutlineRounded as AddCircleOutlineRoundedIcon,
// } from "@material-ui/icons";
// // Estilos
// import "./Navbar.css";
// import "bootstrap/dist/css/bootstrap.css";
// import { makeStyles } from "@material-ui/core/styles";
// import { green } from "@material-ui/core/colors";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
//   list: {
//     width: 250,
//   },
//   fullList: {
//     width: "auto",
//   },
// }));

// export default function ButtonAppBar(props) {
//   const { userData, setUserData } = useContext(AuthContext);
//   const [state, setState] = useState({
//     left: false,
//   });
//   const classes = useStyles();

//   const logOut = () => {
//     firebaseConfig
//       .auth()
//       .signOut()
//       .then(() => {
//         setUserData(null);
//       });
//   };

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <div
//       className={classes.fullList}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List className="ml-3 mr-4">
//         <ListItemIcon className="mt-3 ml-3 cursor-pointer">
//           <CloseIcon onClose={toggleDrawer("left", false)} />
//         </ListItemIcon>

//         <Link to="/" className="nav-item text-decoration-none items-dropdown">
//           <ListItem className="sideMenu-Item-emprendedor">
//             <ListItemIcon>
//               <AddCircleOutlineRoundedIcon style={{ color: green[500] }} />
//             </ListItemIcon>
//             <ListItemText primary={"Agregar nuevo paciente"} />
//           </ListItem>
//         </Link>

//         <Link to="/" className="nav-item text-decoration-none items-dropdown">
//           <ListItem className="sideMenu-Item-emprendedor">
//             <ListItemText primary={"Item 2"} />
//           </ListItem>
//         </Link>

//         <Link to="/" className="nav-item text-decoration-none items-dropdown">
//           <ListItem className="sideMenu-Item-emprendedor">
//             <ListItemText primary={"Item 3"} />
//           </ListItem>
//         </Link>
//       </List>
//     </div>
//   );

//   console.log(userData);

//   return (
//     <>
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Toolbar>
//             <React.Fragment key={"left"}>
//               <IconButton
//                 edge="start"
//                 className={classes.menuButton}
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={toggleDrawer("left", true)}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Drawer anchor={"left"} open={state["left"]} onClose={toggleDrawer("left", false)}>
//                 {list("left")}
//               </Drawer>
//             </React.Fragment>
//             <Typography variant="h6" className={classes.title}>
//               {props.text}
//             </Typography>
//             {userData && (
//               <Dropdown alignRight className="">
//                 <Tooltip title="Menu" arrow TransitionComponent={Zoom} placement="right">
//                   <Dropdown.Toggle className="menu-usuario" id="dropdown-menu-align-right">
//                     <Avatar src={userData.avatar} alt={"Avatar"} text={userData.username} />
//                   </Dropdown.Toggle>
//                 </Tooltip>

//                 <Dropdown.Menu>
//                   <Link to="/" className="nav-item text-decoration-none items-dropdown">
//                     <div className="dropdown-1">Inicio</div>
//                   </Link>

//                   {/* <Link
//                   to={`/perfil/${userData.uID}`}
//                   className="nav-item text-decoration-none items-dropdown"
//                 > */}
//                   <div className="dropdown-1">Perfil</div>
//                   {/* </Link> */}
//                   <Dropdown.Divider />

//                   <Dropdown.Item onClick={logOut} className="dropdown text-danger">
//                     Cerrar sesi&oacute;n
//                   </Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             )}
//           </Toolbar>
//         </AppBar>
//       </div>
//       {props.children}
//     </>
//   );
// }

import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
// Componentes
import { AppBar, Toolbar, Typography, IconButton, Tooltip, Zoom } from "@material-ui/core";
// Drawer
import {
  Drawer,
  // Button,
  List,
  // Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Dropdown } from "react-bootstrap";
import { AuthContext } from "../Auth";
import firebaseConfig from "../../firebase/client";
import Avatar from "../Avatar/Avatar";
// Iconos
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  AddCircleOutlineRounded as AddCircleOutlineRoundedIcon,
} from "@material-ui/icons";
// Estilos
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import { makeStyles } from "@material-ui/core/styles";
import BorealLogo from "../../images/BorealLogo";

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
  const { userData, setUserData } = useContext(AuthContext);
  const logOut = () => {
    firebaseConfig
      .auth()
      .signOut()
      .then(() => {
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
