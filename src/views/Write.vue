<template>
  <div class="letter_container">
    <div
      ref="shotMe"
      class="letter_back"
      :style="{
        'background-image': 'url(' + require(`../assets/images/${backImg}`) + ')' }"
    >
      <p
        :style="textFont"
        v-html="letterText"
      >
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
      <span>글꼴 </span>
      <b-form-select
        v-model="selectedFont"
        class="mb-3"
      >
        <b-form-select-option
          v-for="(font,idx) in allFont"
          :key="idx"
          :value="font.val"
          :style="font.textStyle"
        >
          {{ font.name }}
        </b-form-select-option>
      </b-form-select>
      <b-button @click="screenshot">
        다운로드
      </b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Write',
  components: {
  },
  data() {
    return {
      letter: '',
      selectedFont: '',
      selectedFontSize: 10,
      allFont: [
        { name: '기본', val: '', textStyle: '' },
        { name: '배민 주아체', val: 'BMJUA', textStyle: 'font-family: "BMJUA"' },
        { name: '귀여움 기본', val: 'CuteFont-Regular', textStyle: 'font-family: "CuteFont-Regular' },
        { name: '나눔 브러쉬', val: 'NanumBrushScript-Regular', textStyle: 'NanumBrushScript-Regular' },
        { name: '나눔 펜', val: 'NanumPenScript-Regular', textStyle: 'font-family: "NanumPenScript-Regular"' },
        { name: '하루체', val: 'SingleDay-Regular', textStyle: 'font-family: "SingleDay-Regular"' },
      ],
      backImg: '',
    };
  },
  computed: {
    letterText() {
      return this.letter.replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
    textFont() {
      return `font-family: ${this.selectedFont};`;
    },
  },
  created() {
    this.backImg = this.$route.params.imgName;
  },
  methods: {
    async screenshot() {
      const el = this.$refs.shotMe;
      // add option type to get the image version
      // if not provided the promise will return
      // the canvas.
      const options = {
        type: 'dataURL',
      };
      const output = await this.$html2canvas(el, options);

      const a = document.createElement('a');
      a.setAttribute('download', 'AllOfLetter.png');
      a.setAttribute('href', output);
      a.click();
    },
  },
};
</script>
<style>
@font-face {
  font-family: 'BMJUA';
  src: url('../assets/fonts/BMJUA.ttf');
}
@font-face {
  font-family: 'CuteFont-Regular';
  src: url('../assets/fonts/CuteFont-Regular.ttf');
}
@font-face {
  font-family: 'NanumBrushScript-Regular';
  src: url('../assets/fonts/NanumBrushScript-Regular.ttf');
}
@font-face {
  font-family: 'NanumPenScript-Regular';
  src: url('../assets/fonts/NanumPenScript-Regular.ttf');
}
@font-face {
  font-family: 'SingleDay-Regular';
  src: url('../assets/fonts/SingleDay-Regular.ttf');
}
.letter_container{
  margin-top: 60px;
  display: flex;
}
.letter_back{
  width: 500px;
  min-width: 500px;
  height: 700px;
  /* background-image: url('../assets/images/letter-1.jpg') */
}
.letter_write{
  width: 500px;
  min-width: 200px;
  height: 700px;
  margin-top: 70px;
  margin-left: 130px;
}
.letter_back > p{
  position: relative;
  top: 105px;
  left: 75px;
  width: 347px;
  height: 504px;
  overflow: hidden;
  line-height: 2.25;
}
@media screen and (max-width: 800px){
  .letter_container{
    margin-top: 60px;
    display: block;
  }
  .letter_back{
    width: 400px;
    min-width: 400px;
    height: 560px;
    background-size: contain;
    margin: 0 auto;
  }
  .letter_write{
    width: 400px;
    min-width: 200px;
    height: 700px;
    margin: 30px auto;
  }
  .letter_back > p{
    position: relative;
    top: 82px;
    left: 58px;
    width: 290px;
    height: 504px;
    overflow: hidden;
    line-height: 2.08;
    font-size: 14px;
    color: rgba(61, 59, 59, 0.87);
  }
}
</style>
