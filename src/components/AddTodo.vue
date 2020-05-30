<template>
  <div>
    <br />
    <form @submit.prevent="addTodo">
      <input type="text" v-model="title" name="title" />
      <button v-if="id==''" type="submit">Add</button>
      <button v-if="id!=''" type="submit">update</button>
      <br>
      <span v-if="!isValidate"> *Please enter a valid field</span>
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
      isValidate: true,
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
      if(!this.title=="" ){
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
        this.isValidate=true
      }
  }else{
    this.isValidate=false
  }
      this.title = "";
      this.id = "";
      
    },
    deleteTodo(todoId) {
      if (confirm("Are you sure you want to delete?")) {
  this.todos = this.todos.filter(todo => todo.id !== todoId);
}
    },
    editTodo(todo) {
      this.id = todo.id;
      this.title = todo.title;
    },
    checkForm(){
      if (!this.title) {
        this.errors.push('Title required.');
      }
    }
  }
};
</script>
<style scoped>
button {
  width: 10%;
  
}
button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
  
}
input {
  width: 20%;
  background-color: rgb(212, 214, 213);
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
span{
  color: crimson;
}
</style>