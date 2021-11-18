import React from "react";
import NavBar from "../components/NavBar";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import AdvertiserOptions from "../components/AdvertiserOptions";
import PublisherPGB from "../components/PublisherPGB";
import PublisherTable from "../components/PublisherTable";
import AdvertiserPagination from "../components/AdvertiserPagination";

const ManagePublisher = () => {
    return <div class="h-full">
    <NavBar />
    <AdvertiserPageBar />
    <PublisherPGB />
    <AdvertiserOptions />
    <PublisherTable />
    <AdvertiserPagination />
    </div>
}

export default ManagePublisher