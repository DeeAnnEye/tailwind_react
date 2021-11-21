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
import ConversionPixel from "../components/ConversionPixel";
import AdvertiserUserTable from "../components/AdvertiserUserTable"
import BillingDetails from "../components/BillingDetails";
import AdvertiserDetailsEdit from "../components/AdvertiserDetailsEdit";
import BillingDetailsAction from "../components/BillingDetailsAction";
import AdvertiserUserEdit from "../components/AdvertiserUserEdit";
import AdvertiserProfile from "../components/AdvertiserProfile";
import ProfileChange from "../components/ProfileChange";

const Publisher = () => {
  return <div class="min-h-full">
      <NavBar />
      <AdvertiserPageBar />
     <AdvertiserProfile />
      <div className=" grid grid-cols-2 px-4 py-4 gap-4 mx-4 pb-20 bg-white shadow">
        <div className="flex flex-col">
          <PublisherDetails />
          <PublisherOfferAccess />
          <PublisherQA />
          <AdvertiserActivityLog />
          <OfferPayouts />
        </div>
        <div className="flex flex-col">
          <OfferTracking />
          <ConversionPixel /> 
          <AdvertiserUserTable /> 
          <BillingDetails />       
        </div>
        </div>
        <div className="mt-2">
        <ProfileChange />
        <div className="flex flex-row gap-4 mb-8">
          <AdvertiserDetailsEdit />
          <BillingDetailsAction />
        </div>
        <AdvertiserUserEdit />
        </div>
  </div>;
};

export default Publisher;
