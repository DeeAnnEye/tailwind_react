import React from "react";

const OfferDetails = () => {
  return (
    <div className="bg-none shadow overflow-hidden sm:rounded-lg">
      <div className=" flex justify-between px-4 py-5 sm:px-6">
        <div className="text-left text-xl text-gray-800">Details</div>
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
        <div className="text-left font-small text-gray-400">Description:</div>
        <div className="mt-1 text-left text-gray-600">
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
          cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint.
          Sit id mollit nulla mollit nostrud in ea
        </div>
        <div className="mt-1 text-left font-small text-gray-400">Terms:</div>
        <div className="mt-1 text-left text-gray-600">
          Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
          cillum culpa
        </div>
        <div className="mt-1 text-left font-small text-gray-400">Restrictions:</div>
        <div className="mt-1 text-left text-gray-600">-</div>
        <div className="mt-1 text-left font-small text-gray-400">
          Links:
          <button
            type="button"
            class="inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            ADD
          </button>
        </div>
        <div className="mt-1 text-left text-gray-600">
        Offer URL: https://tracking.com/offerid1?variable1=affiliate_id&variable2=transaction_id
        </div>
        <dl className="mt-4 grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">Status:</dt>
            <dd className="mt-1 text-left text-gray-600">Active</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Conversion Type:
            </dt>
            <dd className="mt-1 text-left text-gray-900">Email Submit</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Vertical:</dt>
            <dd className="mt-1 text-left text-gray-900">Insurance</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Conversion Point:</dt>
            <dd className="mt-1 text-left text-gray-900">Margot Foster</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">
            Incentive:
            </dt>
            <dd className="mt-1 text-left text-gray-900">Non-incent</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Channel:</dt>
            <dd className="mt-1 text-left text-gray-900">Desktop, Mobile</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Group</dt>
            <dd className="mt-1 text-left text-gray-900">Group Name</dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-500">Tags</dt>
            <dd className="mt-1 text-left text-gray-900">Tag Name</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default OfferDetails;
