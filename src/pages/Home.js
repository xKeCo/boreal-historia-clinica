import React, {
  // useState,
  useEffect,
} from "react";
import Navbar from "../components/NavBar/Navbar";
import { useAuth } from "../components/Auth";
// import { FullLoader } from "../components/Loader/Loader";
import ListContainer from "../components/List/ListContainer";
import Login from "../components/Login/Login";
import { FullLoader } from "../components/Loader/Loader";

export default function Home() {
  const { userData, loadingUser } = useAuth();

  // const [loading, setLoading] = useState(false);

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
