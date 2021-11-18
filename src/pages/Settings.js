import React from "react";
import AdvertiserSettings from "../components/AdvertiserSettings";
import EmailNotifications from "../components/EmailNotifications";
import ImportExport from "../components/ImportExport";
import OfferSettings from "../components/OfferSettings";
import PageBar from "../components/PageBar";
import SettingsApplication from "../components/SettingsApplication";

const Settings = () => {
  return (
    <div class="min-h-full">
      <PageBar />
      <div className=" grid grid-cols-2 px-4 py-4 gap-4 mx-4 pb-20 bg-white shadow">
        <div className="flex flex-col">
          <SettingsApplication />
          <a href="/email" className="text-base text-blue-600 my-4 ml-4 text-left">
            Manage Email Notifications Subscriptions
          </a>
          <OfferSettings />
          <AdvertiserSettings />
          <ImportExport />
          <EmailNotifications />
        </div>
      </div>
    </div>
  );
};

export default Settings;
