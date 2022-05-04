<template>
  <div id="sponsor">
    <div class="container">
      <img :src="require('../../assets/sponsor-logo.svg')" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#sponsor {
  direction: rtl;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/Sponser.svg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  height: 60vw;
  width: 100vw;
}

.container > img {
  width: 27.5vw;
}

@media screen and (max-width: 750px) {
  #sponsor {
    background-image: url("../../assets/phone/sponsor.svg");
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    height: 100vw;
    padding: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
  }

  .container > img {
    width: 57vw;
  }
}
</style>
