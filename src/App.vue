<template>
  <the-landing-page v-if="page === 'landing'" />
  <the-registration-page v-else-if="page === 'registration'" />
  <the-staffs-page v-else-if="page === 'staffs'" />
  <the-dashboard-page v-else />
</template>

<script>
import TheStaffsPage from "./components/TheStaffsPage.vue";
import TheDashboardPage from "./components/TheDashboardPage.vue";
import TheLandingPage from "./components/TheLandingPage.vue";
import TheRegistrationPage from "./components/TheRegistrationPage.vue";

// 120px => 5vw

export default {
  name: "App",
  components: {
    TheLandingPage,
    TheRegistrationPage,
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
  font-family: "IRANSansBold";
  src: url("./assets/IRANSans_Black.ttf"); /* File to be stored at your site */
}
@font-face {
  font-family: "IRANSansLight";
  src: url("./assets/IRANSans_Light.ttf"); /* File to be stored at your site */
}
html {
  overflow: hidden;
}
body {
  padding: 0;
  margin: 0;
  font-family: IRANSansBold, sans-serif;
  width: 100%;
  overflow: hidden;
}
</style>