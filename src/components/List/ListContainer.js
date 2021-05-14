import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ListContainer.css";
import "bootstrap/dist/css/bootstrap.css";
import Searchbar from "../Searchbar";
import { Button } from "@material-ui/core";
import { AddCircleOutlineRounded as AddCircleOutlineRoundedIcon } from "@material-ui/icons";
import { database } from "../../firebase/client";
import { LoaderBottom } from "../Loader/Loader";

export default function ListContainer() {
  const [Loading, setLoading] = useState(true);
  const [Errors, setErrors] = useState(null);
  const [Data, setData] = useState([]);

  useEffect(() => {
    getDataClientes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataClientes = async () => {
    try {
      await database
        .collection("clientes")
        .orderBy("fechaCreacion", "desc")
        .limit(10)
        .onSnapshot((querysnapshot) => {
          const docs = [];
          setLoading(true);

          querysnapshot.forEach((doc) => {
            docs.push({ ...doc.data(), id: doc.id });
          });

          setData(docs);
          setLoading(false);
        });
    } catch (error) {
      setLoading(false);
      setErrors(error);
    }
  };

  return (
    <>
      <Searchbar setData={setData} />
      <div className="AñadirPaciente-container">
        <Link to="/nuevo" className="text-decoration-none text-dark">
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
      {Loading ? (
        <div>
          <LoaderBottom />
        </div>
      ) : (
        <>
          {Errors ? (
            <h3>Ocurri&oacute; un error.</h3>
          ) : (
            <>
              {Data.length === 0 ? (
                <div className="ListContainer">
                  <div className="Novedades-details">
                    <h5 className="font-weight-bold mb-0">No hay clientes aun</h5>
                  </div>
                </div>
              ) : (
                <>
                  {Data.map((data) => {
                    return (
                      <React.Fragment key={data.id}>
                        <Link to={`/perfil/${data.id}`} className="text-decoration-none text-dark">
                          <div className="ListContainer" key={data.id}>
                            <div className="ListContainer-Details">
                              <div className="Novedades-details">
                                <h5 className="font-weight-bold mb-0">{data.nombreCompleto}</h5>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </React.Fragment>
                    );
                  })}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
