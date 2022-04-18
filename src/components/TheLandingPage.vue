<template>
  <div class="container">
    <the-intro />
    <the-about-event />
    <the-prizes />
    <the-timeline />
    <the-sponsors />
    <the-staffs />
    <the-register-now />
    <the-f-a-q />
    <the-contact-us />
  </div>
</template>

<script>
import TheIntro from "./Landing/TheIntro.vue";
import TheAboutEvent from "./Landing/TheAboutEvent.vue";
import TheContactUs from "./Landing/TheContactUs.vue";
import TheSponsors from "./Landing/TheSponsors.vue";
import TheStaffs from "./Landing/TheStaffs.vue";
import ThePrizes from "./Landing/ThePrizes.vue";
import TheTimeline from "./Landing/TheTimeline.vue";
import TheRegisterNow from "./Landing/TheRegisterNow.vue";
import TheFAQ from "./Landing/TheFAQ.vue";
export default {
  name: "the-landing-page",
  components: {
    TheIntro,
    TheAboutEvent,
    TheStaffs,
    TheSponsors,
    TheContactUs,
    ThePrizes,
    TheTimeline,
    TheRegisterNow,
    TheFAQ,
  },
};
</script>

<style scoped>
.container {
  scroll-behavior: smooth;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
}
</style>