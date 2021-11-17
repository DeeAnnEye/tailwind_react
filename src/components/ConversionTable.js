import React from "react";

const ConversionTable = () => {
  return (
    <div class="shadow mx-2 my-4 overflow-hidden border border-gray-200 sm:rounded-lg">
      <table class="w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              OFFER NAME
            </th>
            <th
              scope="col"
              class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              STATUS
            </th>
            <th
              scope="col"
              class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              PIXEL TYPE
            </th>
            <th
              scope="col"
              class="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ACTION
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">23</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Offer 1</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Javascript</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/edit">Edit, </a>
              <a href="/test">Test <br /> </a>
              <a href="/view">View, </a>
              <a href="/delete">Delete </a>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">42</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Offer 2</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">IFrame</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/edit">Edit, </a>
              <a href="/test">Test <br /> </a>
              <a href="/view">View,</a>
              <a href="/delete">Delete </a>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">52</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Offer 3</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Inactive
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Image</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/edit">Edit, </a>
              <a href="/test">Test <br /> </a>
              <a href="/view">View, </a>
              <a href="/delete">Delete </a>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">13</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Offer 4</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Active
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">S2S</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/edit">Edit, </a>
              <a href="/test">Test <br /> </a>
              <a href="/view">View, </a>
              <a href="/delete">Delete </a>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-left">
                <div class="flex-shrink-0">56</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Offer 5</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
              <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                Inactive
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Image</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-500">
              <a href="/edit">Edit, </a>
              <a href="/test">Test <br /> </a>
              <a href="/view">View, </a>
              <a href="/delete">Delete </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ConversionTable;
