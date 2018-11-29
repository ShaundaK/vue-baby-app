<template>
  <div class="category">
    <h1>{{ message }}</h1>
    <div v-for="category in categories">
      <!-- links category to user with that product -->
      <a href="html_images.asp">{{ category.name }}</a> 
      <!-- <a v-bind:href"'/#/categories/' + category.id" class="bt btn-primary"Click here></a>   -->
    </div>
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Categories",
      categories: [],
    };
  },
  created: function() {
    console.log(this)
    axios.get('http://localhost:3000/api/categories').then(function(response) {
      console.log(response.data);
      this.categories = response.data
    }.bind(this));
  },

  methods: {},
  computed: {}
};
</script>