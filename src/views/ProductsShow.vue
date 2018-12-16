<template>
  <div class="productsshow">
    <h1>{{ message }}</h1>
     <div class="container">
        <div class="row">
          <div class="card">
            <div class="card-body">
                 <p><h5 class="card-title"> {{ product.user["first_name"] }} </h5></p>
                <p><h5 class="card-title"> {{ product.user["email"] }}</h5></p>
                <p><h5 class="card-title"> {{ product.user["zipcode"] }}</h5></p>
                <p><h5 class="card-title"> {{ product.user["summary"] }}</h5></p>
                <textarea class="form-control" id="inputtext" placeholder="Write your message here...">Write your message here...</textarea>  
                <input class="btn btn-primary" type="submit" value="Submit">
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
      user: [],
      product: {user: {}}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/products/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.product = response.data;
    });
  },

  methods: {},
  computed: {}
};
</script>