import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import PetListing from "../pages/PetListing";
import Dogs from "../pages/Dogs";
import Cats from "../pages/Cats";
import Details from "../pages/Details";
import PrivateRoutes from "../components/PrivateRoutes";
import Donation from "../pages/Donation";
import Dashboard from "../Layouts/Dashboard";
import AddaPet from '../Dashboard Page/AddaPet'
import MyaddedPets from '../Dashboard Page/MyaddedPets'
import AdoptionReq from '../Dashboard Page/AdoptionReq'
import CreateDonationCampa from '../Dashboard Page/CreateDonationCampa'
import MyDonationCampa from '../Dashboard Page/MyDonationCampa'
import MyDonations from '../Dashboard Page/MyDonations'
import DashUpdate from "../Dashboard Page/DashUpdate";
import Error from "../pages/Error";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
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
        path: '/campaigns',
        element: <Donation></Donation>
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
          path: "/details/:id",
          element: <PrivateRoutes>  <Details></Details> </PrivateRoutes>
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
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
         
          path: 'addapet',
          element: <AddaPet></AddaPet>
        },
        {
          path: 'myaddedpets',
          element: <MyaddedPets></MyaddedPets>
        },
        {
          path: 'mycampaigns',
          element: <MyDonationCampa></MyDonationCampa>
        },
        {
          path: 'mydonations',
          element:  <MyDonations></MyDonations>
        },
        {
          path: 'adoptionreq',
          element: <AdoptionReq></AdoptionReq>
        },
        {
          path: 'createcampaign',
          element: <CreateDonationCampa></CreateDonationCampa>
        },
        {
          path: 'update/:id',
          element: <DashUpdate></DashUpdate>,
          // loader: ({params}) => fetch(`http://localhost:5000/pet/${params.id}`)
        }
       
      ]
    }
  ]);

  export default router ;