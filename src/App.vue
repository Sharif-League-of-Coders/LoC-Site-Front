<template>
  <the-landing-page v-if="page === 'landing'" />
  <the-registeration-page v-else-if="page === 'registeration'" />
  <the-staffs-page v-else-if="page === 'staffs'" />
  <the-dashboard-page v-else />
</template>

<script>
import TheStaffsPage from "./components/TheStaffsPage.vue";
import TheDashboardPage from "./components/TheDashboardPage.vue";
import TheLandingPage from "./components/TheLandingPage.vue";
import TheRegisterationPage from "./components/TheRegisterationPage.vue";

export default {
  name: "App",
  components: {
    TheLandingPage,
    TheRegisterationPage,
    TheDashboardPage,
    TheStaffsPage,
  },
  data: function () {
    return {
      page: "landing",
    };
  },
};
</script>

<style>
@font-face {
  font-family: "IRANSans";
  src: url("./assets/Sans.ttf"); /* File to be stored at your site */
}
html {
  overflow: hidden;
}
body {
  padding: 0;
  margin: 0;
  font-family: IRANSans, sans-serif;
  width: 100%;
  overflow: hidden;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
}
</style>