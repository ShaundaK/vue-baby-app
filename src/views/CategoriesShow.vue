<template>
  <div class="categoriesshow">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for=" product in category.products ">
          <div class="card">
            <div class="card-body">
              <p>{{ product.name}}</p>
              <p>{{ product.description}}</p>
              <p><a v-bind:href="'/#/products/' + product.id" class="btn btn-primary">go somewhere</a></p>
              <!-- p {{ product }} -->
             </div>
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
      category: [],
      product: [],
      user: []
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