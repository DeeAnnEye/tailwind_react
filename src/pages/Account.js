import React from "react";
import NavBar from "../components/NavBar";
import PageBar from "../components/PageBar";
import DetailsTable from "../components/DetailsTable";
import UserTable from "../components/UserTable";
import LinksTable from "../components/LinksTable";
import EditTable from "../components/EditTable";

const Account = (props) =>{
  
return <div class="min-h-full">
  <NavBar path = {props.path}/>
  <PageBar />
  <div className=" flex flex-row px-4 gap-4 py-4 flex-wrap bg-white shadow">
    <DetailsTable />
    <UserTable />
    <LinksTable />
  </div>
  <EditTable />
</div>
}

export default Account