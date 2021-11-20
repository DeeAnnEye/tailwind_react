import React from "react";
import NavBar from "../components/NavBar";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import OfferListOptions from "../components/OfferListOptions";
import OfferListPGB from "../components/OfferListPGB"
import OfferListTableA from "../components/OfferListTableA";
import AdvertiserPagination from "../components/AdvertiserPagination";

const OfferList = () =>{
    return <div class="h-full">
    <NavBar />
    <AdvertiserPageBar />
    <OfferListPGB />
    <OfferListOptions />
    <OfferListTableA />
    <AdvertiserPagination />
    </div>
}

export default OfferList