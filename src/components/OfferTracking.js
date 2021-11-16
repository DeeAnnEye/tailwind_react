import React from "react";
import TrackingTable from "../components/TrackingTable";

const OfferTracking = () => {
  return (
    <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div className=" flex justify-between px-4 py-5">
          <div class="text-left text-xl text-gray-700">Tracking</div>
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
      <label for="offer" class="block text-left mx-8 text-base mt-2 text-gray-700">
        Tracking Domain:
      </label>
      <div class="sm:col-span-2 my-1 mx-8">
        <select
          id="offer"
          name="offer"
          autocomplete="offer-name"
          class="block w-11/12 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>Exampletracking.com</option>
          <option>Publisher 2</option>
          <option>Publisher 3</option>
        </select>
      </div>
      <label for="approved" class="block text-left mx-8 text-base mt-2 text-gray-700">
        Offer List:
      </label>
      <div class="sm:col-span-2 my-1 mx-8">
        <select
          id="offer"
          name="offer"
          autocomplete="offer-name"
          class="block w-11/12 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>List of Offers</option>
          <option>Publisher 2</option>
          <option>Publisher 3</option>
        </select>
      </div>
      <TrackingTable />
    </div>
  );
};

export default OfferTracking;
