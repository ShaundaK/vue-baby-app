<template>
  <div class="product">
    <div id="all">

      <div class="container-fluid">
        <div class="row row-offcanvas row-offcanvas-left"> 
    <h1>{{ message }}</h1>
<!--     <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="product in products">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"> {{ product.name }}</h5>
              <h5 class="card-title"> {{ product.description }}</h5>
              <div class="card-body"> -->
              <!-- <h5 class="card-title">User: {{ product.user }}</h5 --><!-- > -->
      <!--        <a v-bind:href="'/#/products/' + product.id" class="btn btn-primary">go somewhere</a>
            </div>
          </div>
         </div>
       </div>
      </div>
    </div>
  </div> -->
          <div class="col-md-6 col-lg-3 grid-item" v-for="product in products"> 
            <Rate :length="5"></Rate>

              <div class="box-masonry"> 
                <div class="box-masonry-text"> 
                  <h4> <a v-bind:href="'/#/products/' + product.id"> {{product.name}}</a></h4>
                  <div class="box-masonry-desription">
                    <p>{{product.description}}</p>
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