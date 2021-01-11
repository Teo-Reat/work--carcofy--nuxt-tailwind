<template>
  <main class="list py-8">
    <div class="container mx-auto">
      <Filters />
      <div
        class="
      grid gap-8 my-8 rounded-xl border shadow px-6 py-4
      lg:grid-cols-4 lg:gap-16 lg:px-12 lg:py-8"
      >
        <Card v-for="card in 12" :key="card" />
      </div>
      <Pagination />
    </div>
  </main>
</template>
<script>
import Filters from '../components/Filters'
import Card from '../components/Card'
import Pagination from '../components/Pagination'

export default {
  name: 'List',
  components: {
    Filters,
    Card,
    Pagination
  }
}
</script>
