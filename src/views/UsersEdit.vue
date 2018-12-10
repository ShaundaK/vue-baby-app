<template>
  <div class="users-edit">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Your Profile</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Username:</label> 
          <input type="text" class="form-control" v-model="user.username">
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="text" class="form-control" v-model="user.phone_number">
           <div class="form-group">
          <label>Summary:</label>
          <input type="text" class="form-control" v-model="user.summary">
        </div>
         <div class="form-group">
          <label>Zipcode:</label>
          <input type="text" class="form-control" v-model="user.zipcode">
        </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        input_username: this.user.username,
        input_phone_number: this.user.phone_number,
        input_summary: this.user.summary,
        input_zipcode: this.user.zipcode
      };
      axios
        .patch("http://localhost:3000/api/users/" + this.$route.params.id, params)
        .then(response => {
          this.$router.push("/users/" + this.$route.params.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  },
  created: function() {
    console.log('in created');
    axios.get('http://localhost:3000/api/users/' + this.$route.params.id).then(response => {
      console.log(response.data);
    })
  }
};
</script>