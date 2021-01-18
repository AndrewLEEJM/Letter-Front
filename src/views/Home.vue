<template>
  <div class="letter_container">
    <div class="letter_back">
      <p v-html="letterText">
        {{ letterText }}
      </p>
    </div>
    <div class="letter_write">
      <b-form-textarea
        id="textarea-rows"
        v-model="letter"
        rows="14"
        max-rows="14"
        placeholder="Enter something..."
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      letter: '',
    };
  },
  computed: {
    letterText() {
      return this.letter.replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
  },
};
</script>
<style>
.letter_container{
  margin-top: 60px;
}
.letter_back{
  width: 500px;
  height: 700px;
  background-image: url('../assets/images/letter-1.jpg');
  display: inline-block
}
.letter_write{
  width: 500px;
  height: 700px;
  display: inline-block;
  float: right;
  margin-top: 70px;
}
.letter_back > p{
  position: relative;
  top: 105px;
  left: 80px;
  width: 347px;
  height: 504px;
  overflow: hidden;
  line-height: 2.25;
}
</style>
