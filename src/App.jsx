import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LayoutOne from "./layouts/LayoutOne";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Details from "./pages/Details";
import SearchProducts from "./pages/SearchProducts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutOne></LayoutOne>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <Products></Products>,
          loader: async () => {
            return fetch("https://dummyjson.com/products");
          },
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
          loader: async ({ params }) => {
            return fetch(`https://dummyjson.com/products/${params.id}`);
          },
        },
        {
          path: "/search-products",
          element: <SearchProducts></SearchProducts>,
          loader: async () => {
            return fetch(`https://dummyjson.com/products/search?q=phone`);
          },
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
