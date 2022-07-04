<template>
  <div id="visa">
    <h1>Add question to the survery</h1>
    <form>
      <button @click="addVisa">Add new question</button>
      <button @click="addRadio">Add new Radio question</button>
      <button @click="getAll">Submit All</button>
      <br>
      <div class="previous"
      v-for="(applicant, counter) in applicants"
      v-bind:key="counter">
        <span @click="deleteVisa(counter)">x</span>
        <label for="duration">{{counter+1}}. Previous Visa:</label>
        <input type="text" v-model="applicant.previous" :id="'one' + counter" required>
        <label for="duration">Year of expiration:</label>
        <input type="text" v-model="applicant.expiration" required> 
      </div>
      <div class="radioprevious"
      v-for="(applicant, counter) in radioapplicants"
      v-bind:key="counter">
        <span @click="deleteRadio(counter)">x</span>
        <label for="rduration">{{counter+1}}. Previous Visa:</label>
        <input type="text" v-model="applicant.previous1" :id="'radioone' + counter" required>
        <label for="rduration">Year of expiration:</label>
        <input type="text" v-model="applicant.previous2" :id="'radiotwo' + counter" required>
        <label for="rduration">Year of expiration:</label>
        <input type="text" v-model="applicant.previous3" :id="'radiothree' + counter" required>
        <label for="rduration">Year of expiration:</label>
        <input type="text" v-model="applicant.previous4" :id="'radiofour' + counter" required> 
      </div>
      <button @click="getAll">Submit</button>
    </form>
</div>
</template>

<script>
import AlbumService from '../services/AlbumService'
var c =1;
var rc = 1;
export default {
  name: 'Test',
  props: {
    msg: String
  },
  data(){
    return {
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
     ]
    }
  },
  methods : {
    addVisa(){
    c=c+1;
    this.applicants.push({
        previous:'',
        expiration: ''
      })
      console.log(document.getElementById('one0').value);
    //   console.log(document.getElementById('one1').value);
    //     console.log(document.getElementById('one2').value);
      console.log(c)
    },
    addRadio(){
      rc = rc + 1;
      this.radioapplicants.push({
        previous1:'',
        previous2: '',
        previous3: '',
        previous4: ''
      })
      console.log(document.getElementById('radioone1').value);
    },
    deleteVisa(counter){
        c=c-1;
      this.applicants.splice(counter,1);
},
  deleteRadio(counter){
    rc = rc -1;
      this.radioapplicants.splice(counter,1);
},
getAll() {
  
    for (let i = 0; i < c; i++) {
      let k = 'one'+i;
      var desc = document.getElementById(k).value;
      console.log();
      var dataquestion = {
        surveyid: "1", 
        userid: "2",
        description: desc,
        type: "Normal",
        options: "none"
      }
      
      AlbumService.createQuestion(dataquestion)
        .then(response => {
          // this.submitted = true
          // this.album.id = response.data.id
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
}
 for (let i = 0; i < rc; i++) {
      let k = 'radioone'+i;
      var desc = document.getElementById(k).value;
      let o1 = 'radiotwo'+i;
      var op1 = document.getElementById(o1).value;
      let o2 = 'radiothree'+i;
      var op2 = document.getElementById(o2).value;
      let o3 = 'radiofour'+i;
      var op3 = document.getElementById(o3).value;
      console.log();
      var dataquestion = {
        surveyid: "3", 
        userid: "4",
        description: desc,
        type: "Radio",
        options: op1+","+op2+","+op3
      }
      
      AlbumService.createQuestion(dataquestion)
        .then(response => {
          // this.submitted = true
          // this.album.id = response.data.id
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
}
}

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#visa {
  margin: 20px auto;
  max-width: 700px;
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
