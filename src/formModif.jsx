import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { UsersContext } from "./App";

export default function FormModif() {

  const [users, , , modifier] = useContext(UsersContext);




  const { num } = useParams();
  

  const [nom, setNom] = useState(users[num].Nom);
  const [prenom, setPrenom] = useState(users[num].Prenom);
  const [mail, setEmail] = useState(users[num].Email);

  const navigate = useNavigate();

  function HandelClick() {
    const User = { Nom: nom, Prenom: prenom, Email: mail };
    modifier(User, num);
    navigate("/");
  }

  return (
    <>
      <div className="form-container">
        <h2>Modifier Utilistateur</h2>
        <label htmlFor="nom">Nom : </label>
        <input
          type="text"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />

        <label htmlFor="prenom">Prénom : </label>
        <input
          type="text"
          id="prenom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />

        <label htmlFor="mail">Email : </label>
        <input
          type="text"
          id="mail"
          value={mail}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={HandelClick}>Modifier</button>
      </div>
    </>
  );
}
