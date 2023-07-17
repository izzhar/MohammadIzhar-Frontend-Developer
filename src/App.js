import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RocketsContextProvider from "./Context/RocketsContext";
import Banner from "./Components/Banner";
import SearchForm from "./Components/SearchForm";
import DataGrid from "./Components/DataGrid";
import Popup from "../src/Components/Popup";

const App = () => {
  return (
    <Router>
      <RocketsContextProvider>
        <div className="bg-gray-100 min-h-screen">
          <Banner />
          <SearchForm />
          <Routes>
            <Route path="/" element={<DataGrid />} />
            <Route path="/popup" element={<Popup />} />
          </Routes>
        </div>
      </RocketsContextProvider>
    </Router>
  );
};

export default App;
