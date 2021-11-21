import React from "react";

const OfferApplicationsPGB = () => {
    return <div class="mt-5">
    <div class="sm:hidden">
      {/* <!-- Use an "onChange" listener to redirect the user to the selected tab URL. --> */}
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
          Offer Applications
        </div>
        <a
          href="/all"
          class="text-gray-900 group relative w-36 border border-t-0  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          aria-current="page"
        >
          <span>Applied</span>
          <span
            aria-hidden="true"
            class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
          ></span>
        </a>

        <a
          href="/active"
          class="text-gray-500 hover:text-gray-700 group relative w-36  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
        >
          <span>Approved</span>
          <span
            aria-hidden="true"
            class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          ></span>
        </a>

        <a
          href="/inactive"
          class="text-gray-500 group relative w-36 border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
        >
          <span>Unapproved</span>
          <span
            aria-hidden="true"
            class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          ></span>
        </a>
        <a
          href="/deleted"
          class="text-gray-500 group relative w-36 border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
        >
          <span>Blocked</span>
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
      </nav>
    </div>
  </div>
}

export default OfferApplicationsPGB