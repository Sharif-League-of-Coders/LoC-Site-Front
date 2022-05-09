<template>
  <div class="container">
    <div>
      <div>همین حالا</div>
      <div>ثبت نام</div>
      <div>کنید</div>
    </div>
    <v-btn> ثبت نام </v-btn>
  </div>
</template>

<script>
export default {
  name: "the-register-now",
};
</script>

<style scoped>
.container {
  background: url("../../assets/Register-now.svg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  height: 60vw;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>