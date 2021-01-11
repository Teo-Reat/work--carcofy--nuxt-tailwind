<template>
  <div
    class="border rounded-xl px-6 py-4
    lg:px-12 lg:py-8"
  >
    <form action="" class="flex flex-wrap items-end justify-end">
      <label v-for="select in 3" :key="select" class="flex flex-col w-full mt-4 lg:mt-0 lg:w-auto lg:mr-4">
        <span class="text-gray-700">Select</span>
        <select class="input-gray">
          <option v-for="option in 10" :key="option" value="">{{ option * 6666666666666666 }}</option>
        </select>
      </label>
      <div class="w-full lg:w-auto mt-4 lg:mt-0">
        <button class="btn-gray w-full" type="button">
          Some button
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Filters'
}
</script>
