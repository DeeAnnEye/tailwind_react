import React from "react";

const OfferTargeting = () => {
    return <div className="py-8 bg-none shadow overflow-hidden sm:rounded-lg">
    <div className=" flex border border-t-0 border-b-gray justify-between px-4 py-5 sm:px-6">
      <div className="text-left text-xl text-gray-800">Targeting</div>
      <div>
        <button
          type="button"
          className="inline-flex mx-4 px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="gray"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Edit
        </button>
      </div>
    </div>
    <dl className="mt-4 mx-4 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Offer Redirect:</dt>
            <dd className="mt-1 text-left text-gray-600">Offer Id 123</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Device and Browser Targeting:</dt>
            <dd className="mt-1 text-left text-gray-600">Exampletracking.com</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Included Locations:</dt>
            <dd className="mt-1 text-left text-gray-600">UK, US</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Excluded Locations:</dt>
            <dd className="mt-1 text-left text-gray-600">CA, AU</dd>
          </div>
          </dl>
    </div>
}

export default OfferTargeting