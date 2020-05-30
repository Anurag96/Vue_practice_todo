<template>
    <div v-bind:class="{ 'completed': todo.completed }">
        <p >{{ todo.title }}</p>

         <button @click="$emit('delete-todo', todo.id)">Delete</button> &nbsp;&nbsp;
          <button @click="$emit('edit-todo', todo)">Edit</button> &nbsp;&nbsp;
          <span v-if="!isActive" >Status: Pending</span>
          <span v-if="isActive" >Status: Completed</span>
          <input type="checkbox" id="checkbox" v-model="isActive">
          <!-- <label for="checkbox">{{ isActive }}</label> -->
    </div>
</template>

<script>
export default {
    name:'Todo',
    props: [
    "todo"
        ],
        data(){
          return{
            isActive:false
          }
        },
  // methods: {
  //   markComplete() {
  //     this.isActive==false
  //   }
  // }
}
</script>

<style scoped>
  .completed {
    text-decoration: line-through;
  }
   button {border-radius: 50%;
  }
  button {
  background-color: #4CAF50; /* Green */
  color: white;
}
</style>