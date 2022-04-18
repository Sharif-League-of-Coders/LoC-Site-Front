<template>
  <div id="sponsors">
    <div class="container">
      <v-img :src="require('../../assets/sponsor-logo.svg')" width="27.5vw" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#sponsors {
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
</style>