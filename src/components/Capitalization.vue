<template>
  <div>
    <input type="text" v-model="input" />
    <span id="result">{{ result }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  computed: {
    result() {
      if (!this.input.length) return '';
      return this.input.charAt(0).toUpperCase() + this.input.slice(1);
    },
  },
};
</script>

<style></style>
