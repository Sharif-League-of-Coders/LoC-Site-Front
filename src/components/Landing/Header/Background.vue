<template>
  <div class="header-background-container">
    <img src="../../../assets/desktop/header/right-blue-triangle.svg" alt="">
    <img src="../../../assets/desktop/header/purple-triangle.svg" alt="">
    <img src="../../../assets/desktop/header/pink-triangle.svg" alt="">
    <img src="../../../assets/desktop/header/left-blue-triangle.svg" alt="">

  </div>

</template>

<script>
export default {
  name: "header-background"
}
</script>

<style scoped>

.header-background-container {
  display: flex;
  direction: rtl;
  max-width: 100vw;
  width: 100vw;
  height: 100%;
  position: relative;
}

.header-background-container > img {
  position: absolute;
}

.header-background-container > img:first-child{
  right: 0;
}
.header-background-container > img:nth-child(2){
  left: 0;
}

.header-background-container > img:nth-child(3){
  right: 12px;
}
.header-background-container > img:last-child{
  left: 0;
}

</style>