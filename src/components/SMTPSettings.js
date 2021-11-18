import React from "react";

const SMTPSettings = () => {
  return (
    <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div class="text-left text-xl px-4 py-5 text-gray-700">SMTP</div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">SMTP Host:</dt>
            <dd className="mt-1 text-left text-gray-600">smtp.gmail.com</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">SMTP Port:</dt>
            <dd className="mt-1 text-left text-gray-900">587</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">SMTP Type:</dt>
            <dd className="mt-1 text-left text-gray-900">tis or starttis</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">From Name:</dt>
            <dd className="mt-1 text-left text-gray-900">Bobby</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Username:</dt>
            <dd className="mt-1 text-left text-gray-900">b@company.com</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Password:</dt>
            <dd className="mt-1 text-left text-gray-900">*******</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default SMTPSettings
