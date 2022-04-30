<template>
  <div class="container">
    <h1>زمان‌بندی</h1>
  </div>
</template>

<script>
export default {
  name: "the-timeline",
};
</script>

<style scoped>
.container {
  background-size: 100vw auto;
  background-position: top center;
  background-repeat: no-repeat;
  background: url("../../assets/Timeline.svg");
  height: 60vw;
  width: 100vw;

  display: flex;
  justify-content: center;
}
.container > h1 {
  font-style: normal;
  font-weight: 900;
  font-size: 3.75vw;
  line-height: 170%;

  letter-spacing: 0.015em;

  background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>