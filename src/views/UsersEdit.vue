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
          <input type="text" class="form-control" v-model="username">
        </div>
        <div class="form-group">
          <label>Phone Number:</label>
          <input type="text" class="form-control" v-model="phone_number">
           <div class="form-group">
          <label>Summary:</label>
          <input type="text" class="form-control" v-model="summary">
        </div>
         <div class="form-group">
          <label>Zipcode:</label>
          <input type="text" class="form-control" v-model="zipcode">
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
      username: "",
      phone_number: "",
      summary: "",
      zipcode: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("http://localhost:3000/api/users", params)
        .then(response => {
          this.$router.push("/login");
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