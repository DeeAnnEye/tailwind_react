import React from "react";

const SettingsPGB = () => {
  return (
    <div class="mt-12">
      <div class="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
        >
          <option selected>All</option>

          <option>Sent</option>

          <option>Failed</option>

          <option>Drafts</option>

          <option>Scheduled</option>

          <option>Templates</option>
        </select>
      </div>
      <div class="hidden sm:block border border-t-0 border-b-gray">
        <nav
          class="relative z-0 flex justify-center divide-x divide-gray-300"
          aria-label="Tabs"
        >
          <div className="text-xl absolute inset-y-2 left-8">Email Alerts</div>
          <a
            href="/all"
            class="text-gray-900 group relative w-36 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
            aria-current="page"
          >
            <span>All</span>
            <span
              aria-hidden="true"
              class="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="/sent"
            class="text-gray-500 hover:text-gray-700 group relative w-36  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Sent</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>

          <a
            href="/failed"
            class="text-gray-500 group relative w-36  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Failed</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
          <a
            href="/drafts"
            class="text-gray-500 group relative w-36 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Drafts</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
          <a
            href="/scheduled"
            class="text-gray-500 group relative w-36  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Scheduled</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
          <a
            href="/templates"
            class="text-gray-500 group relative w-36  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
          >
            <span>Templates</span>
            <span
              aria-hidden="true"
              class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
            ></span>
          </a>
          <a
            href="/settings"
            class="text-gray-500 group relative overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
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
};

export default SettingsPGB;
