import React from "react";

const GridItem = ({ rocket }) => {
  if (!rocket) {
    return null;
  }

  const status = rocket.active ? "Active" : "Inactive";

  return (
    <div className="p-4 border border-gray-300 rounded shadow-md">
      <div className="h-40 mb-4 overflow-hidden rounded-md">
        {rocket.flickr_images ? (
          <img
            src={rocket.flickr_images}
            alt={rocket.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{rocket.name}</h3>
      <table className="w-full border-collapse">
        <tbody>
          <tr>
            <td className="p-2 font-bold">Rocket ID:</td>
            <td className="p-2">{rocket.rocket_id}</td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Status:</td>
            <td className="p-2">{status}</td>
          </tr>
          <tr>
            <td className="p-2 font-bold">First Flight:</td>
            <td className="p-2">{rocket.first_flight}</td>
          </tr>
          <tr>
            <td className="p-2 font-bold">Type:</td>
            <td className="p-2">{rocket.rocket_type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GridItem;
