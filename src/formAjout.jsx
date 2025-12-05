import { useContext } from "react";
import { useState } from "react";
import { UsersContext } from "./App";
import { useNavigate } from "react-router-dom";

export default function FormAjout() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setEmail] = useState("");

  const [, add] = useContext(UsersContext);

  const a = useNavigate();

  function HandelClick() {
    if (nom === "" || prenom === "" || mail === "")
      alert("champs Obligatoirs !! ");
    else {
      const User = { Nom: nom, Prenom: prenom, Email: mail };
      add(User);
      a("/");
    }
  }

  return (
    <>
      <div className="form-container">
        <h2>Ajouter Utilistateur</h2>
        <label htmlFor="nom">Nom : </label>
        <input type="text" id="nom" onChange={(e) => setNom(e.target.value)} />

        <label htmlFor="prenom">Prénom : </label>
        <input
          type="text"
          id="prenom"
          onChange={(e) => setPrenom(e.target.value)}
        />

        <label htmlFor="mail">Email : </label>
        <input
          type="text"
          required
          id="mail"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="button" onClick={HandelClick}>
          Ajouter Utilistateur
        </button>
      </div>
    </>
  );
}
