import React from "react";

const EmailNotifications = () => {
  return (
    <div class="bg-white mt-4 shadow  overflow-hidden sm:rounded-lg">
      <div class="px-4 border border-b-gray border-t-0 sm:px-6">
        <div class="text-left text-xl px-4 py-5 text-gray-700">
          Email Notifications
        </div>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">Alerts:</dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
              Offer Notifications:
            </dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
          </div>
          <div className="sm:col-span-1">
            <div className="flex flex-row gap-8">
              <div class="relative flex items-start">
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
                    Email
                  </label>
                </div>
              </div>
              <div class="relative flex items-start">
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
                    In-App
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1">
            <div className="flex flex-row gap-8">
              <div class="relative flex items-start">
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
                    Status <br />
                    Change
                  </label>
                </div>
              </div>
              <div class="relative flex items-start">
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
                    Expiry
                  </label>
                </div>
              </div>
              <div class="relative flex items-start">
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
                    Payout
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-8">
              <div class="relative flex items-start">
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
                    Revenue
                  </label>
                </div>
              </div>
              <div class="relative flex items-start">
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
                    Name <br /> Change
                  </label>
                </div>
              </div>
              <div class="relative flex items-start">
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
                    Creative
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
              Offer Application Notifications:
            </dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
            <div className="sm:col-span-1">
              <div className="my-2 flex flex-row gap-8">
                <div class="relative flex items-start">
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
                      Email
                    </label>
                  </div>
                </div>
                <div class="relative flex items-start">
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
                      In-App
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-4 ">
            <dt className="text-left font-small text-gray-600">
              Advertiser Notifications:
            </dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
            </div>
              <div className="sm:col-span-1">
            <div className="flex flex-row gap-8">
              <div class="relative flex items-start">
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
                    Sign Up
                  </label>
                </div>
              </div>
              <div class="relative flex items-start">
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
                    Block
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="my-4 ">
            <dt className="text-left font-small text-gray-600">
              Publisher Notifications:
            </dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
            </div>
              <div className="sm:col-span-1">
            <div className="flex flex-row gap-8">
              <div class="relative flex items-start">
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
                    Sign Up
                  </label>
                </div>
              </div>
              <div class="relative flex items-start">
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
                    Block
                  </label>
                </div>
              </div>
            </div>
            <div class="mt-2 relative flex items-start">
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
                    Offer
                  </label>
                </div>
              </div>
          </div>
            </div>
          </div>
          <div className="sm:col-span-1">
            <dt className="text-left font-small text-gray-600">
              Offer Cap Notifications:
            </dt>
            <dd className="text-left text-gray-400">
              Disabled
              <button
                type="button"
                class=" ml-28 bg-gray-200 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                role="switch"
                aria-checked="false"
              >
                <span class="sr-only">Use setting</span>

                <span
                  aria-hidden="true"
                  class="translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                ></span>
              </button>
            </dd>
            <div className="sm:col-span-1">
              <div className=" my-2 flex flex-row gap-8">
                <div class="relative flex items-start">
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
                      Daily
                    </label>
                  </div>
                </div>
                <div class="relative flex items-start">
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
                      Monthly
                    </label>
                  </div>
                </div>
                <div class="relative flex items-start">
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
                      Global
                    </label>
                  </div>
                </div>
              </div>
              <div className=" my-2 flex flex-row gap-4">
                <div class="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm w-20 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-400 rounded-md"
                    placeholder="%"
                  />
                </div>
                <div class="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm w-20 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-400 rounded-md"
                    placeholder="%"
                  />
                </div>
                <div class="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm w-20 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-400 rounded-md"
                    placeholder="%"
                  />
                </div>
              </div>
              <div className="my-2 flex flex-row gap-8">
                <div class="relative flex items-start">
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
                      Click
                    </label>
                  </div>
                </div>
                <div class="relative flex items-start">
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
                      Conversions
                    </label>
                  </div>
                </div>
                <div class="relative flex items-start">
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
                      Revenue
                    </label>
                  </div>
                </div>
              </div>
              <div className="my-2 flex flex-row gap-4">
                <div class="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm w-20 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-400 rounded-md"
                    placeholder="%"
                  />
                </div>
                <div class="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm w-20 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-400 rounded-md"
                    placeholder="%"
                  />
                </div>
                <div class="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="shadow-sm w-20 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-400 rounded-md"
                    placeholder="%"
                  />
                </div>
              </div>
            </div>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default EmailNotifications;
