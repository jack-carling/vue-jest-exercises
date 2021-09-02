<template>
  <main>
    <input type="text" v-model="input" />
    <ul>
      <li v-for="(animal, index) in result" :key="index">{{ animal }}</li>
    </ul>
  </main>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      animals: [
        'cat',
        'dog',
        'parrot',
        'goldfish',
        'horse',
        'elephant',
        'ant',
        'snake',
        'crow',
        'cow',
        'eagle',
        'rhinoceros',
        'chimpanzee',
      ],
      result: [],
    };
  },
  mounted() {
    this.result = this.animals;
  },
  watch: {
    input() {
      if (!this.input.length) this.result = this.animals;
      const re = new RegExp(this.input, 'i');
      this.result = this.animals.filter((animal) => animal.match(re));
    },
  },
};
</script>

<style></style>
