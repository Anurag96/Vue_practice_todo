<template>
    <div>
        <br />
        <Search is-enable-search="iEnable" @searchData="searchTodo"></Search>
        <br/>
        <table>
            <thead>
                <tr>
                    <th>Title of the Items</th>
                    <th>Action</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody v-bind:key="todo.id"
                   v-for="todo in todos">
                <Todo :todo="todo" 
                @delete-todo="$emit('delete-todo', todo.id)"
                v-on:edit-todo="$emit('edit-todo', todo)" />
            </tbody>
        </table>    
    </div>
</template>


<script>
import Todo from "./Todo"
import Search from "./Search"

export default {
    name: "Todos",
    components: {
        Todo,
        Search
    },
    props: ["todos"],
    data() {
        return {
            iEnable: true,
            allTodos: []
        }
    },
    mounted:{
      filteredData(){
        this.allTodos = this.todos
      }
     
    }
    ,
    methods: {
        searchTodo(value) {
            if (value) {
                this.todos.filter(data=> data.title === value)
            } else {
                this.todos = this.allTodos;
            }
        }
    }
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