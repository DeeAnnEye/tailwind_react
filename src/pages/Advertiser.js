import React from "react";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import AdvertiserProfile from "../components/AdvertiserProfile";
import AdvertiserDetails from "../components/AdvertiserDetails"
import UserTable from "../components/UserTable"
import NavBar from "../components/NavBar";

const Advertiser = () =>{
return <div class="min-h-full">
    <NavBar />
    <AdvertiserPageBar />
    <AdvertiserProfile />
    <div className=" flex flex-row px-4 gap-4 py-4 flex-wrap bg-white shadow">
    <AdvertiserDetails />
    <UserTable />
  </div>
</div>
}

export default Advertiser