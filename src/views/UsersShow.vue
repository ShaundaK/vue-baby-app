<template>
 <div class="usersshow">
  <div class="form-group">
    <h1>{{ message }}</h1>
      <div class="container">
        <div class="row">
           <div class="card">
            <!-- <div class="col-sm-4" v-for="user in users"> -->
            <div class="card-body">
              <h5 class="card-title"> {{ user.first_name }}</h5>
              <h5 class="card-title"> {{ user.last_name }}</h5>
              <h5 class="card-title"> {{ user.email }}</h5>
              <h5 class="card-title"> {{ user.phone_number }}</h5>
              <h5 class="card-title"> {{ user.zipcode }}</h5>
              <h5 class="card-title"> {{ user.summary }}</h5>
              <textarea class="form-control" id="inputtext" placeholder="Write your message here...">Write your message here...</textarea>
              <input class="btn btn-primary" type="submit" value="Submit">
             </div>
            </div>
          </div>
        </div>
      </div>
       </div>
     </div>
  </form>
</template>

<style>
</style>

<script>
  var axios = require('axios');
export default {
  data: function() {
    return {
      message: "",
      user: []
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