<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name: {{ category.name }}</h5>
              <!-- <img v-bind:src="category.image_url" width="100px"> -->
              <p class="card-text">Products: {{category.products}}</p>
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
      message: "",
      category: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/categories/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.category = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>