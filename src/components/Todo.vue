<template>

   <div v-bind:class="{ 'completed': todo.completed }">
         <table>
         <tr>
         <td >{{ todo.title }}</td>
         <td > <button @click="$emit('delete-todo', todo.id)">Delete</button> &nbsp;&nbsp;</td>
         <td >  <button @click="$emit('edit-todo', todo)">Edit</button> &nbsp;&nbsp;</td>
          <td ><input type="checkbox" id="checkbox" v-model="isActive">
               <span v-if="!isActive" >Status: Pending</span>
           <span v-if="isActive" >Status: Completed</span>
          </td>
          <!-- <label for="checkbox">{{ isActive }}</label> -->
         </tr>
         </table>
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
  /* .completed {
    text-decoration: line-through;
  } */
   button {border-radius: 50%;
  }
  button {
  background-color: #4CAF50; /* Green */
  color: white;
}
td {
     text-align: center; 
}
td:first-child {
     text-align: left;
}
table {
    border-collapse: collapse;
    border-spacing: 4px;
}
 
</style>