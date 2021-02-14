import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LetterPaper from '../views/LetterPaper.vue';
import Write from '../views/Write.vue';
import SaveImg from '../views/SaveImg.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/letter-paper',
    name: 'LetterPaper',
    component: LetterPaper,
  },
  {
    path: '/write',
    name: 'Write',
    component: Write,
  },
  {
    path: '/save-img',
    name: 'SaveImg',
    component: SaveImg,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
