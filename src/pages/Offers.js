import React from "react";
import NavBar from "../components/NavBar"
import AdvertiserPageBar from "../components/AdvertiserPageBar"
import PublisherProfile from "../components/PublisherProfile";

const Offers = () => {
  return <div className="min-h-full">
      <NavBar />
      <AdvertiserPageBar />
      <PublisherProfile />
  </div>;
};

export default Offers;
