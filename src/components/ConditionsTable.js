import React from "react";

const ConditionsTable = () => {
  return (
    <div class="shadow mx-2 my-4 overflow-hidden border border-gray-200 sm:rounded-lg">
      <table class="w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              NAME
            </th>
            <th
              scope="col"
              class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              DATA TYPE
            </th>
            <th
              scope="col"
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              PARTNER
            </th>
            <th
              scope="col"
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              REQUIRED
            </th>
            <th
              scope="col"
              class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-28 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block  sm:text-sm border border-gray-400 rounded-md"
                    placeholder="Question Name"
                  />
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-40 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Data type</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Adv</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
                />
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/save">Save,</a>
              <a href="/edit">Edit</a>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-28 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="Question Name"
                  />
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-40 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Data type</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Pub</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
                />
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/save">Save,</a>
              <a href="/edit">Edit</a>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-28 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="Question Name"
                  />
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-40 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Data type</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Adv</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
                />
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/save">Save,</a>
              <a href="/edit">Edit</a>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-28 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="Question Name"
                  />
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-40 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Data type</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Pub</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
                />
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/save">Save,</a>
              <a href="/edit">Edit</a>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="shadow-sm w-28 h-8 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block sm:text-sm border border-gray-400 rounded-md"
                    placeholder="Question Name"
                  />
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <div class="sm:col-span-2">
                  <select
                    id="card"
                    name="mastercard"
                    autocomplete="card-name"
                    class="block w-40 pl-3 pr-10 py-2 text-sm text-gray-500 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option>Data type</option>
                    <option>card 2</option>
                    <option>card 3</option>
                  </select>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Adv</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  class="focus:ring-indigo-500 h-4 w-4 border-gray-100 rounded"
                />
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/save">Save,</a>
              <a href="/edit">Edit</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ConditionsTable;
