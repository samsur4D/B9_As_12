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
import Contact from "../pages/Contact";
import Adp from "../pages/Adp";
import AllUsers from "../Dashboard Page/AllUsers";
import AllPets from "../Dashboard Page/AllPets";
import AllDonations from "../Dashboard Page/AllDonations";
import AdminRoute from "../components/AdminRoute";
import About from "../pages/About";
import MySentReq from "../Dashboard Page/MySentReq";
import DonaDEtails from "../pages/DonaDEtails";
import ModalView from "../components/ModalView";


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
           path: '/contact',
           element: <Contact></Contact>
        },
        {
           path: '/about',
           element: <About></About>
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
          path: '/adoptionprocess',
          element: <Adp></Adp>
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
          path: "/donadetails/:id",
          element: <PrivateRoutes>  <DonaDEtails></DonaDEtails> </PrivateRoutes>
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
          path: 'donators',
          element:  <ModalView></ModalView>
        },
        {
          path: 'adoptionreq',
          element: <AdoptionReq></AdoptionReq>
        },
        {
          path: 'mysentrequest',
          element: <MySentReq></MySentReq>
        },
        {
          path: 'createcampaign',
          element: <CreateDonationCampa></CreateDonationCampa>
        },
        {
          path: 'update/:id',
          element: <DashUpdate></DashUpdate>,
        },
        {
          path: 'allusers',
          element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>,
        },
        {
          path: 'allpets',
          element: <AdminRoute> <AllPets></AllPets> </AdminRoute>,
        },
        {
          path: 'alldonations',
          element: <AdminRoute> <AllDonations></AllDonations> </AdminRoute>,
        }
       
      ]
    }
  ]);

  export default router ;