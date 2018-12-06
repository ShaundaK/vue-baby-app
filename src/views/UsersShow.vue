<template>
  <div class="usersshow">
    <h1>{{ message }}</h1>
    <div class="container">
      <div class="row">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title"> {{ user.first_name }}</h5>
              <h5 class="card-title"> {{ user.email }}</h5>
              <h5 class="card-title"> {{ user.summary }}</h5>
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
      user: {}
    };
  },
  created: function() {
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