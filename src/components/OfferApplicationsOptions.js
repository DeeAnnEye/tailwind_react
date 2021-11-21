import React from "react";

const OfferApplicationsOptions = () => {
    return  <div className="mx-4 flex flex-row justify-between">
    <div className="flex flex-row gap-2">
      <div class="sm:col-span-2 mt-2">
        <select
          id="card"
          name="mastercard"
          autocomplete="card-name"
          class="block w-44 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>Offer Name</option>
          <option>card 2</option>
          <option>card 3</option>
        </select>
      </div>
      <div class="sm:col-span-2 mt-2">
        <select
          id="card"
          name="mastercard"
          autocomplete="card-name"
          class="block w-44 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option>Publisher</option>
          <option>card 2</option>
          <option>card 3</option>
        </select>
      </div>
    </div>
    <div class="mt-2">
      <label for="search" class="sr-only">
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            class="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <input
          id="search"
          name="search"
          class="block h-10 pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search"
          type="search"
        />
      </div>
    </div>
  </div>
}

export default OfferApplicationsOptions