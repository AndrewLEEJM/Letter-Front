<template>
  <div id="main">
    <img
      src="../assets/main.jpg"
      alt=""
    >
    <b-button
      id="mainBtn"
      @click="$router.push('/letter-paper')"
    >
      편지 쓰러 가기
    </b-button>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {};
  },
};
</script>
<style>

</style>
