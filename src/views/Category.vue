<template>
  <div class="category">
    <h1>{{ message }}</h1>
    <div v-for="category in categories">
      <p>name: {{ category.name }}</p>
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