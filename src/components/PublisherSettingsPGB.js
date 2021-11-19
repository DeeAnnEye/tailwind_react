import React from "react";

const PublisherSettingsPGB = () => {
    return <div class="mt-4">
    <div class="sm:hidden">
      <select
        id="tabs"
        name="tabs"
        class="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 "
      >
        <option selected>Applied</option>

        <option>Approved</option>

        <option>Unapproved</option>

        <option>Blocked</option>
      </select>
    </div>
    <div class="hidden sm:block border border-t-0 border-b-gray">
      <nav
        class="relative z-0 flex justify-center divide-x divide-gray-300"
        aria-label="Tabs"
      >
        <div className="text-xl absolute inset-y-2 left-8">
          Publishers
        </div>
        <a
          href="/all"
          class="text-gray-900 group relative w-24 border border-t-0  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
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
          class="text-gray-500 hover:text-gray-700 group relative w-24  overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
        >
          <span>Approved</span>
          <span
            aria-hidden="true"
            class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          ></span>
        </a>

        <a
          href="/inactive"
          class="text-gray-500 group relative w-28 border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
        >
          <span>Unapproved</span>
          <span
            aria-hidden="true"
            class="bg-transparent absolute inset-x-0 bottom-0 h-0.5"
          ></span>
        </a>
        <a
          href="/deleted"
          class="text-gray-500 group relative w-24 border border-t-0 border-b-0 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
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

        <div className=" flex flex-row gap-4 absolute inset-y-2 right-2">
        <div className="flex-1 flex items-center justify-end ">
            <div className="w-28 lg:max-w-xs">
              <label for="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
}

export default PublisherSettingsPGB