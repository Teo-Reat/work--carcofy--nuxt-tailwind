<template>
  <div class="slide w-1/3 flex-shrink-0 border">
    <div class="bg-red-200 h-48">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slide'
}
</script>

<style scoped>

</style>
