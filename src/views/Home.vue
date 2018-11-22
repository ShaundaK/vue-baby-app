<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="product in products">
      <p>name: {{ product.name }}</p>
      <p>description: {{product.description }}</p>
      <p>age: {{ product.age }}</p>
      <p>gender: {{ product.gender }}</p>
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
      message: "Welcome to Vue.js!",
      products: [],
    };
  },
  created: function() {
    console.log(this)
    axios.get('http://localhost:3000/api/products').then(function(response) {
      console.log(response.data);
      this.products = response.data
    }.bind(this));
  },

  methods: {},
  computed: {}
};
</script>
