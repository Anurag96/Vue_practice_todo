<template>
    <div>
        <br>
    <table>
        <tr v-bind:key="todo.id" v-for="todo in todos">
                <Todo v-bind:todo="todo" 
                v-on:delete-todo="$emit('delete-todo', todo.id)" 
                v-on:edit-todo="$emit('edit-todo', todo)"
                />
        </tr>
    </table>
    </div>
</template>


<script>
import Todo from './Todo';
export default {
    name:'Todos',
    components:{Todo},
    props: [
        "todos"
    ]
    
    
}
</script>
<style scoped>
table { 
            border-collapse: collapse; 
            width: 20%; 
        } 
          
        td { 
            padding: 10px;
        border: 1px solid black;
        border-collapse: collapse;
        } 
          
        tr:nth-child(odd) { 
            background-color: Lightgreen; 
        } 
</style>