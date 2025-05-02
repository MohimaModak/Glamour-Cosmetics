import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import FeatureProduct from "./assets/Component/FeatureProduct/FeatureProduct";
import Products from "./assets/Component/Products/Products";
import Nailpolish from "./assets/Component/Nailpolish/Nailpolish";
import Mascara from "./assets/Component/mascara/mascara";
import Makeup from "./assets/Component/Makeup/Makeup";
import Contact from "./assets/Component/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/FeatureProduct",
        element: <FeatureProduct></FeatureProduct>,
      },
      {
        path: "/Products",
        element: <Products></Products>,
      },
      {
        path: "/Nailpolish",
        element: <Nailpolish></Nailpolish>,
      },
      {
        path: "/Mascara",
        element: <Mascara></Mascara>,
      },
      {
        path: "/Makeup",
        element: <Makeup></Makeup>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
