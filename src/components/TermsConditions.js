import React from "react";
import ConditionsTable from "./ConditionsTable";

const TermsConditions = () => {
  return (
    <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div class="text-left text-xl px-4 py-5 text-gray-700">
          Terms and Conditions
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Offer Approval Questions:
              <button
                type="button"
                class="items-center ml-10 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </dt>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Partner Sign Up Questions:
              <button
                type="button"
                class="items-center ml-10 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </dt>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Advertiser Sign Up Questions:
              <button
                type="button"
                class="items-center mx-4 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </dt>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Partner Terms and Conditions:
              <button
                type="button"
                class="items-center mx-4 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </dt>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Advertiser Terms and <br />
              Conditions:
              <button
                type="button"
                class="items-center ml-36 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </dt>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Privacy Policy:
              <button
                type="button"
                class="items-center ml-32 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </dt>
          </div>
          <div className="pl-2 sm:col-span-1">
            <dt className="text-left font-small text-gray-400">
              Footer Links:
              <button
                type="button"
                class="items-center ml-32 px-4 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </dt>
          </div>
        </dl>
        <ConditionsTable />
        <div className="grid grid-cols-2 px-4 py-4">
          <div className="flex flex-col">
            <div className="text-left text-sm font-medium">
              Advertiser Terms & Conditions:
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                class="shadow-sm w-64 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                placeholder="HTML Code"
              />
            </div>
            <div className="mt-2 flex flex-row">
              <div class="relative flex items-center">
                <div class="flex items-center h-5">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class="font-medium text-gray-700">
                    Required
                  </label>
                </div>
              </div>
              <button
                type="button"
                class="items-center ml-24 px-5 py-1 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                SAVE
              </button>
            </div>
            <div className="mt-4 text-left text-sm font-medium">
              Footer Links:
            </div>
            <div className="mt-2">
              <div className="text-left text-sm">Link Text</div>
              <input
                type="text"
                name="name"
                id="name"
                class="shadow-sm w-64 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
              />
              <div className="text-left text-sm">URL</div>
              <input
                type="text"
                name="name"
                id="name"
                class="shadow-sm w-64 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                placeholder="http://"
              />
              <button
                type="button"
                class="items-center mt-2 ml-32 px-3 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ADD
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="text-left text-sm font-medium">
              Partner Terms & Conditions:
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                class="shadow-sm w-64 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                placeholder="HTML Code"
              />
            </div>
            <div className="mt-2 flex flex-row">
              <div class="relative flex items-center">
                <div class="flex items-center h-5">
                  <input
                    id="comments"
                    aria-describedby="comments-description"
                    name="comments"
                    type="checkbox"
                    class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="comments" class="font-medium text-gray-700">
                    Required
                  </label>
                </div>
              </div>
              <button
                type="button"
                class="items-center w-20 ml-24 px-3 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                SAVE
              </button>
            </div>
            <div className="mt-2 text-left text-sm font-medium">
              Privacy Policy:
            </div>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                class="shadow-sm w-64 h-10 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                placeholder="HTML Code"
              />
            </div>
            <button
                type="button"
                class="items-center mt-2 w-20 ml-44 px-3 py-2 border border-gray-300 shadow-sm text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                SAVE
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
