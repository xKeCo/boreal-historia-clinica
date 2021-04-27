import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { AuthContext } from "../Auth";
import firebaseConfig from "../../firebase/client";
import { Loader } from "../Loader/Loader";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.css";

import Button from "../button/Button";
// import BorealLogo from "../images/BorealLogo";
import BorealLogo from "../../images/BorealLogo.png";

export default function Login() {
  const [form, setValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const { currentUser, userData } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Boreal - Login";
  }, []);

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors({});
    setLoading(true);
    document.querySelectorAll("input").forEach((input) => (input.disabled = true));
    firebaseConfig
      .auth()
      .signInWithEmailAndPassword(`${form.email}@gmail.com`, form.password)
      .catch((err) => {
        if (err.code === "auth/user-not-found" || err.code === "auth/wrong-password") {
          setErrors({
            incorrect: true,
          });
          setLoading(false);
        } else {
          setErrors({
            unexpected: true,
          });
          setLoading(false);
        }
      });
    document.querySelectorAll("input").forEach((input) => (input.disabled = false));
    setLoading(true);
  };

  if (currentUser) {
    return <Redirect to="/inicio" />;
  }

  return (
    <>
      <div className="login">
        <div className="login-details">
          <div className="login-image-container">
            <div className="login-image">
              <img src={BorealLogo} alt="Logo Boreal" />
              {/* <BorealLogo /> */}
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <TextField
              className="txtField w-100"
              label="Correo"
              variant="outlined"
              name="email"
              required
              onChange={handleInput}
              placeholder="Ej. pepito.perez"
            />
            <TextField
              className="txtField w-100 mt-3"
              label="Contraseña"
              type="password"
              name="password"
              onChange={handleInput}
              autoComplete="current-password"
              variant="outlined"
            />
            <Button type="submit" class="mt-3" value="Inicar Sesión" />
            {loading ? (
              <div>
                <Loader size={40} />
              </div>
            ) : (
              <div className="LoginRegister__error">
                <span>
                  <ul>
                    {errors.incorrect && (
                      <li className="LoginRegister__errors--li">
                        El correo o la contraseña es incorrecto.
                      </li>
                    )}
                    {errors.unexpected && (
                      <li className="LoginRegister__errors--li">
                        Ocurri&oacute; un error al enviar la informaci&oacute;n. Por favor intenta
                        de nuevo.
                      </li>
                    )}
                  </ul>
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
