import React from "react";

const OfferPayouts = () => {
  return (
    <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div className=" flex justify-between px-4 py-5">
          <div class="text-left text-xl text-gray-700">Offer Payouts</div>
          <div>
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <dl class="grid grid-cols-1 mx-6 my-4 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Offer:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="sm:col-span-2">
              <select
                id="card"
                name="mastercard"
                autocomplete="card-name"
                class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
              >
                <option>Offer Name</option>
                <option>card 2</option>
                <option>card 3</option>
              </select>
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Event Name:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1">
              <input
                type="text"
                name="currency"
                id="currency"
                placeholder="Name"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Clip Cap:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>123/total</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Conversion Cap:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>123/total</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Revenue Cap:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>$ 12.3/total</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Payout Cap:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1">
              <div class="sm:col-span-2">
                <select
                  id="card"
                  name="mastercard"
                  autocomplete="card-name"
                  class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                >
                  <option>$ 12.3/total</option>
                  <option>card 2</option>
                  <option>card 3</option>
                </select>
              </div>
            </div>
          </dd>
        </div>
      </dl>
      <div className="flex flex-row ml-72">
      <button
        type="button"
        class="items-center my-4 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        ADD
      </button>
      </div>
    </div>
  );
};

export default OfferPayouts;
