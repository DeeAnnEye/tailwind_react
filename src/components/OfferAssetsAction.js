import React from "react";
import AssetsActionTable from "./AssetsActionTable";

const OfferAssetsAction = () => {
  return (
    <div className="bg-none ml-4 mt-2 shadow overflow-hidden sm:rounded-lg">
      <div className=" flex justify-between px-4 py-5 sm:px-6">
        <div className="text-left text-xl text-gray-800">Assets Action</div>
        <div>
          <button
            type="button"
            name="Save"
            className="inline-flex items-center w-20 justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
          >
            Save
          </button>
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flex flex-row gap-16 mx-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">From Lines:</dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-52 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="margotfoster@example.com"
                  />
                </div>
              </div>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Subject Lines:
            </dt>
            <dd className="text-left ">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-52 text-gray-700 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="This is a great offer"
                  />
                </div>
              </div>
            </dd>
          </div>
        </div>
        <div className="text-left mt-4 font-small text-gray-500">
        Unsubscribe Link:
        </div>
        <div className="mt-2">
            <div className="flex flex-row items-center">
                <div className="text-gray-500 mr-2">URL:</div>
          <input
            id="notes"
            name="notes"
            type="text"
            autocomplete="text"
            placeholder="https://tracking.com/offerid1?variable1={affiliate_id}&variable2={transaction_id}"
            class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-full text-base border border-gray-400 rounded-md"
          />
          </div>
        </div>
        <div className="text-left mt-4 font-small text-gray-500">
          Suppression List:
          <button
            type="button"
            class="ml-1 inline-flex items-center px-2 py-1 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add
          </button>
        </div>
        <div className="mt-2">
            <div className="flex flex-row items-center">
                <div className="text-gray-500 text-sm mr-2">Download URL:</div>
          <input
            id="notes"
            name="notes"
            type="text"
            autocomplete="text"
            placeholder="https://tracking.com/offerid1?variable1={affiliate_id}&variable2={transaction_id}"
            class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-4/5 text-sm  border border-gray-400 rounded-md"
          />
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-between border border-t-0 border-r-0 border-l-0 border-b-gray">
            <div className="text-gray-600">Creative</div>
            <div className="text-blue-500"><a href="/add">Add/View</a></div>
        </div>
      </div>
      <AssetsActionTable />
    </div>
  );
};

export default OfferAssetsAction;
