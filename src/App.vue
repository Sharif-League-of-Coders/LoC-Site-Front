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
  font-family: "Avenir Next";
  src: url("/src/assets/AvenirNextLTPro-Regular.otf"); /* File to be stored at your site */
}
html {
  scroll-behavior: smooth;
}
body {
  padding: 0;
  margin: 0;
  font-family: Vazirmatn, sans-serif;
  width: 100%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
button {
  font-family: Vazirmatn, sans-serif;

  color: #fff;
  padding: 7px 22px;
  border-radius: 10px;
  transition: all ease-in-out 0.3s;
  font-weight: 500;
  margin-left: 8px;
  margin-top: 2px;
  line-height: 1;
  font-size: 13px;
  background: transparent;
}
</style>
