import React from "react";

const OfferTracking = () =>{
return <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
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


</div>
}

export default OfferTracking