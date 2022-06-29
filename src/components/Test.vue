<template>
  <div id="visa">
    <h1>Add question to the survery</h1>
    <form>
      <button @click="addVisa">Add new question</button>
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
      <button @click="getAll">Submit</button>
    </form>
</div>
</template>

<script>
var c =1;
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
    deleteVisa(counter){
        c=c-1;
      this.applicants.splice(counter,1);
},
getAll() {
    
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
</style>
