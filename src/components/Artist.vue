<template>
<div>
     <br>
<div class="w3-card-4">
  <center>
       <div  class="w3-container w3-blue" style="width: 65%;">

 <h4> Edit this Artist</h4>
       </div>
       <br>
  <div v-if="currentTutorial" class="edit-form">
    <p class="error w3-text-blue">{{ message }}</p>
    <form>
      <div class="form-group">
        <label class="error w3-text-blue" for="title">Email</label>
        <input type="text" class="form-control w3-input w3-border w3-sand" style="width: 150%;"
         id="title"
          v-model="currentTutorial.email"
        />

      </div>
      <div class="form-group">
        <label for="description" class="error w3-text-blue">Password</label>
        <input type="text" class="form-control w3-input w3-border w3-sand" style="width: 150%;"
         id="description"
          v-model="currentTutorial.password"
        />
      </div>
    </form>
    <br>
    <button class="w3-btn w3-red"
      @click="deleteTutorial"
    >
      Delete
    </button>

    <button type="submit" class="w3-btn w3-blue"
      @click="updateTutorial"
    >
      Update
    </button>
  </div>

  <div v-else>
    <br />
    <p>Click on a Album to view...</p>
  </div>
   <br>

  </center>
  </div>
  </div>
</template>

<script>
import AlbumService from '../services/AlbumService'

export default {
  name: 'tutorial',
  data () {
    return {
      currentTutorial: null,
      message: ''
    }
  },
  methods: {
    getTutorial (id) {
      AlbumService.getOneArtist(id)
        .then(response => {
          this.currentTutorial = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    updatePublished (status) {
      var data = {
        id: this.currentTutorial.id,
        email: this.currentTutorial.email,
        password: this.currentTutorial.password
      }

      AlbumService.updateArt(this.currentTutorial.id, data)
        .then(response => {
          this.currentTutorial.published = status
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    updateTutorial () {
      AlbumService.updateArt(this.currentTutorial.id, this.currentTutorial)
        .then(response => {
          console.log(response.data)
          this.message = 'The Artist was updated successfully!'
          this.$router.push({ name: 'artists' })
        })
        .catch(e => {
          console.log(e)
        })
    },

    deleteTutorial () {
      AlbumService.deleteArt(this.currentTutorial.id)
        .then(response => {
          console.log(response.data)
          this.$router.push({ name: 'artists' })
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.message = ''
    this.getTutorial(this.$route.params.id)
  }
}
</script>

<style>
@import "https://www.w3schools.com/w3css/4/w3.css";
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
