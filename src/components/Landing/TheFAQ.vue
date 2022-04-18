<template>
  <div class="container">
    <h1>سوالات متداول</h1>
  </div>
</template>

<script>
export default {
  name: "the-f-a-q",
};
</script>

<style scoped>
.container {
  background: url("../../assets/FAQ.svg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  height: 60vw;
  width: 100vw;
  display: flex;
  justify-content: center;
}
.container > h1 {
  font-style: normal;
  font-weight: 900;
  font-size: 90px;
  line-height: 118.19%;

  letter-spacing: 0.015em;

  background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>