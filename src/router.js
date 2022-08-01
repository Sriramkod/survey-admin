import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from '@/components/HelloWorld.vue'
import Register from '@/components/Register.vue'
import Login from '@/components/Login.vue'
import AddAlbum from '@/components/AddAlbum.vue'
import AlbumList from '@/components/AlbumList.vue'
import ArtistList from '@/components/ArtistList.vue'
import Album from '@/components/Album.vue'
import Artist from '@/components/Artist.vue'
import AlbumSong from '@/components/AlbumSong.vue'
import AddSong from '@/components/AddSong.vue'
import Song from '@/components/Song.vue'
import Test from '@/components/Test.vue'
import Admin from '@/components/Admin.vue'
import SurveyManager from '@/components/SurveyManger.vue'
import AddSurvey from '@/components/AddSurvey.vue'
import UserSurvey from '@/components/UserSurvey.vue'
import SurveyQuestion from '@/components/SurveyQuestion.vue'
import EditSurveyQuestion from '@/components/EditSurveyQuestion.vue'
import SubmitAnswer from '@/components/SubmitAnswer.vue'
const routes =  [
  {
    path: "/edit/:id",
    name: "edit",
    component: () => import("./views/EditTutorial.vue"),
    props: true
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./views/AddTutorial.vue")
  },
  {
    path: "/view",
    name: "view",
    component: () => import("./views/ViewTutorial.vue"),
    props: true
  },
  {
    path: "/addLesson",
    name: "addLesson",
    component: () => import("./views/AddLesson.vue"),
    props: true
  },
  {
    path: "/editLesson",
    name: "editLesson",
    component: () => import("./views/EditLesson.vue"),
    props: true
  },
  {
    path: '/',
    name: 'root',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login/',
    name: 'login',
    component: Login
  },
  {
    path: '/add/:id',
    name: 'add',
    component: AddAlbum
  }, {
    path: '/albums',
    name: 'albums',
    component: AlbumList
  },
  {
    path: '/artists',
    name: 'artists',
    component: ArtistList
  },
  {
    path: '/artists/:id',
    name: 'artist-details',
    component: Artist
  },
  {
    path: '/albums/:id',
    name: 'album-details',
    component: Album
  },
  {
    path: '/songs/:id',
    name: 'album-specific-song-details',
    component: AlbumSong
  },
  {
    path: '/addsong/:id',
    name: 'album-add-song',
    component: AddSong
  },
  {
    path: '/viewsong/:id',
    name: 'song-details',
    component: Song
  },
  {
    path: '/test/:id',
    name: 'test',
    component: Test
  },
  {
    path: '/admin',
    name: 'admin-view',
    component: Admin
  },
  //suvery manager page, after logging in
  {
    path: '/surveymanager/:id',
    name: 'view of survey manager',
    component: SurveyManager
  },
  //new survey
  {
    path: '/new-survey/:id',
    name: 'new survey',
    component: AddSurvey
  },
  {
    path: '/survey-question/:id',
    name: 'Add question',
    component: Test
  },
  {
    path: '/user-survey/:id',
    name: 'user-survey',
    component: UserSurvey
  },
  {
    path: '/view-question/:id',
    name: 'survey-specific-question-details',
    component: SurveyQuestion
  },
  //edit questions...
  {
    path: '/edit-this-survey/:id',
    name: 'survey-edit-specific-question',
    component: EditSurveyQuestion
  },
  {
    path: '/survey-feed/:id',
    name: 'survey-feed-specific-survey',
    component: SubmitAnswer
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;