<template>
  <main class="detail py-8">
    <div class="container mx-auto">
      <h2 class="title-big">
        Product title
      </h2>
      <div class="flex mt-4">
        <!--        Галерея-->
        <div class="border rounded-xl shadow w-2/3 h-600 flex-shrink-0">
          <div class="relative w-full h-2/3">
            <img class="h-full w-full object-cover border-4 border-white rounded-t-xl" src="~/static/1.jpg" alt="">
            <div class="overlay-element border-4 border-white rounded-t-xl" />
          </div>
          <div class="flex h-1/3">
            <div class="w-1/3 h-full border-4 border-white relative">
              <img class="h-full w-full object-cover rounded-bl-xl" src="~/static/2.jpg" alt="">
              <div class="overlay-element rounded-bl-xl" />
            </div>
            <div class="w-1/3 h-full border-4 border-white relative">
              <img class="h-full w-full object-cover" src="~/static/4.jpg" alt="">
              <div class="overlay-element" />
            </div>
            <div class="w-1/3 h-full border-4 border-white relative">
              <img class="h-full w-full object-cover rounded-br-xl" src="~/static/5.jpg" alt="">
              <div class="overlay-element rounded-br-xl" />
            </div>
          </div>
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
                  <option v-for="option in 4" :key="option" value="">{{ option }} flat</option>
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
          <Card v-for="card in 4" :key="card" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Card from '~/components/Card'

export default {
  components: {
    Card
  }
}
</script>
