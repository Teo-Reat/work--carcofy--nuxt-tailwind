<template>
  <main class="list py-8">
    <Axios />
    <div class="container mx-auto">
      <Filters />
      <div
        class="
      grid gap-8 my-8 rounded-xl border shadow px-6 py-4
      lg:grid-cols-4 lg:gap-16 lg:px-12 lg:py-8"
      >
        <Card v-for="card in getDataFlat" :key="card.id" :flat="card" />
      </div>
      <Pagination />
    </div>
  </main>
</template>
<script>
import { mapGetters } from 'vuex'
import Filters from '../components/Filters'
import Card from '../components/Card'
import Pagination from '../components/Pagination'
import Axios from '../components/Axios'

export default {
  name: 'List',
  components: {
    Filters,
    Card,
    Pagination,
    Axios
  },

  data: () => {
    return {
      data: {},
      flat: {}
    }
  },

  computed: {
    ...mapGetters(['getDataFlat'])

  },

  methods: {
    // thisFlat () {
    // this.flat = this.getDataFlat
    // this.flat = this.getDataFlat.find(flat => flat.id === 1)
    // eslint-disable-next-line no-console
    // console.log('test')
    // }
  }
}
</script>
