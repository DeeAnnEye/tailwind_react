import React from "react";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import NavBar from "../components/NavBar";
import PublisherProfile from "../components/PublisherProfile";
import PublisherDetails from "../components/PublisherDetails"
import PublisherOfferAccess from "../components/PublisherOfferAccess";
import PublisherQA from "../components/PublisherQA";
import AdvertiserActivityLog from "../components/AdvertiserActivityLog"
import OfferPayouts from "../components/OfferPayouts";
import OfferTracking from "../components/OfferTracking";

const Publisher = () => {
  return <div class="min-h-full">
      <NavBar />
      <AdvertiserPageBar />
      <PublisherProfile />
      <div className=" grid grid-cols-2 px-4 py-4 gap-4 mb-10 bg-white shadow">
        <div className="flex flex-col">
          <PublisherDetails />
          <PublisherOfferAccess />
          <PublisherQA />
          <AdvertiserActivityLog />
          <OfferPayouts />
        </div>
        <div className="flex flex-col">
          <OfferTracking />         
        </div>
        </div>
  </div>;
};

export default Publisher;
