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
    component: HelloWorld
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
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
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/admin',
    name: 'admin-view',
    component: Admin
  }
];
const router = createRouter({
  base: process.env.NODE_ENV === 'development' ? '/' : '/album-frontend/',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;