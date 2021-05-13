import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthContextProvider } from "../components/Auth";
// Pages
// import Login from "../pages/LoginPage";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import AddPatient from "../pages/AddPatient";
import PerfilUsuario from "../pages/PerfilUsuario";

export default function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/inicio" component={Home} /> */}
          <Route exact path="/crear" component={AddPatient} />
          <Route exact path="/perfil/:id" component={PerfilUsuario} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
