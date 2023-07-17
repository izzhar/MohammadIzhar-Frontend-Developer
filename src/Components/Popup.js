import React from "react";
import { useLocation } from "react-router-dom";

const Popup = () => {
  const location = useLocation();
  const rocket = location.state?.item;

  if (!rocket) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h3 className="text-xl font-bold mb-2">{rocket.name}</h3>
        <table className="w-full mt-4 border-collapse">
          <tbody>
            <tr>
              <td className="p-2 font-bold">Status:</td>
              <td className="p-2">{rocket.active ? "Active" : "Inactive"}</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">First Flight:</td>
              <td className="p-2">{rocket.first_flight}</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Type:</td>
              <td className="p-2">{rocket.rocket_type}</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Description:</td>
              <td className="p-2">{rocket.description}</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Company:</td>
              <td className="p-2">{rocket.company}</td>
            </tr>
            <tr>
              <td className="p-2 font-bold">Country:</td>
              <td className="p-2">{rocket.country}</td>
            </tr>
          </tbody>
        </table>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
          onClick={() => window.history.back()}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
