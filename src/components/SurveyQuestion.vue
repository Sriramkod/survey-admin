<template>
<div class="w3-container">
    <center><h3 class="w3-container w3-blue" style="width: 75%;"> Survey-Feed</h3></center>
</div>
  <div id="visa" v-if="this.albums.length">
    <h5>Hello Survey Manager , below are the questions in your survey: </h5>
    <router-link :to="'/edit-this-survey/' + this.$route.params.id">
    <button class="w3-btn w3-blue">Click Here to edit this...</button>
    </router-link>
    <form class="w3-container">
      <br>
      <center>
      <div class="w3-ul w3-card-4"
      style="width: 80%"
      v-for="(applicant, counter) in applicants" 
      v-bind:key="counter">
        <label for="duration">{{counter+1}}. Normal Question:</label>
        <input type="text" v-model="applicant.previous" :id="'one' + counter" placeholder="Enter the Question" disabled>
        <br><br><br> 
      </div>
      <div class="w3-ul w3-card-4"
      style="width: 80%"
      v-for="(applicant, counter) in radioapplicants"
      v-bind:key="counter">
        <label for="rduration">{{counter+1}}. Radio Question:</label>
        <input type="text" v-model="applicant.previous1" :id="'radioone' + counter" disabled>
        <label for="rduration">Option 1:</label>
        <input type="text" v-model="applicant.previous2" :id="'radiotwo' + counter" disabled>
        <label for="rduration">Option 2:</label>
        <input type="text" v-model="applicant.previous3" :id="'radiothree' + counter" disabled>
        <label for="rduration">Option 3:</label>
        <input type="text" v-model="applicant.previous4" :id="'radiofour' + counter" disabled>
        <br><br><br> 
      </div>
      </center>
    </form>
</div>
<div v-if="this.albums.length==0"> 
<h5>Hello Survey Manager , this an empty survey... </h5>
  <!-- <router-link :to="{ name: 'test', params: { id: this.$route.params.id, user: this.$route.params.id }}">
      <button class="w3-btn w3-red" >Add Questions to the Survey</button>
      </router-link> -->
</div>
</template>

<script>
import AlbumService from '../services/AlbumService'
import SurveyService from '../services/SurveyService'
export default {
  name: 'albums-list',
  data () {
    return {
      albums: [],
      currentAlbum: null,
      currentIndex: -1,
      title: '',
      applicants:[
       {
      previous: '',
      expiration:''
       }
     ],
     radioapplicants:[
      {
        previous1: '',
        previous2: '',
        previous3: '',
        previous4: ''
      }
     ],
     submitted: false
    }
  },
  methods: {
    getTutorial (id) {
      console.log(id)
      SurveyService.getAllBySurveyId(id)
        .then(response => {
          this.albums = response.data
          this.currentTutorial = response.data;
          if(this.albums.length==0)
          {
            this.applicants.splice(0,1);
          this.radioapplicants.splice(0,1);
          return;
          }
          console.log(response.data)
          console.log(this.albums[0].description)
          console.log(this.albums.length)
          for (let i = 0; i < this.albums.length; i++) {

            if(this.albums[i].type=="Normal")
            {
              console.log(this.albums[i].userid);
              this.applicants.push({
                      previous:this.albums[i].description,
                      expiration: this.albums[i].description
                })
            }
            else if(this.albums[i].type=="Radio")
            {
              var match = this.albums[i].options.split(',')
              this.radioapplicants.push({
                    previous1:this.albums[i].description,
                    previous2: match[0],
                    previous3: match[1],
                    previous4: match[2]
                })
            }
          }
          this.applicants.splice(0,1);
          this.radioapplicants.splice(0,1);
        })
        .catch(e => {
          console.log(e)
        })
    },

    refreshList () {
      this.currentAlbum = null
      this.currentIndex = -1
    },

    setActiveAlbum (album, index) {
      this.currentAlbum = album
      this.currentIndex = index
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
      if (this.title === '' || this.title === null || this.title.value === 0) {
        this.message = 'Please enter text in text box above to search for a song'
        document.getElementById('loads').style.display = 'none'
      } else {
        AlbumService.findByTitleSong(this.title)
          .then(response => {
            this.albums = response.data
            console.log(response.data)
            if (this.albums.length === 0) { document.getElementById('loads').style.display = 'block' } else { document.getElementById('loads').style.display = 'none' }
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    getSongs () {
      AlbumService.findSongsByAlbumId(this.$route.params.id)
        .then(response => {
          this.albums = response.data
          this.currentTutorial = response.data
          console.log(response.data)
          document.getElementById('loads').style.display = 'none'
        })
        .catch(e => {
          console.log(e)
        })
    }
  },
  mounted () {
    this.getTutorial(this.$route.params.id)
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
#visa {
  margin: 20px auto;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input {
  font-size: 30px;
  border: 1px double rgb(102, 97, 96) ;
  border-radius: 4px;
}
button {
  font-size: 16px;
 background: rgb(64, 179, 140);
  padding: 0.4rem 1.3rem;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 4px;
 margin: 10px;
}
span{
  width: 30px;
  float: right;
  cursor: pointer;
}
span:hover{
  color: brown;
}
.previous{
  border: 1.5px solid;
  padding:5px;
  margin-bottom: 10px;
}
.radioprevious{
  border: 1.5px solid;
  padding:5px;
  margin-bottom: 10px;
}
</style>
