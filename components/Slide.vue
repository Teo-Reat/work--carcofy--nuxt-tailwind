<template>
  <div
    class="w-1/3 h-full border-4 border-b-0 border-white relative overflow-hidden first:rounded-bl-xl first:border-l-0 last:rounded-br-xl last:border-r-0"
  >
    <slot />
    <div class="overlay-element" />
  </div>
</template>

<script>
export default {
  name: 'Slide'
}
</script>

<style scoped>

</style>
