import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { RocketsContext } from "../Context/RocketsContext";
import GridItem from "./GridItem";

const DataGrid = () => {
  const { rockets, filters } = useContext(RocketsContext);

  const filteredRockets = rockets.filter((rocket) => {
    if (!rocket) {
      return false;
    }

    const { status, original_launch, type } = filters;
    return (
      (status === "" ||
        (status === "active" ? rocket.active : !rocket.active)) &&
      (original_launch === "" ||
        rocket.first_flight.includes(original_launch)) &&
      (type === "" || rocket.rocket_type === type)
    );
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {filteredRockets.map((rocket) => (
        <Link key={rocket.id} to="/popup" state={{ item: rocket }}>
          <GridItem key={rocket.id} rocket={rocket} />
        </Link>
      ))}
    </div>
  );
};

export default DataGrid;
