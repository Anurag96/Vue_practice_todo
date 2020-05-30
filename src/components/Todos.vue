<template>
    <div>
        <br>
        <TitleHeader></TitleHeader>
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
import TitleHeader from './TitleHeader.vue';

export default {
    name:'Todos',
    components:{Todo,TitleHeader},
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
        tr, td, th{
    border:1px solid green;
    text-align: center;
    text-size-adjust: 0.58;
}
</style>