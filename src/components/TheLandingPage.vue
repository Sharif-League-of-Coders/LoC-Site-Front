<template>
  <the-nav-bar />
  <the-intro />
  <the-about-event />
  <the-staffs />
  <the-sponsors />
  <the-contact-us />
</template>

<script>
import TheIntro from "./Landing/TheIntro.vue";
import TheAboutEvent from "./Landing/TheAboutEvent.vue";
import TheContactUs from "./Landing/TheContactUs.vue";
import TheNavBar from "./Landing/TheNavBar.vue";
import TheSponsors from "./Landing/TheSponsors.vue";
import TheStaffs from "./Landing/TheStaffs.vue";
export default {
  name: "the-landing-page",
  components: {
    TheNavBar,
    TheIntro,
    TheAboutEvent,
    TheStaffs,
    TheSponsors,
    TheContactUs,
  },
};
</script>

<style>
</style>