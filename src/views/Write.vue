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
      <span>색상 </span>
      <colour-picker
        v-model="colour"
        :value="colour"
        no-input
        picker="compact"
        style="border: 1px solid; width: 42px; height: 42px; border-radius: 5px"
      />
      <b-button @click="screenshot">
        다운로드
      </b-button>
      <b-button @click="reset">
        초기화
      </b-button>

    </div>
  </div>
</template>

<script>
import ColourPicker from 'vue-colour-picker';

export default {
  name: 'Write',
  components: {
    ColourPicker,
  },
  data() {
    return {
      colour: '#000000',
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
      return `font-family: ${this.selectedFont}; color: ${this.colour}`;
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
