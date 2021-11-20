import React from "react";
import NavBar from "../components/NavBar";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import OfferListOptions from "../components/OfferListOptions";
import OfferListPGB from "../components/OfferListPGB";
import OfferListTableA from "../components/OfferListTableA";
import AdvertiserPagination from "../components/AdvertiserPagination";
import OfferAssetsPGB from "../components/OfferAssetsPGB";

const OfferList = () => {
  return (
    <div class="h-full">
      <div className="pb-20">
        <NavBar />
        <AdvertiserPageBar />
        <OfferListPGB />
        <OfferListOptions />
        <OfferListTableA />
        <AdvertiserPagination />
      </div>
      <div className="pb-20">
        <NavBar />
        <AdvertiserPageBar />
        <OfferAssetsPGB />
      </div>
    </div>
  );
};

export default OfferList;
