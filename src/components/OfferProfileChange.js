import React from "react";

const OfferProfileChange = () => {
  return (
    <div class="border border-gray mx-2.5 rounded-lg h-44 sm:px-8 md:flex md:items-center md:justify-between lg:px-8">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <div class="relative">
            <img
              class="h-20 w-20 rounded-3xl"
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
              alt=""
            />
            <span
              class="absolute inset-0 shadow-inner rounded-full"
              aria-hidden="true"
            ></span>
          </div>
        </div>
        <div className="ml-2">
          <h1 class="text-left text-3xl font-bold text-gray-900">Offer Name</h1>
          <div className="flex flex-row gap-4">
            <div className="flex flex-row gap-1 mt-2">
              <svg
                style={{ color: "gray" }}
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 self-center"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              <p class="text-sm text-gray-400 self-center">Advertiser:</p>
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-40 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>Adv Llc</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row gap-1 mt-2">
              <svg
                class="h-5 w-5 self-center"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="40" fill="gray" />
              </svg>
              <p class="text-sm text-gray-400 self-center">Revenue Type:</p>
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-40 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>CPA</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row gap-1 mt-2">
              <svg
                class="h-5 w-5 self-center"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="40" fill="gray" />
              </svg>
              <p class="text-sm text-gray-400 self-center">Countries:</p>
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-40 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>US, UK</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-4">
          <div className="flex flex-row gap-1 mt-2">
              <svg
                class="h-5 w-5 self-center"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="50" cy="50" r="40" fill="gray" />
              </svg>
              <p class="text-sm text-gray-400 self-center">Media Type:</p>
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-56 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>Email, Banner, Push</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row gap-1 mt-2">
              <svg
                style={{ color: "gray" }}
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 self-center"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-sm text-gray-400 self-center">Expiry:</p>
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-44 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>MM/DD/YYYY</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </div>
            </div>
        </div>
      </div>
      <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          Save
        </button>
        <button
          type="button"
          className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="pr-2 h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="gray"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          Preview
        </button>
      </div>
    </div>
  );
};

export default OfferProfileChange;
