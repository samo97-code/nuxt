<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        {{ userName }}
        {{ age }}
        {{ count }}
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <button @click="test">
          Get User
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: null,
      age: null,
      count: null
    }
  },
  methods: {
    async test () {
      const response = await this.$axios.get('/user')
      console.log(response, 9999)
      this.userName = response.data.user.name
      this.age = response.data.user.age
      this.count = response.data.user.count
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
