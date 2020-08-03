<template>
   <div v-if="isEnableSearch">
        <input type="text" placeholder="Filter" v-model="search" @keyup="filterData" /> 
    </div>
</template>

<script>
export default {
 
    data() {
      return{
        search:'',
        isEnableSearch: true
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