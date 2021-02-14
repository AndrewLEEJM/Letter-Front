<template>
  <b-container
    fluid
    class="p-4"
  >
    <div id="explain">
      <img src="../assets/save.jpg">
    </div>
    <div class="letter_img">
      <img
        :src="output"
        class="letter_img"
      >
      <v-btn
        block
        class="writeBtn"
        color="warning"
        elevation="2"
        @click="$router.push('/')"
      >메인화면</v-btn>
    </div>
  </b-container>
</template>

<script>
export default {
  name: 'SaveImg',
  data() {
    return {
      output: '',
    };
  },
  created() {
    if (this.$route.params.output) {
      this.output = this.$route.params.output;
    } else {
      this.$router.push('/');
    }
  },
};
</script>

<style>

</style>
