import React from "react";

const AssetsActionTable = () => {
  return (
    <div class="shadow mx-2 my-4 overflow-hidden border border-gray-200 sm:rounded-lg">
      <table class="w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              NAME
            </th>
            <th
              scope="col"
              class="px-10 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              TYPE
            </th>
            <th
              scope="col"
              class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">423</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Mailer</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Email</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                  <a href="/preview">Preview,</a>
                  <a href="/edit">Edit,<br/></a>
                  <a href="/delete">Delete,</a>
                  <a href="/download">Download,</a>
              </div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">423</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Image 01</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Email</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                  <a href="/preview">Preview,</a>
                  <a href="/edit">Edit,<br/></a>
                  <a href="/delete">Delete,</a>
                  <a href="/download">Download,</a>
              </div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">745</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Text 01</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Email</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                  <a href="/preview">Preview,</a>
                  <a href="/edit">Edit,<br/></a>
                  <a href="/delete">Delete,</a>
                  <a href="/download">Download,</a>
              </div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">112</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Image 01</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Zip</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                  <a href="/preview">Preview,</a>
                  <a href="/edit">Edit,<br/></a>
                  <a href="/delete">Delete,</a>
                  <a href="/download">Download,</a>
              </div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">643</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">File 01</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Thumbnail</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                  <a href="/preview">Preview,</a>
                  <a href="/edit">Edit,<br/></a>
                  <a href="/delete">Delete,</a>
                  <a href="/download">Download,</a>
              </div>
            </td>
          </tr>
          <tr>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">423</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Mailer</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">Email</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-500">
                  <a href="/preview">Preview,</a>
                  <a href="/edit">Edit,<br/></a>
                  <a href="/delete">Delete,</a>
                  <a href="/download">Download,</a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AssetsActionTable;
