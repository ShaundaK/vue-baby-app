<template>
  <div class="categoriesshow">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"> {{ category.name }}</h5>
              <div class="card-body">
              <h5 class="card-title"> {{ product.user }}</h5>
              <a v-bind:href="'/#/users/' + user.id" class="btn btn-primary">{{category.products[0]["description"]}}</a>
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
      message: "",
      category: {},
      product: {},
      user: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/categories/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.category = response.data;
    })

    console.log(this);
    axios.get('http://localhost:3000/api/products/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.product = response.data;
    })

    console.log(this);
    axios.get('http://localhost:3000/api/users/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.user = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>