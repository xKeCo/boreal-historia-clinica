import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../components/Auth";
import Login from "../pages/Login";
import PageNotFound from "../pages/PageNotFound";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          {/* <Route exact path="/home" component={Home} /> */}
          <Route exact path="/" component={Login} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
