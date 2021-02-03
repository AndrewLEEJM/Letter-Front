<template>
  <div>

    <b-container
      fluid
      class="p-4"
    >
      <div id="explain">
        <img src="../assets/write.jpg">
      </div>
      <div class="letter_container">
        <div
          ref="shotMe"
          class="letter_back"
          :style="{
            'background-image':
              'url(' + require(`../assets/images/${backImg}`) + ')',
          }"
        >
          <div>
            <p
              :style="textFont"
              v-html="letterText"
            >
              {{ letterText }}
            </p>
          </div>
        </div>
        <div class="letter_write">
          <b-form-textarea
            id="textarea-rows"
            v-model="letter"
            rows="14"
            max-rows="14"
            placeholder="Enter something..."
          />
          <br>
          <span>글꼴 </span>
          <b-form-select
            v-model="selectedFont"
            class="mb-3"
          >
            <b-form-select-option
              v-for="(font, idx) in allFont"
              :key="idx"
              :value="font.val"
              :style="font.textStyle"
            >
              {{ font.name }}
            </b-form-select-option>
          </b-form-select>
          <span>색상 </span>
          <v-color-picker
            v-model="colour"
            dot-size="25"
            swatches-max-height="200"
            hide-inputs
          />

        </div>
      </div>
    </b-container>
    <div
      class="p-4 container-fluid"
      style="width: 60%;"
    >
      <v-btn
        block
        color="primary"
        class="writeBtn"
        elevation="2"
        @click="screenshot"
      >다운로드</v-btn>
      <v-btn
        block
        class="writeBtn"
        color="warning"
        elevation="2"
        @click="$router.back()"
      >편지지 선택</v-btn>
      <v-btn
        block
        class="writeBtn"
        color="error"
        elevation="2"
        @click="reset"
      >초기화</v-btn>
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
      colour: '#000000',
      letter: '',
      selectedFont: '',
      selectedFontSize: 10,
      allFont: [
        { name: '기본', val: '', textStyle: '' },
        {
          name: '배민 주아체',
          val: 'BMJUA',
          textStyle: 'font-family: "BMJUA"',
        },
        {
          name: '귀여움 기본',
          val: 'CuteFont-Regular',
          textStyle: 'font-family: "CuteFont-Regular',
        },
        {
          name: '나눔 브러쉬',
          val: 'NanumBrushScript-Regular',
          textStyle: 'NanumBrushScript-Regular',
        },
        {
          name: '나눔 펜',
          val: 'NanumPenScript-Regular',
          textStyle: 'font-family: "NanumPenScript-Regular"',
        },
        {
          name: '하루체',
          val: 'SingleDay-Regular',
          textStyle: 'font-family: "SingleDay-Regular"',
        },
      ],
      backImg: '',
    };
  },
  computed: {
    letterText() {
      return this.letter.replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
    textFont() {
      return `font-family: ${this.selectedFont}; color: ${this.colour};`;
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
    reset() {
      this.letter = '';
      this.selectedFont = '';
      this.colour = '#000000';
    },
  },
};
</script>
