<template>
  <div class="intro">
    <the-nav-bar />

    <div class="container">
      <div class="title-container">
        <h1 class="title">League</h1>
        <h6 class="sub-title">of</h6>
        <h1 class="title">Coders</h1>
      </div>
      <div class="logo-container">
        <a href="https://ssc.ce.sharif.edu">
          <img :src="require('../../assets/ssc-logo.svg')" />
        </a>
        <a href="https://locsharif.com">
          <img :src="require('../../assets/logo.svg')" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import TheNavBar from "./TheNavBar.vue";

export default {
  components: { TheNavBar },
  name: "the-header",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.intro {
  background-image: url("../../assets/img.png");
  background-size: 100vw auto;
  background-position: top center;
  background-repeat: no-repeat;
  height: 60vw;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5vw 1.5vw 25vw;
  box-sizing: border-box;
  position: relative;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8.5vw;
}

.logo-container {
  height: 5vw;
  width: 25vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-container > a > img {
  max-width: 10vw;
  max-height: 5vw;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14vw;
  margin-bottom: 2.5vw;
}

.title-container > h1 {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 5vw !important;
  line-height: 5vw !important;
  letter-spacing: 0.415em !important;

  text-align: center;
  text-transform: uppercase;

  color: #323232;
}

.title-container > h6 {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 2.5vw;
  line-height: 5vw;

  text-align: center;
  letter-spacing: 0.23em;
  text-transform: uppercase;

  color: #323232;
}

@media screen and (max-width: 750px) {
  .intro {
    background-image: url("../../assets/phone/FV.png");
    height: 140vw;
  }

  .title-container > h1 {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 12vw !important;
    line-height: 11vw !important;
    letter-spacing: 0.415em !important;

    text-align: center;
    text-transform: uppercase;

    color: #323232;
  }

  .title-container > h6 {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 100;
    font-size: 5vw;
    line-height: 10vw;

    text-align: center;
    letter-spacing: 0.23em;
    text-transform: uppercase;

    color: #323232;
  }
  .title-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 14vw;
    margin-bottom: 20vw;
  }

  .logo-container {
    height: 12vw;
    width: 50vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-container > a > img {
    max-width: 24vw;
    max-height: 12vw;
  }
}
</style>
