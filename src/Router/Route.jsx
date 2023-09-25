import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import Favorites from "../components/Favorites/Favorites";
import Login from "../components/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Shop from "../components/Shop/Shop";
import Phone from "../components/Phone/Phone";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/phones/:id",
        element: <Phone></Phone>,
        loader: () => fetch("/phones.json"),
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
    ],
  },
]);

export default router;
