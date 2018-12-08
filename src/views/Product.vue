<template>
  <div class="product">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="product in products">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name: {{ product.name }}</h5>
              <div class="card-body">
              <h5 class="card-title">User: {{ product.user }}</h5>
             <a v-bind:href="'/#/products/' + product.id" class="btn btn-primary">go somewhere</a>
            </div>
          </div>
         </div>
       </div>
      </div>
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
      message: "Products",
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