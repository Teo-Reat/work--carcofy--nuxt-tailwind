<template>
  <main class="detail py-8">
    <!--    <div>-->
    <!--      <h1>{{ slug }}</h1>-->
    <!--      <p>Path: {{ $route.path }}</p>-->
    <!--      <div class="h-32 overflow-hidden bg-green-300">-->
    <!--        {{ getDataFlat }}-->
    <!--      </div>-->
    <!--      <div class="h-32 overflow-hidden bg-blue-200">-->
    <!--        {{ flat }}-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="container mx-auto">
      <h2 class="title-big">
        {{ flat.title }}
      </h2>
      <div class="flex mt-4">
        <!--        Галерея-->
        <div class="rounded-xl w-2/3 flex-shrink-0">
          <Slider :flat="flat" />
        </div>

        <!--        Калькулятор стоимости-->
        <div class="border rounded-xl -pl-8 ml-8 shadow w-full min-w-360">
          <div class="px-12 my-8">
            <h3 class="title-med text-center">
              Price
            </h3>
            <div class="flex flex-col">
              <label class="block mt-4">
                <span class="text-gray-700">Select</span>
                <select class="input-gray">
                  <option v-for="option in 4" :key="option" value="">{{ option }} room</option>
                </select>
              </label>
              <label class="block mt-2">
                <span class="text-gray-700">Select</span>
                <select class="input-gray">
                  <option v-for="option in 10" :key="option" value="">{{ option }} days</option>
                </select>
              </label>
            </div>
            <div class="title-med text-center mt-8">
              Price for all
            </div>
            <button type="button" class="btn-gray w-full mt-4">
              Order
            </button>
          </div>
        </div>
      </div>

      <!--      Блок сервисов-->
      <div class="flex my-16 border rounded-xl overflow-hidden shadow">
        <div class="w-2/5 px-12 py-8">
          <h3 class="title-med">
            Services
          </h3>
          <ul class="grid grid-cols-2 gap-4 mt-4">
            <li v-for="i in 10" :key="i" class="text-gray-600">
              {{ i + 999999 }}
            </li>
          </ul>
        </div>
        <div class="w-3/5  px-12 py-8 -pl-8 ml-8 text-regular">
          Virtually, indeed, plasma! None of these energies will be lost in galaxies like modifications in alarms.
          The fantastic proton accelerative travels the ship.Collectives meet with sonic shower!
          The neutral particle tightly manifests the phenomenan.Turbulence at the solar sphere was the peace of
          alignment, evacuated to an evil lieutenant commander.Photonic, brave ships never acquire a greatly
          exaggerated, crazy astronaut.Red alert.Mankind at the solar system was the devastation of sonic shower,
          infiltrated to a cold klingon.This anomaly has only been examined by a real crewmate.Tragedy, alarm, and
          ellipse.Shields up, ancient history!
        </div>
      </div>

      <!--      Блок похожих запросов-->
      <div class="my-16 border rounded-xl overflow-hidden shadow px-12 py-8">
        <h3 class="text-3xl">
          Similar products
        </h3>
        <div class="grid grid-cols-4 gap-12 mt-4">
          <Card v-for="card in getDataFlat" :key="card.id" :flat="card" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import Card from '../../components/Card'
import Slider from '../../components/Slider'

export default {
  components: {
    Slider,
    Card
  },

  // eslint-disable-next-line require-await
  async asyncData ({ params }) {
    const slug = params.slug
    return { slug }
  },

  data: () => {
    return {
      flat: {}
      // loading: false
    }
  },

  computed: {
    ...mapGetters(['getDataFlat'])
  },

  mounted () {
    this.thisFlat()
  },

  methods: {
    ...mapActions(['fetchDataFlat']),

    getFlatFromServer () {
      // this.loading = true
      axios.get('https://api.te-rent.com/v1/apartments/' + this.slug)
        .then(response => (this.flat = response.data.data))
        // .finally(() => { this.loading = false })
    },

    thisFlat () {
      this.getDataFlat ? this.flat = this.getDataFlat.find(flat => flat.id === +this.slug) : this.getFlatFromServer()
    }
  }
}
</script>
