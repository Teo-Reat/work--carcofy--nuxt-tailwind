<template>
  <footer class="pt-8 mt-auto border-t">
    <div class="container mx-auto">
      <div class="w-1/4 mx-auto flex justify-between">
        <nuxt-link to="/" class="link-gray">
          Home
        </nuxt-link>
        <nuxt-link to="list" class="link-gray">
          List
        </nuxt-link>
        <nuxt-link to="detail" class="link-gray">
          Detail
        </nuxt-link>
      </div>
      <div class="text-center py-4 text-gray-500">
        Some copyrights
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
