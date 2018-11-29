<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name: {{ product.name }}</h5>
              <p class="card-text">Description: {{ product.description }}</p>
              <!-- <img v-bind:src="product.image_url" width="100px"> -->
              <p class="card-text">Age: {{product.age}}</p>
              <p class="card-text">Gender: {{product.gender}}</p>
              <a href="/show.html" class="btn btn-primary">Go somewhere</a>
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
      message: "Product",
      product: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/products/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.product = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>