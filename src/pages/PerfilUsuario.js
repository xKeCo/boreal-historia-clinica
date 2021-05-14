import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
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
// Material UI Styles
import PerfilUsuarioComponent from "../components/PerfilUsuarioComponent";
import SaludUsuarioComponent from "../components/SaludUsuarioComponent";

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
              {props.match.path === "/perfil/:id" ? (
                <PerfilUsuarioComponent id={id} Data={Data} />
              ) : (
                <SaludUsuarioComponent id={id} Data={Data} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
