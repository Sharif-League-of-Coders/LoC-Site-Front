<template>
  <the-nav-bar />
  <the-home />
  <the-about-event />
  <the-staffs />
  <the-sponsors />
  <the-contact-us />
</template>

<script>
import TheAboutEvent from "./components/TheAboutEvent.vue";
import TheContactUs from "./components/TheContactUs.vue";
import TheHome from "./components/TheHome.vue";
import TheNavBar from "./components/TheNavBar.vue";
import TheSponsors from "./components/TheSponsors.vue";
import TheStaffs from "./components/TheStaffs.vue";

export default {
  name: "App",
  components: {
    TheHome,
    TheAboutEvent,
    TheContactUs,
    TheSponsors,
    TheStaffs,
    TheNavBar,
  },
};
</script>

<style>
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
  border-radius: 50px;
  border: 2px solid #f07008;
  transition: all ease-in-out 0.3s;
  font-weight: 500;
  margin-left: 8px;
  margin-top: 2px;
  line-height: 1;
  font-size: 13px;
  background: transparent;
}
</style>
