import React from "react";
import ConversionTable from "./ConversionTable";

const ConversionPixel = () => {
  return (
    <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div class="text-left text-xl px-4 py-5 text-gray-700">
          Conversion Pixel
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
          <dt class="text-left font-small text-gray-500">Goal:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="sm:col-span-2">
              <select
                id="card"
                name="mastercard"
                autocomplete="card-name"
                class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
              >
                <option>Goal Name</option>
                <option>card 2</option>
                <option>card 3</option>
              </select>
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Pixel Type:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="sm:col-span-2">
              <select
                id="card"
                name="mastercard"
                autocomplete="card-name"
                class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
              >
                <option>Pixel Type</option>
                <option>card 2</option>
                <option>card 3</option>
              </select>
            </div>
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-left font-small text-gray-500">Add Publisher URL:</dt>
          <dd class="mt-1 text-left text-gray-900">
            <div class="flex flex-row justify-between">
              <input
                type="text"
                name="currency"
                id="currency"
                placeholder="link.com/?s=123&s2=234"
                class="shadow-sm h-10 focus:ring-indigo-500 focus:border-indigo-500 pl-2 block w-60 text-base border border-gray-300 rounded-md"
              />
              <button
                type="button"
                class="items-center  px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </div>
          </dd>
        </div>
      </dl>
      <ConversionTable />
    </div>
  );
};

export default ConversionPixel;
