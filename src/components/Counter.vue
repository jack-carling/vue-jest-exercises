<template>
  <div>
    <button id="increase" @click="increase">Increase</button>
    <span id="result">{{ result }}</span>
    <button id="decrease" @click="decrease">Decrease</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: 1,
    };
  },
  methods: {
    increase() {
      this.result++;
    },
    decrease() {
      this.result--;
    },
  },
};
</script>

<style></style>
