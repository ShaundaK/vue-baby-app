<template>
  <div class="user">
 <!--    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm-4" v-for="user in users">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ user.summary }}</h5> -->
              <!-- <img v-bind:src="category.image_url" width="100px"> -->
          <!--     <a v-bind:href="'/#/users/' + user.id" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
    <div id="all">
      <div class="container-fluid">
        <div class="row row-offcanvas row-offcanvas-left"> 
          <div class="col-md-6 col-lg-3 grid-item" v-for="user in users"> 
            <div class="box-masonry"> 
              <div class="box-masonry-text"> 
                  <h4> <a v-bind:href="'/#/users/' + user.id"> {{user.first_name}}</a></h4>
                  <div class="box-masonry-desription">
                    <p>{{ user.summary }}</p>
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
      message: "Users",
      users: [],
    };
  },
  created: function() {
    console.log(this)
    axios.get('http://localhost:3000/api/users').then(function(response) {
      console.log(response.data);
      this.users = response.data
    }.bind(this));
  },

  methods: {},
  computed: {}
};
</script>