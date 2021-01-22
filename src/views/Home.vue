<template>
  <b-container
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
