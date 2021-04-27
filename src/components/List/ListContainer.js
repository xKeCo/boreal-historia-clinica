import React from "react";
import { Link } from "react-router-dom";
import "./ListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import Searchbar from "../Searchbar";
import { Button } from "@material-ui/core";
import { AddCircleOutlineRounded as AddCircleOutlineRoundedIcon } from "@material-ui/icons";

export default function List() {
  return (
    <>
      <Searchbar />
      <div className="AñadirPaciente-container">
        <Link to="crear" className="text-decoration-none text-dark">
          <Button
            type="input"
            variant="contained"
            color="primary"
            className="AñadirPaciente-button mb-1"
            startIcon={<AddCircleOutlineRoundedIcon />}
          >
            Añadir Paciente
          </Button>
        </Link>
      </div>

      <div className="ListContainer ">
        <div className="ListContainer-Details">
          <div className="Novedades-details">
            <h5 className="font-weight-bold mb-0">Kevin Collazos Peña</h5>
          </div>
        </div>
      </div>
    </>
  );
}
