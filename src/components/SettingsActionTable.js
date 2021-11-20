import React from "react";

const SettingsActionTable = () => {
    return  <div class="shadow mx-2 my-4 overflow-hidden border border-gray-200 sm:rounded-lg">
    <table class="w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th
            scope="col"
            class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            ID
          </th>
          <th
            scope="col"
            class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            RULE
          </th>
          <th
            scope="col"
            class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            OPERATOR
          </th>
          <th
            scope="col"
            class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            APPLY TO
          </th>
          <th
            scope="col"
            class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            ACTION
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">125</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Conversion Rate
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Is less than
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Variables
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Alert
            </div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">432</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            EPC
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Is greater than
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Variables
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Warn
            </div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">743</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Conversion Rate
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Is equal to
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Variables
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Block
            </div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">125</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Conversion Rate
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Is less than
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Variables
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Alert
            </div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">744</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            EPC
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Is greater than
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Variables
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">
            Block
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
}

export default SettingsActionTable