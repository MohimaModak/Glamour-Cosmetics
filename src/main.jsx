import React from "react"; // Explicitly import React
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./assets/Component/Home/Home";
import './index.css';
import FeatureProduct from "./assets/Component/FeatureProduct/FeatureProduct";
import Products from "./assets/Component/Products/Products";
import Nailpolish from "./assets/Component/Nailpolish/Nailpolish";
import Makeup from "./assets/Component/Makeup/Makeup";
import Contact from "./assets/Component/Contact/Contact";
import Mascara from "./assets/Component/mascara/mascara";

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
        path: "/Makeup",
        element: <Makeup></Makeup>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/Mascara",
        element: <Mascara></Mascara>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
