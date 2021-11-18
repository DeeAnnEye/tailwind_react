import React from "react";

const OfferSettings = () => {
  return (
    <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div class="text-left text-xl px-4 py-5 text-gray-700">
          Offer Settings
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
              Browser Targeting:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Geo Targeting:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Additional Terms and <br />
              conditions:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Require Approval:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Private Access:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Adjustable Session Lifespan:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Conversion Caps:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Redirect Offers:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              SEO Friendly Links:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Display Advertiser:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Offer Thumbnails:
            </dt>
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
            <dt className="text-left font-small text-gray-600">Offer Goals:</dt>
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
            <dt className="text-left font-small text-gray-600">
              Index Sorting:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Creative Manager / Ad <br />
              Manager:
            </dt>
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
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-600">
              Custom Media Domain:
            </dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="53452323"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
                />
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-600">
              Custom Feed Domain:
            </dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="53452323"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
                />
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
              Optimize Campaigns:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Offer ratings:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Test Offer URLs:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
              Suppression Lists /<br/> Email Instructions:
            </dt>
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
          <div class="sm:col-span-1">
            <dt class="text-left font-small text-gray-600">
              Unsubscribe Domain:
            </dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="mt-1">
                <input
                  type="text"
                  name="currency"
                  id="currency"
                  placeholder="53452323"
                  class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
                />
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
           Subscriptions:
            </dt>
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
            <dt className="text-left font-small text-gray-600">
            Auto Generate Subscriptions:
            </dt>
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
  );
};

export default OfferSettings;
