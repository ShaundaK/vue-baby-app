<template>
  <div class="productsshow">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-body">
              <h5 class="card-title"> {{ product.name }}</h5>
              <h5 class="card-title"> {{ product.user }}</h5>
              <!-- <img v-bind:src="category.image_url" width="100px"> -->
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
      message: "",
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