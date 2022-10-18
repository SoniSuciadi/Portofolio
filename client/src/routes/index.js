import { createBrowserRouter } from "react-router-dom";
import { About } from "../pages/About";
import { Education } from "../pages/Education";
import { Experience } from "../pages/Experience";
import { Home } from "../pages/Home";
import { Project } from "../pages/Project";
import { Skill } from "../pages/Skill";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <About />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/experience",
        element: <Experience />,
      },
      {
        path: "/skill",
        element: <Skill />,
      },
      {
        path: "/project",
        element: <Project />,
      },
    ],
  },
]);

export default route;
