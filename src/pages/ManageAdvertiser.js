import React from "react";
import AdvertiserOptions from "../components/AdvertiserOptions";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import AdvertiserPGB from "../components/AdvertiserPGB";
import NavBar from "../components/NavBar";

const ManageAdvertiser = () =>{
return <div class="min-h-full">
<NavBar />
<AdvertiserPageBar />
<AdvertiserPGB />
<AdvertiserOptions />
</div>
}

export default ManageAdvertiser