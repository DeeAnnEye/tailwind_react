import React from "react";

const AdvertiserPGB = () => {
  return (
    <div class="mt-5">
      <div class="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        >
          <option selected>All</option>

          <option>Active</option>

          <option>Inactive</option>

          <option>Deleted</option>
        </select>
      </div>
      <div class="hidden sm:block border border-t-0 border-b-gray">
        <nav
          class="relative z-0 flex justify-center divide-x divide-gray-300"
          aria-label="Tabs"
        >
          <div className="text-xl absolute inset-y-2 left-8">
            Manage Advertisers
          </div>
          <a
            href="/all"
            class="text-gray-900 group relative w-36 border border-t-0  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
            aria-current="page"
          >
            <span>All</span>
            <span
              aria-hidden="true"
              class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="/active"
            class="text-gray-500 hover:text-gray-700 group relative w-36  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Active</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="/inactive"
            class="text-gray-500 group relative w-36 border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Inactive</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
          <a
            href="/deleted"
            class="text-gray-500 group relative w-36 border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Deleted</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
          <a
            href="/settings"
            class="text-gray-500 group relative border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span></span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <div className=" flex flex-row gap-4 mr-20 absolute inset-y-2 right-2">
            <button
              type="button"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Export
            </button>
            <button
              type="button"
              class="inline-flex items-center px-3 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        </nav>
      </div>
    </div>
  );
};

export default AdvertiserPGB;
