<template>
  <div>
    <br />
    <table>
      <thead>
        <tr>
          <th>Title of the Items</th>
          <th>Action</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody v-bind:key="todo.id" v-for="todo in todos">
        <Todo
          v-bind:todo="todo"
          v-on:delete-todo="$emit('delete-todo', todo.id)"
          v-on:edit-todo="$emit('edit-todo', todo)"
        />
      </tbody>
    </table>
  </div>
</template>


<script>
import Todo from "./Todo";

export default {
  name: "Todos",
  components: { Todo },
  props: ["todos"]
};
</script>
<style scoped>
table {
  border: 1px solid;
}

td {
  padding: 10px;
  border: 1px solid black;
}

tr:nth-child(odd) {
  background-color: Lightgreen;
}
tr,
td,
th {
  text-align: center;
  text-size-adjust: 0.58;
  margin: 5px;
}
</style>