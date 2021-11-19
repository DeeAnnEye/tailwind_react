import React from "react";

const PublisherSettings = () => {
    return <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
    <div class="px-4 border border-b-gray border-t-0 sm:px-6">
      <div class="text-left text-xl px-4 py-5 text-gray-700">
        Publisher
      </div>
    </div>
    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
    <div class="text-left text-xl px-4 py-5 text-gray-700">
        Basic Setting:
      </div>
      <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-600">
          TUNE Publisher Dashboard<br/>
            Mobile App: 
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
          CAPTCHA on Sign Up: 
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
          Two-Factor Authentication: 
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
          Partner Managers:
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
          Partner Sign Up with<br/>
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
          Manage Pending Accounts:
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
          Show Active Unassigned<br/>
            Partners:  
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
          Partner User Management:
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
          Custom Start Page:  
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
          Partner Referrals:
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
          <dt className="text-left font-small text-gray-600">Partner Referral Pixel:</dt>
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
          Hide Caps:
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
          Sale Amount:  
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
          Partner Ad Manager:
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
          Partner Billing:
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
          Partner Email Notifications:
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
          Creative File Size Limit:
          </dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1">
              <input
                type="text"
                name="currency"
                id="currency"
                placeholder="100kb"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
            </div>
          </dd>
        </div> 
        <div class="sm:col-span-1">
            <dt class="text-left font-small ">
            Stats API:   
            </dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-base text-gray-400 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>Auto approve</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small ">
            Third-Party Partner Pixels:
            </dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-base text-gray-400 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>auto approve</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small ">
            Conversion Access:
            </dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-base text-gray-400 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>Auto approve</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
          <div class="sm:col-span-1">
            <dt class="text-left font-small ">
            Partner Sign Up: 
            </dt>
            <dd class="mt-1 text-left text-gray-900">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-base text-gray-400 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>Auto approve</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </dd>
          </div>
      </dl>
    </div>
  </div>
}

export default PublisherSettings