<template>
  <footer class="pt-8 mt-auto border-t">
    <div class="container mx-auto">
      <div class="w-1/4 mx-auto flex justify-between">
        <nuxt-link to="/" class="block mr-4">
          Home
        </nuxt-link>
        <nuxt-link to="list" class="block mr-4">
          List
        </nuxt-link>
        <nuxt-link to="detail" class="block mr-4">
          Detail
        </nuxt-link>
      </div>
      <div class="text-center py-4">
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
