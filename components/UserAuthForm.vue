<template>
  <form action="" @submit.prevent="userLogin">
    form
    <label>
      <input v-model="login" type="text" value="somelogin">
    </label>
    <label>
      <input v-model="password" type="password" value="somepassword">
    </label>
    <button class="" type="submit">
      Submit
    </button>
    <div>{{ token }}</div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  name: 'UserAuthForm',

  data: () => {
    return {
      login: 'admin@te-rent.com',
      password: 'прерогатива',
      device: 'watermelon',
      token: null
    }
  },

  methods: {
    // eslint-disable-next-line require-await
    async userLogin () {
      axios.post('https://api.te-rent.com/v1/sanctum/token', { email: this.login, password: this.password, device_name: this.device })
        .then(response => this.login = response)
    }
  }
}
</script>

<style scoped>

</style>
