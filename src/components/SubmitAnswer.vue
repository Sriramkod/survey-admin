<template>
<router-view />
<div class="w3-container">
    <center><h3 class="w3-container w3-blue" style="width: 75%;"> Survey-Feed</h3></center>
</div>
  <div id="visa">
    <form class="w3-container">
      <br>
      <center>
      <div class="w3-ul w3-card-4"
      style="width: 80%"
      v-for="(applicant, counter) in applicants" 
      v-bind:key="counter">
        <label for="duration">{{counter+1}}. {{applicant.previous}}</label>
        <span></span>
        <input type="text" v-model="applicant.previous" :id="'normalq' + counter" disabled>
        <br><br>
        <input type="text"  :id="'normal' + counter" placeholder="Your Response" required>
        <br><br><br> 
      </div>
      
      <div class="w3-ul w3-card-4" style="width: 80%"
      v-for="(applicant, counter) in radioapplicants"
      v-bind:key="counter">
       
        <label for="rduration">{{counter+1}}. Radio Question:</label>
        <input type="text" :value="applicant.previous1" :name="name" :id="'radiotwo' + counter" disabled/> 
        <br>
         <input type="radio" id="age1" class="w3-input" :name="'radiotwo' + counter" :value="applicant.previous2" required>
  <label for="age1">{{applicant.previous2}}</label>
  <input type="radio" id="age2" :name="'radiotwo' + counter" :value="applicant.previous3" required>
  <label for="age2">{{applicant.previous3}}</label><br>  
  <input type="radio" id="age3" :name="'radiotwo' + counter" :value="applicant.previous4" required>
  <label for="age3">{{applicant.previous4}}</label><br><br> 
      </div>
      </center>
      <button  @click="getAll" class="w3-btn w3-blue">Submit</button>
     
    </form>
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
          this.currentTutorial = response.data
          console.log(response.data)
          console.log(this.albums[0].description)
          console.log(this.albums.length)
          for (let i = 0; i < this.albums.length; i++) {

            if(this.albums[i].type=="Normal")
            {
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
    getAll() {
  
// var c =  document.getElementsByName("age").value;
// console.log("Value is");console.log(c);
for (let i = 0; i < this.applicants.length; i++) {
      let k = 'normalq'+i;
      let ans = 'normal'+i;
       var desc = document.getElementById(k).value;
       var ansv = document.getElementById(ans).value;
      console.log(desc);
      var dataquestion = {
        surveyid: this.albums[0].surveyid, 
        userid: this.albums[0].userid,
        description: desc,
        type: "Normal",
        options: "none",
        answer: ansv
      }
      
      SurveyService.createAnswer(dataquestion)
        .then(response => {
          // this.submitted = true
          // this.album.id = response.data.id
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
}
for(let j=0;j<this.radioapplicants.length;j++){
   
      let age = 'radiotwo' + j;
var ele = document.getElementsByName(age);
console.log("name:");
              console.log(ele);
                    for(let i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                console.log("Value is");
                console.log(ele[i].value);
                 let questionname =  document.getElementById(age).value;
            var dataquestion = {
        surveyid: this.albums[0].surveyid, 
        userid: this.albums[0].userid,
        description: questionname,
        type: "Radio",
        options: "none",
        answer: ele[i].value
      }
      
      SurveyService.createAnswer(dataquestion)
        .then(response => {
          // this.submitted = true
          // this.album.id = response.data.id
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
                }
      //   }
      //       }
                    }
    }
//     for (let i = 0; i < c; i++) {
//       let k = 'one'+i;
//       var desc = document.getElementById(k).value;
//       console.log();
//       var dataquestion = {
//          surveyid: this.$route.params.id, 
//         userid: this.$route.params.user,
//         description: desc,
//         type: "Normal",
//         options: "none"
//       }
      
//       AlbumService.createQuestion(dataquestion)
//         .then(response => {
//           // this.submitted = true
//           // this.album.id = response.data.id
//          // 
//           console.log(response.data)
//         })
//         .catch(e => {
//           console.log(e)
//         })
// }
//  for (let i = 0; i < rc; i++) {
//       let k = 'radioone'+i;
//       var desc = document.getElementById(k).value;
//       let o1 = 'radiotwo'+i;
//       var op1 = document.getElementById(o1).value;
//       let o2 = 'radiothree'+i;
//       var op2 = document.getElementById(o2).value;
//       let o3 = 'radiofour'+i;
//       var op3 = document.getElementById(o3).value;
//        console.log("User Detals")
//       console.log(this.$route.params.user)
      
// }

this.$router.push({ path: `/surveymanager/${this.albums[0].userid}` })
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
