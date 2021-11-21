import React from "react";

const OfferVerticalsOptions = () => {
  return (
    <div className="mt-4">
      <div className="flex flex-row justify-center gap-4">
        <div class="sm:col-span-1 self-center">
          <dt class="text-left font-small text-gray-500">Vertical Name:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="mt-1">
              <input
                type="text"
                name="currency"
                id="currency"
                placeholder="Vertical name"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
            </div>
          </dd>
        </div>
        <div className="sm:col-span-1 self-center">
          <dt className="text-left font-small text-gray-400">Status:</dt>
          <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
              <select
                id="card"
                name="mastercard"
                autocomplete="card-name"
                class="block w-52 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Active</option>
                <option>card 2</option>
                <option>card 3</option>
              </select>
            </div>
          </dd>
        </div>
        <div className="sm:col-span-1 self-center">
          <dt className="invisible text-left font-small text-gray-400">Add</dt>
          <dd className="mt-1 text-left text-gray-600">
            <div class="sm:col-span-2">
              <button
                type="button"
                className="inline-flex mx-4 px-2 py-2 border border-gray-300 shadow-sm text-xl rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
              >
                ADD
              </button>
            </div>
          </dd>
        </div>
      </div>
    </div>
  );
};

export default OfferVerticalsOptions;
