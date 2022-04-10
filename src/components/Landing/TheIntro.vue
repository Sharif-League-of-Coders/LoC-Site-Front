<template>
  <div id="intro">
    <div class="container">
      <div class="title-container">
        <h1 class="title">League</h1>
        <h6 class="sub-title">of</h6>
        <h1 class="title">Coders</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-home",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.container {
  background: url(/public/intro-bg.svg);
  background-size: cover;
  color: black;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0.23em;
  text-transform: uppercase;
  font-style: normal;
}

.title {
  font-weight: 700;
  font-size: 180px;
  text-align: center;
  margin: 0;
  color: #000000;
}
.sub-title {
  font-weight: 300;
  font-size: 64px;
  text-align: center;
  margin: 0;

  color: #000000;
}
strong {
  color: #f07008 !important;
}
</style>
