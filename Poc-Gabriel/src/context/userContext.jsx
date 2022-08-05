import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([
    {
      id: uuidv4(),
      name: "Salman",
      cpf: "Front End Dev",
      email: 28000,
      cep: 1,
      fone: "(85)93424244",
    },
    {
      id: uuidv4(),
      name: "Shuvo",
      cpf: "Data Scientist",
      email: 26000,
      cep: 1,
      fone: "(85)93424244",
    },
    {
      id: uuidv4(),
      name: "Mahadi",
      cpf: "Full Stack Dev",
      email: 27000,
      cep: 1,
      fone: "(85)93424244",
    },
  ]);

  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
