import React from "react";

const OfferAssets = () => {
  return (
    <div className="mt-4 bg-none shadow overflow-hidden sm:rounded-lg">
      <div className=" flex justify-between px-4 py-5 sm:px-6">
        <div className="text-left text-xl text-gray-800">Assets</div>
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
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
      <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-400">From Lines:</dt>
          <dd className="mt-1 text-left text-gray-600">
            margotfoster@example.com
          </dd>
        </div>
        <div className="sm:col-span-1">
          <dt className="text-left font-small text-gray-400">Subject Lines:</dt>
          <dd className="mt-1 text-left text-gray-600">$120,000</dd>
        </div>
      </dl>
      <div className="mt-1 text-left font-small text-gray-400">
        Unsubscribe Link:
      </div>
      <div className="mt-1 text-left text-gray-600">
        URL:
        https://tracking.com/offerid1?variable1=affiliate_id&variable2=transaction_id
      </div>
      <div className="mt-1 text-left font-small text-gray-400">
        Suppression List:
        <button
          type="button"
          class="inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          ADD
        </button>
      </div>
      <div className="mt-1 text-left text-gray-600">
        Download URL:
        https://tracking.com/offerid1?variable1=affiliate_id&variable2=transaction_id
      </div>
      <div className="mt-4 flex flex-row justify-between">
        <div>Creatives</div>
        <div className="text-blue-500">
          <a href="/add">Add / View</a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OfferAssets;
