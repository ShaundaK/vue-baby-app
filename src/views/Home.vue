<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="category in categories">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name: {{ category.name }}</h5>
             <!--  <p class="card-text">Description: {{ user.description }}</p> -->
              <!-- <img v-bind:src="product.image_url" width="100px"> -->
              <!-- <p class="card-text">Age: {{user.email}}</p> -->
              <!-- <p class="card-text">Gender: {{product.gender}}</p> -->
              <a v-bind:href="'/#/categories/' + category.id" class="btn btn-primary">Go somewhere</a>
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
      message: "Category Page!",
      categories: [],
    };
  },
  created: function() {
    console.log(this)
    axios.get('http://localhost:3000/api/categories/').then(function(response) {
      console.log(response.data);
      this.categories = response.data
    }.bind(this))
  },

  methods: {},
  computed: {}
};
</script>
