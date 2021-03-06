import React from "react";
import AdvertiserPagination from "../components/AdvertiserPagination";
import AdvertiserSettings from "../components/AdvertiserSettings";
import ComposeEmailSettings from "../components/ComposeEmailSettings";
import EmailAlertsTable from "../components/EmailAlertsTable";
import EmailNotifications from "../components/EmailNotifications";
import ImportExport from "../components/ImportExport";
import OfferSettings from "../components/OfferSettings";
import PageBar from "../components/PageBar";
import PublisherSettings from "../components/PublisherSettings";
import RecipientSettings from "../components/RecipientSettings";
import SettingsApplication from "../components/SettingsApplication";
import SettingsLink from "../components/SettingsLink";
import SettingsPGB from "../components/SettingsPGB";
import SettingsSearch from "../components/SettingsSearch";
import SMTPSettings from "../components/SMTPSettings";
import TermsConditions from "../components/TermsConditions";
import TrackingSettings from "../components/TrackingSettings";

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
          <TermsConditions />
        </div>
        <div className="flex flex-col">
            <SettingsLink />
            <SMTPSettings />
            <TrackingSettings />
            <PublisherSettings />
        </div>
      </div>
      <SettingsPGB />
      <SettingsSearch />
      <EmailAlertsTable />
      <AdvertiserPagination />
      <RecipientSettings />
      <ComposeEmailSettings />
    </div>
  );
};

export default Settings;
