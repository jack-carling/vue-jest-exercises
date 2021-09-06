<template>
  <section>
    <input type="text" id="todo-text" v-model="newTodo" />
    <button @click="addTodo">Lägg till todo</button>
    <article>
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          {{ todo.task }}
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
      url: 'https://awesome-todo-api.herokuapp.com/tasks',
    };
  },
  methods: {
    async addTodo() {
      const newTodo = { text: this.newTodo };
      const response = await fetch(this.url, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: { 'Content-Type': 'application/json' },
      });
      const data = await response.json();
      if (data.success) {
        this.todos.push(newTodo);
      }
    },
    async deleteTodo(index) {
      const id = this.todos[index].id;
      const response = await fetch(`${this.url}/${id}`, { method: 'DELETE' });
      const data = await response.json();
      if (data.success) {
        this.todos.splice(index, 1);
      }
    },
    async getData() {
      const response = await fetch(this.url);
      const data = await response.json();
      if (data.success) {
        this.todos = data.todos;
      }
    },
  },
  async mounted() {
    this.getData();
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}
</style>
