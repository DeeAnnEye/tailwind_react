import React from "react";

const PageBar = () => {
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
      <div class="hidden sm:block border border-t-0 border-b-gray">
        <nav
          class="relative z-0 flex justify-center divide-x divide-gray-300"
          aria-label="Tabs"
        >
          {/* <!-- Current: "text-gray-900", Default: "text-gray-500 hover:text-gray-700" --> */}
          <a
            href="/account"
            class="text-gray-900 group relative w-36 border border-t-0  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
            aria-current="page"
          >
            <span>Account</span>
            <span
              aria-hidden="true"
              class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="/billing"
            class="text-gray-500 hover:text-gray-700 group relative w-36  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Billing</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="/settings"
            class="text-gray-500 group relative w-36 border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Settings</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
          {/* dummy space */}
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
        </nav>
      </div>
    </div>
  );

  // design 2
  //  <div>
  // <div class="sm:hidden">
  //   <label for="tabs" class="sr-only">Select a tab</label>
  //   {/* <!-- Use an "onChange" listener to redirect the user to the selected tab URL. --> */}
  //   <select id="tabs" name="tabs" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
  //     <option>My Account</option>

  //     <option>Company</option>

  //     <option selected>Team Members</option>

  //     <option>Billing</option>
  //   </select>
  // </div>
  // <div class="hidden sm:block">
  //   <div class="border-b border-gray-200 mt-5">
  //     <nav class="-mb-px flex justify-center space-x-8" aria-label="Tabs">
  //       {/* <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" --> */}
  //       <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
  //         My Account
  //       </a>

  //       <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
  //         Company
  //       </a>

  //       <a href="#" class="border-indigo-500 border-l-gray-200 text-indigo-600 whitespace-nowrap py-4 px-1 border border-t-0 border-b-2 font-medium text-sm" aria-current="page">
  //         Team Members
  //       </a>

  //       <a href="#" class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
  //         Billing
  //       </a>
  //     </nav>
  //   </div>
  // </div>
  // </div>
};

export default PageBar;
