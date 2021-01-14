<template>
  <div />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Axios',

  mounted () {
    this.fetchDataFlat()
  },

  methods: {
    ...mapActions(['fetchDataFlat'])
  }
}
</script>
