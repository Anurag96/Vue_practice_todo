<template>
  <div id="app">
    <Header/>
      <AddTodo v-on:add-todo="addTodo"/>
      <Todos v-bind:todos="todos" v-on:delete-todo="deleteTodo"  v-on:edit-todo="editTodo"/>
  </div>
</template>

<script>
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    Todos,
    AddTodo,
    Header
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: 'Go workout',
          completed: false
        },
        {
          id: 2,
          title: 'Do laundry',
          completed: false
        },
        {
          id: 3,
          title: 'Cook food',
          completed: false
        }
      ],
    }
  },
  methods: {
    addTodo(newTodoObj) {
      this.todos = [...this.todos, newTodoObj];
    },
    deleteTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId);
    },
    editTodo(todoId){
         this.todos = this.todos.filter(todo => todo.id !== todoId);
        
    }
  }
}
</script>
<style lang="less" scoped>

</style>