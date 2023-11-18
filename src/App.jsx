// App.jsx
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Homepage from "./components/Homepage";
import Contactpage from "./components/Contactpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<Homepage />}
        />
        <Route
          path="/Homepage"
          element={<Homepage />}
        />
        <Route
          path="/Contactpage"
          element={<Contactpage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
