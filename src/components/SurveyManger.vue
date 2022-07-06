<template>

<div class="w3-container">
    <center><h3 class="w3-container w3-blue" style="width: 75%;"> Welcome to Survey-Feed</h3></center>
    <br><br>
  <div class="w3-row">
    <div style="padding-left: 10%;">
    <router-link :to="'/new-survey/' + this.$route.params.id">
  <div class="w3-quarter w3-card w3-yellow w3-hover-shadow" style="height: 150px;">
    <p><h4>Create New Survey</h4></p><br>
    <img src="../assets/user.png" class="w3-bar-item w3-circle w3-hide-small" style="width:50px;">
  </div>
  </router-link>
  </div>
  <div class="w3-quarter">
    <p><h4></h4></p>
  </div>
  <router-link to="/">
   <div class="w3-quarter w3-card w3-yellow w3-hover-shadow" style="height: 150px;">
    <p><h4>Survey List</h4></p><br>
    <img src="../assets/sicon.png" class="w3-bar-item w3-circle w3-hide-small" style="width:50px">
 
  </div>
  </router-link>
  </div>
</div>

</template>

<script>
export default {
  methods: {
    gotTo (route) {
      this.$route.push(route)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://www.w3schools.com/w3css/4/w3.css";
.home{
    cursor: pointer;
}
</style>
