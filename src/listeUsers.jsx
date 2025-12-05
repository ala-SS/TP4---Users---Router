import { useContext } from "react";
import { UsersContext } from "./App";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Users() {
  const [users, , supprimer] = useContext(UsersContext);

  const x = useNavigate();

  return (
    <>
      <h2>
        {users.length > 0
          ? users.length + " Utilisateur(s)"
          : "Aucun utilisateur"}{" "}
      </h2>

      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>N°</th>
              <th>Nom et Prénom</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.Nom + " " + user.Prenom}</td>
                <td>{user.Email}</td>
                <td>
                  <button onClick={() => supprimer(index)} className="btnSupp">
                    Supprimer
                  </button>
                  <button
                    onClick={() => x("/modifier/" + index)}
                    className="btnModif"
                  >
                    Modifier
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
