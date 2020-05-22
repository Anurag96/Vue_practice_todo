<template>
  <div>
    <br />
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title" />
      <button type="submit">Add</button>
    </form>
    <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo" v-on:edit-todo="editTodo" />
  </div>
</template>
<script>
import Todos from "./Todos";
import { uuid } from "vue-uuid";

export default {
  name: "AddTodo",
  components: {
    Todos
  },
  data() {
    return {
      title: "",
      id: "",
      todos: [
        {
          id: 1,
          title: "Go workout",
          completed: false
        },
        {
          id: 2,
          title: "Do laundry",
          completed: false
        },
        {
          id: 3,
          title: "Cook food",
          completed: false
        }
      ]
    };
  },
  methods: {
    addTodo() {
        const newTodoObj = {
          id: uuid.v1(),
          title: this.title,
          completed: false
        };
        this.todos.push(newTodoObj);
      this.title = "";
      this.id = "";
    },
    deleteTodo(todoId) {
      // 1 != 2
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    editTodo(todoId) {
      let todo = this.todos.filter(todo => todo.id === todoId);
      this.id = todoId;
      this.title = todo[0].title;
    }
  }
};
</script>
<style scoped>
</style>