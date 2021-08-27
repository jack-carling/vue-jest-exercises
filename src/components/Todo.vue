<template>
  <section>
    <input type="text" id="todo-text" v-model="newTodo" />
    <button @click="addTodo">Lägg till todo</button>
    <article>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.text }}
          <button class="delete" @click="deleteTodo(index)">Remove</button>
        </li>
      </ul>
    </article>
  </section>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      newTodo: '',
      todos: [],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ text: this.newTodo });
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
