import React from "react";

const LinksTable = () =>{
return <div class="bg-white min-w-1/2 shadow overflow-hidden sm:rounded-lg">
<div class="px-4 py-5 sm:px-6">
  <h6 class="text-left leading-6 font-medium text-gray-800">
    Links
  </h6>
</div>
<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-400">
        Network Login:
      </dt>
      <dd class="mt-1 text-left text-gray-600">
      link.com/login
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
      Advertiser Login:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
      link.com/login
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
      Publisher Sign Up:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
      link.com/signup
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
      Advertiser Sign Up:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
      link.com/signup
      </dd>
    </div>
    <div class="sm:col-span-1">
      <dt class="text-left font-small text-gray-500">
      Publisher Login:
      </dt>
      <dd class="mt-1 text-left text-gray-900">
      link.com/login
      </dd>
    </div>
  </dl>
</div>
</div>
}

export default LinksTable