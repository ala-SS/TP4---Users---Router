import { Link } from "react-router-dom";
import Users from "./listeUsers";
import FormAjout from "./formAjout";

export default function Menu() {
  return (
    <>
      <nav>
        <Link to="/"> Utilistateurs </Link>|
        <Link to="ajouter"> Ajouter Utilistateur</Link>
      </nav>
      <hr></hr>
    </>
  );
}
