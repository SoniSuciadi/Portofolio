import { Outlet, RouterProvider } from "react-router-dom";
import "./App.css";

import { NavBar } from "./components/NavBar";
import route from "./routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
