import React, { useContext } from "react";
import { RocketsContext } from "../Context/RocketsContext";

const SearchForm = () => {
  const { filters, setFilters } = useContext(RocketsContext);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="p-4 bg-white border border-gray-300">
      <h2 className="text-xl font-bold mb-4">Search Filters</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="status">Status:</label>
          <select
            name="status"
            id="status"
            className="w-full border border-gray-300 rounded px-2 py-1"
            value={filters.status}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label htmlFor="original_launch">Original Launch:</label>
          <input
            type="text"
            name="original_launch"
            id="original_launch"
            className="w-full border border-gray-300 rounded px-2 py-1"
            value={filters.original_launch}
            onChange={handleFilterChange}
            placeholder="YYYY-MM-DD"
          />
        </div>
        <div>
          <label htmlFor="type">Type:</label>
          <select
            name="type"
            id="type"
            className="w-full border border-gray-300 rounded px-2 py-1"
            value={filters.type}
            onChange={handleFilterChange}
          >
            <option value="">All</option>
            <option value="rocket">Rocket</option>
            <option value="capsule">Capsule</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
