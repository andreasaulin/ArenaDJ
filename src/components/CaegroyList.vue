<template>
  <div class="categoryList">
    <ul>
      <li 
        v-for="category in categories"
        :key="category.categoryKey"
      >{{ category.categoryName }}</li>
    </ul>
  </div>
</template>
  
<script>
  export default {
    name: 'Categroylist',
    props: {
      categories: {
        type: Object,
        default () {
          return {}
        }
      }
    }  
  }
</script>
