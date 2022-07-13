<template>

<div class="list row">
    <div class="col-md-6">
      <ul class="w3-ul w3-card-4" style="width:500px">
         <li class="w3-bar" :class="{ active: index == currentIndex }"
          v-for="(album, index) in albums"
          :key="index"
          @click="setActiveAlbum(album, index)"
        >


      <img src="../assets/sicon.png" class="w3-bar-item w3-circle w3-hide-small" style="width:80px">
      <div class="w3-bar-item">
        <span class="w3-large">Survey: <span style="color:blue;">{{ album.title }}</span></span><br>
        <span class="w3-large">About Survey: {{ album.description }}</span>
      </div>
    </li>
      </ul>
      <br>
      <br>
    </div>
    
  </div>
  
  <div class="col-md-6">

    <div id="myModal" class="modal">
      <center>
        <!-- <span @click="deactivateSurvey" class="w3-bar-item w3-button w3-white w3-xlarge w3-right">×</span> -->
<div class="modal-content">
    <span class="close">&times;</span>
<div v-if="currentAlbum" class="w3-card w3-aqua">
        <h4>Survey</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentAlbum.title }}
        </div>
        <div>
          <label><strong>Description:</strong></label> {{ currentAlbum.description }}
        </div>
        <br>
        <center>
        <div class="row">
        <div class="column">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="column">&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="column">
        <router-link :to="'/albums/' + currentAlbum.id"  class="w3-button w3-red">Edit</router-link>
        &nbsp;&nbsp;</div>
        <div class="column">
        <router-link :to="'/addsong/' + currentAlbum.id"  class="w3-button w3-green">Add new Song</router-link>
        &nbsp;&nbsp;</div>
        <div class="column">
        <router-link :to="'/view-question/' + currentAlbum.id"  class="w3-button w3-green">View Survey Form</router-link>
        </div>
        </div></center>
        <br><br>
      </div>

      <div v-else>
        <br />
        <p>Click on the Survey to view...</p>
      </div>
      </div>
      </center>
    </div>
    </div>
</template>

<script>
import AlbumService from '../services/AlbumService'
import SurveyService from '../services/SurveyService'
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
export default {
  name: 'albums-list',
  data () {
    return {
      albums: [],
      currentAlbum: null,
      currentIndex: -1,
      title: '',
      artist: ''
    }
  },
  methods: {
    retrieveAlbums (id) {
      SurveyService.getAllByManager(id)
        .then(response => {
          this.albums = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    refreshList () {
      this.retrieveAlbums(this.$route.params.id)
      this.currentAlbum = null
      this.currentIndex = -1
    },

    setActiveAlbum (album, index) {
      this.currentAlbum = album
      this.currentIndex = index
      var modal = document.getElementById("myModal");
       modal.style.display = "block";
       span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
    },
    deactivateSurvey() {
        this.currentAlbum = null
      this.currentIndex = -1
    },
    removeAllAlbums () {
      AlbumService.deleteAll()
        .then(response => {
          console.log(response.data)
          this.refreshList()
        })
        .catch(e => {
          console.log(e)
        })
    },
    searchTitle () {
      AlbumService.findAllByArtist(this.artist)
        .then(response => {
          this.albums = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    searchArt () {
      AlbumService.findByTitle(this.title)
        .then(response => {
          this.albums = response.data
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.retrieveAlbums(this.$route.params.id)
  }
}
</script>

<style>
@import "https://www.w3schools.com/w3css/4/w3.css";
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>
