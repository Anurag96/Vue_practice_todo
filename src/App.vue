<template>
  <div id="app">
    <Header/>
    <div class="main">
      <AddTodo v-on:add-todo="addTodo"/>
    </div>
  </div>
</template>

<script>
import AddTodo from './components/AddTodo';
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    AddTodo,
    Header
  },
  data() {
    return {
     
    }
  },
  methods: {
    
  }
}
</script>
<style lang="less" scoped>

</style>