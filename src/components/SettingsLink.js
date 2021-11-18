import React from "react";

const SettingsLink = () =>{
    return <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
    <div class="px-4 border border-b-gray border-t-0 sm:px-6">
      <div class="text-left text-xl px-2 py-5 text-gray-700">
        Links
      </div>
    </div>
    <div className="h-40 border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Application Domain:
              <button
                type="button"
                class="items-center ml-4 px-2 py-1 border border-gray-300 shadow-sm text-sm rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </dt>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Tracking Domain:
              <button
                type="button"
                class="items-center ml-4 px-2 py-1 border border-gray-300 shadow-sm text-sm rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </dt>
          </div>
          <div className="text-left text-sm">
          yourcompany.linkswatch.io
          </div>
          <div className="text-left text-sm">
          track.linkswatch.io
          </div>
        </dl>
        </div>
    </div>
}

export default SettingsLink