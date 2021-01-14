<template>
  <div class="slider relative overflow-hidden">
    <div class="bg-green-300 h-16 overflow-hidden">
      {{ flat }}
    </div>
    <div class="bg-blue-200">
      {{ loading }}
    </div>
    <div class="bg-blue-300">
      {{ displayed }}
    </div>
    <div class="h-48 bg-purple-100">
      <img :src="flat['main_image']" alt="" class="">
    </div>
    <button class="w-full" @click="goToPrev">
      prev
    </button>
    <div class="line flex">
      <Slide v-for="(slide, key) in displayed" :key="key">
        <slot>
          <img :src="flat.images[slide]" alt="">
        </slot>
      </Slide>
    </div>
    <button class="w-full" @click="goToNext">
      next
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Slide from './Slide'

export default {
  name: 'Slider',

  components: {
    Slide
  },

  props: {
    flat: {
      type: Object,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  },

  data: () => {
    return {
      // slides: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      current: 0
    }
  },

  computed: {
    ...mapGetters(['getDataFlat']),

    displayed () {
      if (!(Object.keys(this.flat).length === 0 && this.flat.constructor === Object)) {
        return [
          this.current <= 0 ? this.flat.images.length - 1 : this.current - 1,
          this.current,
          this.current >= this.flat.images.length - 1 ? 0 : this.current + 1
        ]
      }
      return []
    }
  },

  methods: {
    goToPrev () {
      this.current <= 0 ? this.current = this.flat.images.length - 1 : this.current--
    },

    goToNext () {
      this.current >= this.flat.images.length - 1 ? this.current = 0 : this.current++
    }
  }
}
</script>
