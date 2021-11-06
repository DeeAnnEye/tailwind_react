import React from "react";

const AdvertiserPageBar = () => {
  return (
    <div class="mt-5">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">
          Select a tab
        </label>
        {/* <!-- Use an "onChange" listener to redirect the user to the selected tab URL. --> */}
        <select
          id="tabs"
          name="tabs"
          class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        >
          <option selected>Account</option>

          <option>Billing</option>

          <option>Settings</option>
        </select>
      </div>
      <div class="hidden sm:block border border-t-0 border-b-0">
        <nav
          class="relative z-0 mb-2 grid grid-cols-5 justify-center divide-x divide-gray-300"
          aria-label="Tabs"
        >
          {/* <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" --> */}
          <a
            href="/account"
            class="text-gray-900 group relative mb-2 w-full border border-t-0   overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
            aria-current="page"
          >
            <span>Offers List</span>
            <span
              aria-hidden="true"
              class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="/billing"
            class="text-gray-500 hover:text-gray-700 group relative w-full  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Offer Name</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="/settings"
            class="text-gray-500 group relative w-full border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Publisher 1</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="/settings"
            class="text-gray-500 group relative w-full border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Advertisers List</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
          <a
            href="/settings"
            class="text-gray-500 group relative w-full border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Report</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
          {/* dummy space */}
        </nav>
      </div>
    </div>
  );

};

export default AdvertiserPageBar;
