import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCampaigns = () => {
  const { user } = useContext(AuthContext);
  const [campaigns, setCampaigns] = useState([]);
  // const [ singleData , setSingleData] = useState([]);
//   const [total, setTotal] = useState(1);
  // const axiosPublic = useAxiosPublic();
  // const axiosSecure = useAxiosSecure()

  useEffect(() => {
    fetch("https://server-twelve.vercel.app/campaigns")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        setCampaigns(data);
      });
  }, []);

  return [campaigns];
};

export default useCampaigns;
