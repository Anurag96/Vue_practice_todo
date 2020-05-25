<template>
  <div>
    <br />
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title" />
      <button v-if="id==''" type="submit">Add</button>
      <button v-if="id!=''" type="submit">update</button>
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
      if (this.id) {
        this.todos.map(
          obj=>{
            if(obj.id === this.id) {
              obj.title=this.title
            }
          }
        )
      } else {
        const newTodoObj = {
          id: uuid.v1(),
          title: this.title,
          completed: false
        };
        this.todos.push(newTodoObj);
      }
      this.title = "";
      this.id = "";
    },
    deleteTodo(todoId) {
      // 1 != 2
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    editTodo(todo) {
      this.id = todo.id;
      this.title = todo.title;
    }
  }
};
</script>
<style scoped>
</style>