// src/main.jsx
import React, { lazy } from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import NotFound from "./Components/NotFound";
import { Provider } from "react-redux";
import store from "./redux/store"; // import the store
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductList from "./Components/ProductList";

const Checkout = lazy(()=>import("./Pages/CheckOut"));
const Cart = lazy(()=>import("./Pages/Cart"));
const ProductDetail = lazy(()=>import("./Pages/ProductDetail"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductList />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: 'checkout',
        element: <Checkout />
      },

    ],
  },
   {
        path: "*",
        element: <NotFound />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
