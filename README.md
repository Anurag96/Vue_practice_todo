# Vue-cli-practice

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Requirements

* Convert ul.li to table.tr

```
<table>
    <thead>
        <tr>
            <th>

    <tbody>
        <tr>
            <td>

    <tfoot>
        <tr>
            <td>
            
```
* Validation of input textbox
* Delete confirmation
* Reset/cancel to go back on add todo state
* Table

|Checkbox|Title|Status|Action|
|Checkbox|test |Active| edit/delete

* Add Todo ---------    Edit Todo
* Title --------------        Title
* Textbox-----------      Textbox
* Error---------------         Error

* Add   --------------- Update/ Cancel



____________________________________

Create search componet and use in todos.vue
    -> props => enable-search =bollean
    -> eventhandler:=> @filter-result="event"


todos.vue

1) import search
2) component: {
        search
    },
    data: {
        iEnable: true/false,
        allTodos: []
    },
    mounted: {

        this.allTodos = this.todos
    }
3) <search is-enable-search="iEnable" @searchData="searchTodo">
4) methods: searchTodo(value){
        if(value){
            this.todos.filte
        } else {
            this.todos =this.allTodos;
        }
    }


SEARCH.vue

    <div v-if="isEnableSearc">
        <input type="" v-model="search" @keyup="filterData">  /aa
    </div>


    props: {
        isEnableSearch
    },
    data: {
        search:''
    }
    method: {
        filterData() {
            this.$emit('search-data', this.search)
        }
    }