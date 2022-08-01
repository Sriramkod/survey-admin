<template>
<div>
  <center><h3 class="w3-container w3-green" style="width: 75%;"> Welcome to Survey-Feed</h3></center>
   <br>
   <br>
<div class="w3-card-4">
  <center>
     
    <div  class="w3-container w3-blue" style="width: 20%;">

 <h4> Survey-Manager Login</h4>
       </div>

       <h4><div class="error w3-text-red" v-html="error"></div></h4>
       <br>
       <h4>Email Address</h4>
        <form name="album-login-user" class="w3-container"
       autocomplete="off">
       <input type="text" class="w3-input" name="email"  style="width: 50%;"  placeholder="Enter email"
    v-model="email"
   />
   <br>
   <h4>Password</h4>
   <input  class="w3-input" style="width: 50%;"
          name="password"
          placeholder="Enter password"
          v-model="password" autocomplete="new-password"
   />
   </form>
   <br>
   <br>
</center>
    <button @click="login" class="w3-btn w3-blue">Proceed</button>
    <br><br>
</div>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        console.log('Login button', this.email, this.password)
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log(this.email)
        const id = this.email
        this.$router.push({ path: `/surveymanager/${id}` })
        // this.$router.push('/add/'+this.email)
        console.log(response.data.token)
        this.error = 'Login sucessfull'
        this.email = ' '
        this.password = ' '
        this.$routestore.dispatch('setToken', response.data.token)
        this.$routestore.dispatch('setUser', response.data.user)
        console.log(response)
        return
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://www.w3schools.com/w3css/4/w3.css";
</style>
