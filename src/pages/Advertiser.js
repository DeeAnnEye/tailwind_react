import React from "react";
import AdvertiserPageBar from "../components/AdvertiserPageBar";
import AdvertiserProfile from "../components/AdvertiserProfile";
import AdvertiserDetails from "../components/AdvertiserDetails";
// import UserTable from "../components/UserTable"
import NavBar from "../components/NavBar";
import AdvertiserUsertable from "../components/AdvertiserUserTable";
import AdvertiserPublisher from "../components/AdvertiserPublisher";
import AdvertiserActivityLog from "../components/AdvertiserActivityLog";
import AdvertiserDetailsEdit from "../components/AdvertiserDetailsEdit";
// import EditTable from "../components/EditTable"
import AdvertiserUserEdit from "../components/AdvertiserUserEdit";
import ProfileChange from "../components/ProfileChange";

const Advertiser = () => {
  return (
    <div class="min-h-full">
      <NavBar />
      <AdvertiserPageBar />
      <AdvertiserProfile />
      <div className="grid grid-cols-2 px-4 py-4 gap-4 mx-4 pb-20 bg-white shadow">
        <div className="flex flex-col">
          <AdvertiserDetails />
          <AdvertiserPublisher />
        </div>
        <div className="flex flex-col">
          <AdvertiserUsertable />
          <AdvertiserActivityLog />
        </div>
      </div>
      <ProfileChange />
      <AdvertiserDetailsEdit />
      <AdvertiserUserEdit />
    </div>
  );
};

export default Advertiser;
