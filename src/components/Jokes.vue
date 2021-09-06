<template>
  <main>
    <h1>{{ `${joke.setup} - ${joke.punchline}` }}</h1>
    <button @click="getJoke">Get Joke</button>
  </main>
</template>

<script>
export default {
  data() {
    return {
      joke: {
        setup: '',
        punchline: '',
      },
    };
  },
  methods: {
    async getJoke() {
      const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
      const data = await response.json();
      this.joke.setup = data.setup;
      this.joke.punchline = data.punchline;
    },
  },
};
</script>

<style></style>
