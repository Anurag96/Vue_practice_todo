<template>
   <div v-if="isEnableSearch">
        <input type="text" placeholder="Filter" v-model="search" @keyup="filterData" /> 
    </div>
</template>

<script>
export default {
 props:{
     isEnableSearch: Boolean
 },
    data() {
      return{
        search:''
    }
    },
    methods: {
        filterData() {
            this.$emit('search-data', this.search)
        }
    }
}
</script>

<style>

</style>