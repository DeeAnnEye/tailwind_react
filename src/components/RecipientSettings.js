import React from "react";

const RecipientSettings = () => {
  return (
    <div class="bg-white mt-4 overflow-hidden">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div class="text-left text-xl px-2 py-5 text-gray-700">
          Choose Recipient
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="flex flex-row gap-44 justify-center">
          <div class="relative flex-col items-start">
            <div class="flex py-4 items-center h-5">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
              />
              <div class="ml-3 text-sm">
                <label for="comments" class="font-medium text-gray-700">
                  Affiliates
                </label>
              </div>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-left font-small text-gray-500">Affiliates:</dt>
              <dd class="mt-1 text-left text-gray-900">
                <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                  >
                    <option>All</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
              </dd>
            </div>
          </div>
          <div class="relative flex-col items-start">
            <div class="flex py-4 items-center h-5">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
              />
              <div class="ml-3 text-sm">
                <label for="comments" class="font-medium text-gray-700">
                  Advertisers
                </label>
              </div>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-left font-small text-gray-500">Advertisers:</dt>
              <dd class="mt-1 text-left text-gray-900">
                <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                  >
                    <option>All</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
              </dd>
            </div>
          </div>
          <div class="relative flex-col items-start">
            <div class="flex py-4 items-center h-5">
              <input
                id="comments"
                aria-describedby="comments-description"
                name="comments"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
              />
              <div class="ml-3 text-sm">
                <label for="comments" class="font-medium text-gray-700">
                  Users
                </label>
              </div>
            </div>
            <div class="sm:col-span-1">
              <dt class="text-left font-small text-gray-500">Users:</dt>
              <dd class="mt-1 text-left text-gray-900">
                <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-60 pl-3 pr-10 py-2 text-base text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-base rounded-md"
                  >
                    <option>All</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
              </dd>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default RecipientSettings;
