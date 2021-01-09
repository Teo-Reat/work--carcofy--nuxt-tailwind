<template>
  <div class="border rounded-xl p-4">
    <form action="" class="flex items-end justify-end">
      <label v-for="select in 3" :key="select" class="flex flex-col mr-4">
        <span class="text-gray-700">Select</span>
        <select class="input-gray">
          <option v-for="option in 10" :key="option" value="">{{ option * 6666666666666666 }}</option>
        </select>
      </label>
      <div class="">
        <button class="btn-gray" type="button">
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
