import React from "react";
import AdvertiserOptions from "../components/AdvertiserOptions";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import AdvertiserPagination from "../components/AdvertiserPagination";
import AdvertiserPGB from "../components/AdvertiserPGB";
import AdvertiserTable from "../components/AdvertiserTable";
import NavBar from "../components/NavBar";

const ManageAdvertiser = () =>{
return <div class="min-h-full">
<NavBar />
<AdvertiserPageBar />
<AdvertiserPGB />
<AdvertiserOptions />
<AdvertiserTable />
<AdvertiserPagination />
</div>
}

export default ManageAdvertiser