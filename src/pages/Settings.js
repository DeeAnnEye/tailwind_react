import React from "react";
import PageBar from "../components/PageBar";
import SettingsApplication from "../components/SettingsApplication";

const Settings = () =>{
    return <div class="min-h-full">
        <PageBar />
        <div className=" grid grid-cols-2 px-4 py-4 gap-4 mx-4 pb-20 bg-white shadow">
        <div className="flex flex-col">
            <SettingsApplication />
        </div>
        </div>
    </div>
}

export default Settings