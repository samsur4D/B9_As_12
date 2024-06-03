import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PetListing from "../pages/PetListing";
import Dogs from "../pages/Dogs";
import Cats from "../pages/Cats";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: '/petlisting',
          element: <PetListing></PetListing>
        },
        {
          path: '/cats',
          element: <Cats></Cats>
        },
        {
          path: '/dogs',
          element: <Dogs></Dogs>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router ;