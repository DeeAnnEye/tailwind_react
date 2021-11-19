import React from "react";

const SettingsOffer = () => {
    return <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
    <div class="px-4 border border-b-gray border-t-0 sm:px-6">
      <div class="text-left text-xl px-4 py-5 text-gray-700">
        Settings
      </div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Private:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Require Approval:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Approve Conversions:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Multiple Conversions:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Whitelist IPs:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Blacklist IPs:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Automation Rules:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Proxy Traffic:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
        </dl>
        </div>
    </div>
}

export default SettingsOffer