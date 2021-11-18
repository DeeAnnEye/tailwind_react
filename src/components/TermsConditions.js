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
            Advertiser Terms and <br/>
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
      </div>
    </div>
  );
};

export default TermsConditions;
