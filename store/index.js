import axios from 'axios'

export const state = () => ({
  dataFlat: null
})

export const mutations = {
  setDataFlat: (state, dataFlat) => { state.dataFlat = dataFlat }
}

export const actions = {
  async fetchDataFlat ({ commit }) {
    let dataFlat
    await axios.get('https://api.te-rent.com/v1/apartments', { withCredentials: true })
      .then(response => (dataFlat = response.data.data))
    commit('setDataFlat', dataFlat)
  }
}

export const getters = {
  getDataFlat: state => state.dataFlat
}
