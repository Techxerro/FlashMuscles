import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../views/layouts/layout";
import Firstproduct from "../views/pages/Product1/Firstproduct";
import Home from "../views/pages/Homepage/Home";
import Connection from "../views/pages/ConnectedPage/Connection";
import CartPage from "../Cart/CartPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "Shop",
          element: <Firstproduct />,
        },
        {
          path: "Learn",
          element: <Connection />,
        },
        {
          path: "Cart",
          element: <CartPage/>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
