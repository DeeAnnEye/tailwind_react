import React from "react";

const PublisherOfferAccess = () => {
return  <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
<div class="px-4 py-5 border border-b-gray border-t-0 sm:px-6">
  <h6 class="text-left leading-6 text-lg text-gray-700">
    Offer Access
  </h6>
</div>
<div class="flex flex-row ml-2 p-2">
<label for="approved" class="block text-base pr-36 text-gray-500">
            Approved:
          </label>
          <div class="sm:col-span-2">
            <select
              id="offer"
              name="offer"
              autocomplete="offer-name"
              class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>List of Offers</option>
              <option>Publisher 2</option>
              <option>Publisher 3</option>
            </select>
          </div>
          </div>
          <div class="flex flex-row ml-2 p-2">
          <label for="approved" class="block text-base pr-32 text-gray-500">
            Unapproved:
          </label>
          <div class="sm:col-span-2">
            <select
              id="offer"
              name="offer"
              autocomplete="offer-name"
              class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>List of Offers</option>
              <option>Publisher 2</option>
              <option>Publisher 3</option>
            </select>
          </div>
          </div>
          <div class="flex flex-row ml-2 p-2">
          <label for="approved" class="block text-base pr-40 text-gray-500">
            Blocked:
          </label>
          <div class="sm:col-span-2">
            <select
              id="offer"
              name="offer"
              autocomplete="offer-name"
              class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>List of Offers</option>
              <option>Publisher 2</option>
              <option>Publisher 3</option>
            </select>
          </div>
          </div>
</div>
}

export default PublisherOfferAccess