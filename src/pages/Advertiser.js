import React from "react";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import AdvertiserProfile from "../components/AdvertiserProfile";
import NavBar from "../components/NavBar";

const Advertiser = () =>{
return <div class="min-h-full">
    <NavBar />
    <AdvertiserPageBar />
    <AdvertiserProfile />
</div>
}

export default Advertiser