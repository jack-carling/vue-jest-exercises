<template>
  <div id="app">
    <TodoAPI />
  </div>
</template>

<script>
import TodoAPI from '@/components/TodoAPI';

export default {
  components: {
    TodoAPI,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
