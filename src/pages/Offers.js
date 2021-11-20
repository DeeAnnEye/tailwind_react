import React from "react";
import NavBar from "../components/NavBar";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import PublisherProfile from "../components/PublisherProfile";
import OfferDetails from "../components/OfferDetails";
import OfferAssets from "../components/OfferAssets";
import SettingsOffer from "../components/SettingsOffer";
import ScheduleChange from "../components/ScheduleChange";
import PublisherOffer from "../components/PublisherOffer";
import OfferPGB from "../components/OfferPGB";
import OfferCommissions from "../components/OfferCommissions";
import OfferDistribution from "../components/OfferDistribution";

const Offers = () => {
  return (
    <div className="min-h-full">
      <NavBar />
      <AdvertiserPageBar />
      <PublisherProfile />
      <div className=" grid grid-cols-2 px-4 py-4 gap-4 mx-4 pb-20 bg-white shadow">
        <div className="flex flex-col">
            <OfferDetails />
            <OfferAssets />
            <SettingsOffer />
            <ScheduleChange />
            <PublisherOffer />
        </div>
        <div className="flex flex-col">
          <OfferPGB />
          <OfferCommissions />
          <OfferDistribution />
        </div>
      </div>
    </div>
  );
};

export default Offers;
