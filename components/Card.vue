<template>
  <div class="transform hover:-translate-y-0.5 transition duration-300 group">
    <div class="rounded-xl overflow-hidden shadow-lg h-48 transition duration-300 group-hover:shadow-2xl">
      <img :src="flat['main_image']" alt="" class="object-cover">
    </div>
    <div class="bg-white w-11/12 mx-auto p-4 rounded-xl -mt-14 relative z-10 shadow-lg transition duration-300 group-hover:shadow-2xl">
      <div class="text-small uppercase">
        {{ flat.title }}
      </div>
      <router-link :to="'/apartments/' + flat.id">
        {{ flat.title }}
      </router-link>
      <div class="text-small">
        Some long-long description. Carnivorous starlight travels lead to the resistance.
      </div>
      <div class="text-small text-right">
        Another text
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Card',
  props: {
    flat: {
      type: Object,
      required: true
    }
  }
}
</script>
