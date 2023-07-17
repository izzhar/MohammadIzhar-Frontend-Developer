import React, { createContext, useState, useEffect } from "react";
import { fetchRockets } from "../api/spacex";

export const RocketsContext = createContext();

const RocketsContextProvider = ({ children }) => {
  const [rockets, setRockets] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
    original_launch: "",
    type: "",
  });

  useEffect(() => {
    fetchRockets()
      .then((data) => {
        setRockets(data);
      })
      .catch((error) => console.error("Error fetching rockets:", error));
  }, []);

  return (
    <RocketsContext.Provider value={{ rockets, filters, setFilters }}>
      {children}
    </RocketsContext.Provider>
  );
};

export default RocketsContextProvider;
