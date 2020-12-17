import React, { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../components/Auth";

export default function Home() {
  const { currentUser, userData } = useContext(AuthContext);

  useEffect(() => {
    document.title = "Boreal - Inicio";
  }, []);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <Navbar />
      {userData && <h1>{userData.username}</h1>}
    </div>
  );
}
