<template>
  <div class="slider relative h-600">
    <div class="relative w-full h-2/3">
      <img class="h-full w-full object-cover border-b-4 border-white rounded-t-xl" :src="flat['main_image']" alt="Main image">
      <div class="overlay-element border-b-4 border-white rounded-t-xl" />
    </div>
    <div class="h-1/3 flex relative">
      <!--      <button class="w-4 h-full absolute top-0 -left-4 bg-red-500 z-20 border-4 border-white focus:outline-none" @click="goToPrev" />-->
      <Slide v-for="(slide, key) in displayed" :key="key">
        <slot>
          <img :src="flat.images[slide]" class="object-cover h-full w-full" alt="Photo">
        </slot>
      </Slide>
      <!--      <button class="w-4 h-full absolute top-0 -right-4 bg-red-500 z-20 border-4 border-white focus:outline-none" @click="goToNext" />-->
    </div>
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
    }
    // loading: {
    //   type: Boolean,
    //   required: true
    // }
  },

  data: () => {
    return {
      current: 0
    }
  },

  computed: {
    ...mapGetters(['getDataFlat']),

    // Отобржает 3 из n картинок если объект flat не пустой
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
