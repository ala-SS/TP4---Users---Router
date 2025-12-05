import { useState } from "react";
import "./App.css";
import { createContext } from "react";
import Menu from "./menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./listeUsers";
import FormAjout from "./formAjout";
import FormModif from "./formModif";

export const UsersContext = createContext();

function App() {



  const [users, setUsers] = useState([]);

  function ajouter(user) {
    setUsers([...users, user]);
  }

  function modifier(user, index) {
    users[index] = user;
    setUsers([...users]);
  }

  function supprimer(index) {
    if (
      confirm(
        "Supprimer l'utilisateur ? : " +
          users[index].Nom +
          " " +
          users[index].Prenom
      )
    ) {
      users.splice(index, 1);
      setUsers([...users]);
    }
  }

  return (
    <UsersContext.Provider value={[users, ajouter, supprimer, modifier]}>
     
     
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/ajouter" element={<FormAjout />} />
          <Route path="/modifier/:num" element={<FormModif />} />
        </Routes>
        
      </BrowserRouter>


      
    </UsersContext.Provider>
  );
}

export default App;
