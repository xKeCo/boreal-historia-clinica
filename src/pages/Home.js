import React, { useEffect } from "react";
import Navbar from "../components/NavBar/Navbar";
import { useAuth } from "../components/Auth";
import ListContainer from "../components/List/ListContainer";
import Login from "../components/Login/Login";
import { FullLoader } from "../components/Loader/Loader";

export default function Home() {
  const { userData, loadingUser } = useAuth();

  useEffect(() => {
    document.title = "Boreal - Inicio";
  }, []);

  return (
    <>
      {userData ? (
        <>
          <Navbar />
          <ListContainer />
        </>
      ) : loadingUser ? (
        <FullLoader />
      ) : (
        <Login />
      )}
    </>
  );
}
