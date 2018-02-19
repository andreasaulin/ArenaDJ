<template>
  <div class="categoryList">
    <ul>
      <li 
        v-for="category in categories"
        :key="category.categoryName"
      >{{ category.categoryName }}</li>
    </ul>
  </div>
</template>
  
<script>
  export default {
    name: 'Categroylist',
    props: {
      categories: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>
<style scoped>
  .categoryList ul li {
    color: #cecece;
    background-color: #253341;
    display: block;
    margin: 0px;
    text-align: left;
    padding-left: 10px;
    height: 55px;
  }
  .categoryList {
    background-color: #35495E;
    height: 100%;
  }
</style>