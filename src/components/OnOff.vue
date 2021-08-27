<template>
  <div>
    <button @click="toggleButton">{{ buttonText }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonText: 'On',
    };
  },
  methods: {
    toggleButton() {
      this.buttonText = this.buttonText === 'On' ? 'Off' : 'On';
    },
  },
};
</script>

<style></style>
