<template>
  <div>
    <b-navbar
      type="dark"
    >
      <div
        class="logo"
        @click="goHome"
      >
        <h1>모두의 편지</h1>
      </div>

      <b-navbar-toggle target="nav-collapse" />

      <!-- <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav>

          <b-nav-item-dropdown
            text="Lang"
            right
          >
            <b-dropdown-item href="#">
              EN
            </b-dropdown-item>
            <b-dropdown-item href="#">
              ES
            </b-dropdown-item>
            <b-dropdown-item href="#">
              RU
            </b-dropdown-item>
            <b-dropdown-item href="#">
              FA
            </b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    goHome() {
      if (this.$route.path !== '/') {
        this.$router.push('/');
      }
    },
  },
};
</script>
