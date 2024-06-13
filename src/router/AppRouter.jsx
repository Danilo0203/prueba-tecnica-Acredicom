import { createBrowserRouter } from "react-router-dom";
import { AppPrueba } from "../AppPrueba";
import { Inicio } from "../librosApp/pages/Inicio";
import { Libros } from "../librosApp/pages/Libros";
import { Autores } from "../librosApp/pages/Autores";

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppPrueba />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "/libros",
        element: <Libros />,
      },
      {
        path: "/autores",
        element: <Autores />,
      },
    ],
  },
]);
