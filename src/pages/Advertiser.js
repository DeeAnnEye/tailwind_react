import React from "react";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import AdvertiserProfile from "../components/AdvertiserProfile";
import AdvertiserDetails from "../components/AdvertiserDetails"
// import UserTable from "../components/UserTable"
import NavBar from "../components/NavBar";
import AdvertiserUsertable from "../components/AdvertiserUserTable";
import AdvertiserPublisher from "../components/AdvertiserPublisher";
import AdvertiserActivityLog from "../components/AdvertiserActivityLog";
import AdvertiserDetailsEdit from "../components/AdvertiserDetailsEdit"
import EditTable from "../components/EditTable"
import AdvertiserUserEdit from "../components/AdvertiserUserEdit";

const Advertiser = () =>{
return <div class="min-h-full">
    <NavBar />
    <AdvertiserPageBar />
    <AdvertiserProfile />
    <div className="box-content">
    <div className=" flex flex-row px-4 gap-4 py-4 flex-wrap">
    <AdvertiserDetails />
    <AdvertiserUsertable />
  </div>
  <div className=" flex flex-row px-4 gap-4 mb-52 flex-nowrap">
  <AdvertiserPublisher />
 <AdvertiserActivityLog />
    </div>
    </div>
    <AdvertiserProfile />
    <AdvertiserDetailsEdit />
    <AdvertiserUserEdit />
</div>
}

export default Advertiser