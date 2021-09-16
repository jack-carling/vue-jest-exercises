<template>
  <div>
    <input type="text" v-model="sum" />
    <input type="text" v-model="friends" />
    <input type="text" v-model="tip" />
    <button @click="calculate">Calculate</button>
    <span>Each person owes {{ result }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: '0',
      friends: '0',
      tip: '0',
      result: '0',
    };
  },
  methods: {
    calculate() {
      this.result = (Number(this.sum) + Number(this.sum) * Number(this.tip)) / Number(this.friends);
    },
  },
};
</script>

<style></style>
