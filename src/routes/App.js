import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../components/Auth";
// Pages
import Login from "../pages/LoginPage";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import AddPatient from "../pages/AddPatient";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/inicio" component={Home} />
          <Route exact path="/crear" component={AddPatient} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
