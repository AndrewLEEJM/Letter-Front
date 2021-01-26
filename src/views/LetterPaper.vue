<template>
  <b-container
    fluid
    class="p-4 paper"
  >
    <div id="explain">
      <img
        src="../assets/choice-paper.jpg"
      >
    </div>
    <a
      v-for="paper in imgList"
      :key="paper"
      @click="$router.push({name: 'Write', params:{imgName: paper}})"
    >
      <b-img
        class="paper"
        thumbnail
        :src="require(`../assets/images/${paper}`)"
      />
    </a>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'LetterPaper',
  computed: {
    ...mapGetters({
      imgList: 'imgList',
    }),
  },
  created() {
    console.log(this.imgList);
  },
};
</script>
