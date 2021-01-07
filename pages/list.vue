<template>
  <main class="list py-8">
    <div class="container mx-auto">
      <Filters />
      <div class="grid grid-cols-4 gap-16 my-8 py-6 px-4 rounded-xl border shadow">
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
