<template>
  <b-container
    id="main"
    fluid
    class="p-4"
  >
    <b-button @click="$router.push('/letter-paper')">
      편지지 선택
    </b-button>
  </b-container>
</template>

<script>

export default {
  name: 'Home',

  data() {
    return {

    };
  },
};
</script>
<style>
#main{
  background-image: url('../assets/main.jpg');
  height: 1000px;
   background-size: cover;
}
</style>
