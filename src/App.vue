<template>
  <div id="app">
    <Header/>
    <div class="main">
      <AddTodo />
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