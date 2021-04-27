import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/NavBar/Navbar";
import { FullLoader } from "../components/Loader/Loader";
import { AuthContext } from "../components/Auth";
import ListContainer from "../components/List/ListContainer";

export default function Home() {
  const { currentUser, userData } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Boreal - Inicio";
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  if (!currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div>
        <Navbar />
        <ListContainer />
      </div>
    </>
  );
}
