<template>
  <header class="border-b">
    <div class="container mx-auto">
      <nav class="flex items-center flex-wrap py-6">
        <div class="flex items-center mr-6">
          <nuxt-link class="text-xl" to="/">
            Main Logo
          </nuxt-link>
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div class="ml-auto">
          <div class="flex items-center">
            <nuxt-link to="/" class="link-gray">
              Home
            </nuxt-link>
            <nuxt-link to="list" class="link-gray">
              List
            </nuxt-link>
            <nuxt-link to="detail" class="link-gray mr-16">
              Detail
            </nuxt-link>
          </div>
        </div>
        <div class="">
          <button class="btn-gray" type="button">
            Button
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>
