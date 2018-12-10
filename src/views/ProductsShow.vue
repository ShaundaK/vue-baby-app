<template>
  <div class="productsshow">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="card">
          <div class="card-body">
               <h5 class="card-title"> {{ product.user.first_name }}</h5>
                <h5 class="card-title"> {{ product.name }}</h5>
                <h5 class="card-title"> {{ product.description }}</h5>
                 <div class="card-body">
                <a v-bind:href="'/#/users/' + user.id" class="btn btn-primary">Go somewhere</a>
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
      message: "One Product",
      user: [],
      product: []
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