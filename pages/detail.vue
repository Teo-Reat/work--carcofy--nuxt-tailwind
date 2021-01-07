<template>
  <main class="detail py-8">
    <div class="container mx-auto">
      <h2 class="text-4xl py-2">
        Product title
      </h2>
      <div class="flex">
        <!--        Галерея-->
        <div class="border rounded-xl w-2/3 h-600 shadow flex-shrink-0">
          <div class="w-full h-2/3">
            <img class="h-full w-full object-cover border-4 border-white rounded-t-xl" src="~/static/1.jpg" alt="">
          </div>
          <div class="flex h-1/3">
            <div class="w-1/3 h-full border-4 border-white">
              <img class="h-full w-full object-cover rounded-bl-xl" src="~/static/2.jpg" alt="">
            </div>
            <div class="w-1/3 h-full border-4 border-white">
              <img class="h-full w-full object-cover" src="~/static/4.jpg" alt="">
            </div>
            <div class="w-1/3 h-full border-4 border-white">
              <img class="h-full w-full object-cover rounded-br-xl" src="~/static/5.jpg" alt="">
            </div>
          </div>
        </div>

        <!--        Калькулятор стоимости-->
        <div class="border rounded-xl -pl-8 ml-8 shadow w-full min-w-360">
          <div class="px-8 my-8">
            <h3 class="bg-grey-300 text-3xl py-4 text-center">
              Price
            </h3>
            <div class="flex flex-col">
              <label class="block mt-4">
                <span class="text-gray-700">Select</span>
                <select class="w-full border bg-white rounded px-3 py-2 outline-none">
                  <option v-for="option in 4" :key="option" value="">{{ option }} flat</option>
                </select>
              </label>
              <label class="block mt-2">
                <span class="text-gray-700">Select</span>
                <select class="w-full border bg-white rounded px-3 py-2 outline-none">
                  <option v-for="option in 10" :key="option" value="">{{ option }} days</option>
                </select>
              </label>
            </div>
            <div class="text-3xl text-center mt-8">
              Price for all
            </div>
            <button type="button" class="bg-blue-600 text-gray-200 text-lg rounded w-full py-2 mt-4">
              Order
            </button>
          </div>
        </div>
      </div>

      <!--      Блок сервисов-->
      <div class="flex my-16 border rounded-xl overflow-hidden shadow">
        <div class="w-2/3 p-4">
          <h3 class="text-3xl py-4">
            Services
          </h3>
          <ul class="grid grid-cols-2 gap-4">
            <li v-for="i in 10" :key="i" class="pl-6">
              {{ i + 999999 }}
            </li>
          </ul>
        </div>
        <div class="w-1/3 p-4 -pl-8 ml-8">
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
      <div class="my-16 border rounded-xl overflow-hidden shadow">
        <h3 class="text-3xl p-4">
          Similar products
        </h3>
        <div class="grid grid-cols-4 gap-16 p-4">
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
