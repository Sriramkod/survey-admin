<template>
<div class="w3-container">
    <center><h3 class="w3-container w3-blue" style="width: 75%;"> Welcome to Survey-Feed</h3></center>
    <br><br>
<center>
<div class="w3-card-4 w3-border w3-grey" style="width: 50%;">
  
       <div  class="w3-container w3-green" style="width: 35%;">

 <h4> Create a new Survey</h4>
       </div>
       <br>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label class="error w3-text-white" for="title">Survey Name</label>
        <input
          type="text"
          class="form-control w3-input w3-border w3-blue" style="width: 150%;"
          id="title"
          required
          v-model="survey.title"
          name="title"
        />
      </div>
<br>
      <div class="form-group">
        <label for="description">Some Info about the Survey</label>
        <textarea
           class="form-control w3-input w3-border w3-blue" style="width: 150%;"
          id="description"
          required
          v-model="survey.description"
          name="description"
        ></textarea>
      </div>
<br>
      <button @click="saveSurvey" class="w3-btn w3-red">Create Survey</button>
    <br>
    </div>

    <div v-else>
      <h5>A New Survey is Initiated...</h5>
      <!-- <button class="w3-btn w3-blue" @click="newSurvey">Create One more</button> -->
      <!-- <router-link :to="'/test/' + this.survey.id">
      <button class="w3-btn w3-blue" >Add Questions to the Survey</button>
      </router-link> -->

      <router-link :to="{ name: 'test', params: { id: this.survey.id, user: this.$route.params.id }}">
      <button class="w3-btn w3-red" >Add Questions to the Survey</button>
      </router-link>
    </div>
    <br>
  </div>
  
  </div></center>
</div>
</template>

<script>
import SurveyService from '../services/SurveyService'
export default {
  name: 'add-survey',
  data () {
    return {
      survey: {
        id: null,
        title: '',
        description: ''
      },
      submitted: false
    }
  },
  methods: {
    saveSurvey () {
      var datasong = {
        title: this.survey.title,
        description: this.survey.description,
        surveymanager: this.$route.params.id,
      }
      SurveyService.createSurvey(datasong)
        .then(response => {
          this.submitted = true
          this.survey.id = response.data.id
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    newSurvey () {
      this.submitted = false
      this.survey = {}
    },
    addQuestion () {
        var id = this.survey.id
        this.$router.push({ path: `/survey-question/${id}` })
    }
  }
}
</script>

<style>
@import "https://www.w3schools.com/w3css/4/w3.css";
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
