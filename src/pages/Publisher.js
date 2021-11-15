import React from "react";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import NavBar from "../components/NavBar";
import PublisherProfile from "../components/PublisherProfile";
import PublisherDetails from "../components/PublisherDetails"
import PublisherOfferAccess from "../components/PublisherOfferAccess";

const Publisher = () => {
  return <div class="min-h-full">
      <NavBar />
      <AdvertiserPageBar />
      <PublisherProfile />
      <div className=" grid grid-cols-2 px-4 py-4 gap-4 mb-10 bg-white shadow">
        <div className="flex flex-col">
          <PublisherDetails />
          <PublisherOfferAccess />
        </div>
        </div>
  </div>;
};

export default Publisher;
