import React from "react";
import NavBar from "../components/NavBar";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import OfferListOptions from "../components/OfferListOptions";
import OfferListPGB from "../components/OfferListPGB";
import OfferListTableA from "../components/OfferListTableA";
import AdvertiserPagination from "../components/AdvertiserPagination";
import OfferAssetsPGB from "../components/OfferAssetsPGB";
import OfferAssetsOptions from "../components/OfferAssetsOptions";
import OfferListTableB from "../components/OfferListTableB";
import OfferOptions from "../components/OfferOptions";
import OfferApplicationsPGB from "../components/OfferApplicationsPGB";
import OfferApplicationsOptions from "../components/OfferApplicationsOptions";
import OfferListTableC from "../components/OfferListTableC";
import OfferAppOptions from "../components/OfferAppOptions";
import OfferVerticalsPGB from "../components/OfferVerticalsPGB";
import OfferVerticalsOptions from "../components/OfferVerticalsOptions";
import OfferListTableD from "../components/OfferListTableD";
import OfferGroupsPGB from "../components/OfferGroupsPGB";
import OfferGroupsOptions from "../components/OfferGroupsOptions";
import OfferListTableE from "../components/OfferListTableE";

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
        <OfferAssetsOptions />
        <OfferListTableB />
        <OfferOptions />
        <AdvertiserPagination />
      </div>
      <div className="pb-20">
        <NavBar />
        <AdvertiserPageBar />
        <OfferApplicationsPGB />
        <OfferApplicationsOptions />
        <OfferListTableC />
        <OfferAppOptions />
        <AdvertiserPagination />
      </div>
      <div className="pb-20">
        <NavBar />
        <AdvertiserPageBar />
        <OfferVerticalsPGB />
        <OfferVerticalsOptions />
        <OfferListTableD />
        <AdvertiserPagination />
      </div>
      <div className="pb-20">
        <NavBar />
        <AdvertiserPageBar />
        <OfferGroupsPGB />
        <OfferGroupsOptions />
        <OfferListTableE />
        <AdvertiserPagination />
      </div>
      <div className="pb-20">
        <NavBar />
        <AdvertiserPageBar />
      </div>
    </div>
  );
};

export default OfferList;
