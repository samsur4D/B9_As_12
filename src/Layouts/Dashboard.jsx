import { DiGitPullRequest } from "react-icons/di";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { FcBusinessContact, FcHome, FcSearch } from "react-icons/fc";
import { MdCampaign, MdOutlineCampaign, MdOutlinePets } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillSound } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {
  // todo: get admin value from database
  const [isAdmin] = useAdmin();

  return (
    <div className="flex">
      {/* sidebar */}
      <div className="dash w-96 min-h-screen bg-black bg-opacity-50">
        <ul className="menu p-4">
         

         
    
          {isAdmin ? (

            <>
             {/* Admin dashboard */}
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/allusers"
                >
                  {" "}
                  <HiUsers className="text-2xl text-blue-500 mt-2" /> All 
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/allpets"
                >
                  {" "}
                  <SiPetsathome className="text-2xl text-pink-500 mt-2" /> All Pets
                  
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/alldonations"
                >
                  {" "}
                  <FaMoneyBill1Wave className="text-2xl text-yellow-600 mt-2" /> All Donations
                 
                </NavLink>
              </li>
              <div className="divider divider-neutral"> </div>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/addapet"
                >
                  {" "}
                  <MdOutlinePets className="text-2xl text-orange-500 mt-2" /> Add
                  a Pet
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/myaddedpets"
                >
                  {" "}
                  <SiPetsathome className="text-2xl text-green-500 mt-2" /> My
                  Added Pets
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/adoptionreq"
                >
                  {" "}
                  <DiGitPullRequest className="text-2xl text-[#9980FA] mt-2" />{" "}
                  Adoption Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/mysentrequest"
                >
                  {" "}
                  <DiGitPullRequest className="text-2xl text-[#9980FA] mt-2" />{" "}
                  My Sent Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/createcampaign"
                >
                  {" "}
                  <MdOutlineCampaign className="text-2xl text-[#833471] mt-2" />{" "}
                  Create Donation Campaign
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/mycampaigns"
                >
                  {" "}
                  <MdCampaign className="text-2xl text-[#F8EFBA] mt-2" /> My
                  Donation Campaign
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/mydonations"
                >
                  {" "}
                  <FaRegMoneyBill1 className="text-2xl text-[#58B19F] mt-2" /> My
                  Donation
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/addapet"
                >
                  {" "}
                  <MdOutlinePets className="text-2xl text-orange-500 mt-2" /> Add
                  a Pet
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/myaddedpets"
                >
                  {" "}
                  <SiPetsathome className="text-2xl text-green-500 mt-2" /> My
                  Added Pets
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/adoptionreq"
                >
                  {" "}
                  <DiGitPullRequest className="text-2xl text-[#9980FA] mt-2" />{" "}
                  Adoption Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/mysentrequest"
                >
                  {" "}
                  <DiGitPullRequest className="text-2xl text-[#9980FA] mt-2" />{" "}
                  My Sent Request
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/createcampaign"
                >
                  {" "}
                  <MdOutlineCampaign className="text-2xl text-[#833471] mt-2" />{" "}
                  Create Donation Campaign
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/mycampaigns"
                >
                  {" "}
                  <MdCampaign className="text-2xl text-[#F8EFBA] mt-2" /> My
                  Donation Campaign
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="text-2xl text-gray-300 mt-2"
                  to="/dashboard/mydonations"
                >
                  {" "}
                  <FaRegMoneyBill1 className="text-2xl text-[#58B19F] mt-2" /> My
                  Donation
                </NavLink>
              </li>
            </>
          )}

          <div className="divider divider-neutral"> </div>





          {/* user & admin common dashboard */}
          <li>
            <NavLink className="text-2xl text-gray-300 mt-2" to="/">
              {" "}
              <FcHome className="text-2xl text-gray-300 mt-2" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-2xl text-gray-300 mt-2" to="/petlisting">
              {" "}
              <FcSearch className="text-2xl text-gray-300 mt-2" /> Search Pet
            </NavLink>
          </li>
          <li>
            <NavLink className="text-2xl text-gray-300 mt-2" to="/campaigns">
              {" "}
              <AiFillSound className="text-2xl text-red-500 mt-2" />
              Campaigns
            </NavLink>
          </li>

          <li>
            <NavLink className="text-2xl text-gray-300 mt-2" to="/contact">
              {" "}
              <FcBusinessContact className="text-2xl text-gray-300 mt-2" />{" "}
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dash board content */}
      <div className=" flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
