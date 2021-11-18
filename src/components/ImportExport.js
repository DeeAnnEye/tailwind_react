import React from "react";

const ImportExport = () => {
  return (
    <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div class="text-left text-xl px-4 py-5 text-gray-700">
          Import & Export
        </div>
      </div>
      <div className="flex flex-row my-8 mx-4 gap-x-8">
        <div className="text-xl">Advertisers:</div>
        <div>
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-blue-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download
          </button>
        </div>
        <div>
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-blue-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
           Import
          </button>
        </div>
      </div>
      <div className="flex flex-row my-8 mx-4 gap-x-8">
        <div className="text-xl">Offers:</div>
        <div className="ml-10">
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-blue-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download
          </button>
        </div>
        <div>
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-blue-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
           Import
          </button>
        </div>
      </div>
      <div className="flex flex-row my-8 mx-4 gap-x-8">
        <div className="text-xl">Publishers:</div>
        <div>
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-blue-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Download
          </button>
        </div>
        <div>
          <button
            type="button"
            class="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-xl font-medium rounded-md text-blue-500 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
           Import
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportExport;
