<template>
  <div id="app">
    <div id="nav">
      <nav-bar />
    </div>
    <b-container fluid="md">
      <router-view />
    </b-container>
  </div>
</template>
<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};
</script>
