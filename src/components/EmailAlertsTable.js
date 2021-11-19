import React from "react";

const EmailAlertsTable = () => {
    return <div class="shadow mx-2 my-4 overflow-hidden border border-gray-200 sm:rounded-lg">
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
            class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            SUBJECT NAME
          </th>
          <th
            scope="col"
            class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            DATE SENT
          </th>
          <th
            scope="col"
            class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            DELIVERY STATUS
          </th>
          <th
            scope="col"
            class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
          >
            ACTIONS
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-left">
              <div class="flex-shrink-0">543</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-blue-500"><a href="/offer">Pause: Offer Name</a></div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">12/02/2019</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Sent</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-blue-500"><a href="/duplicate">Duplicate</a></div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-left">
              <div class="flex-shrink-0">754</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-blue-500"><a href="/offer">Update: Offer Link</a></div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">12/02/2019</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Sent</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-blue-500"><a href="/duplicate">Duplicate</a></div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-left">
              <div class="flex-shrink-0">923</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-blue-500"><a href="/offer">Pause: Offer Name</a></div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">12/02/2019</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Failed</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-blue-500"><a href="/duplicate">Duplicate</a></div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-left">
              <div class="flex-shrink-0">242</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-blue-500"><a href="/offer">Pause: Offer Name</a></div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">12/02/2019</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Sent</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-blue-500"><a href="/duplicate">Duplicate</a></div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-left">
              <div class="flex-shrink-0">972</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-blue-500"><a href="/offer">Pause: Offer Name</a></div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">12/02/2019</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Queued</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-blue-500"><a href="/duplicate">Duplicate</a></div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-left">
              <div class="flex-shrink-0">423</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-blue-500"><a href="/offer">Pause: Offer Name</a></div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">12/02/2019</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Failed</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-blue-500"><a href="/duplicate">Duplicate</a></div>
          </td>
        </tr>
        <tr>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-left">
              <div class="flex-shrink-0">113</div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-blue-500"><a href="/offer">Pause: Offer Name</a></div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">12/02/2019</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-500">Sent</div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
          <div class="text-sm text-blue-500"><a href="/duplicate">Duplicate</a></div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
}

export default EmailAlertsTable