<template>
  <div id="staffs">
    <div class="container">
      <h1>تیم برگزاری رویداد</h1>
      <v-carousel hide-delimiters>
        <div>
          <div>
            <div></div>
            <div>پارسا نشائی</div>
            <div>نائب دبیر</div>
          </div>
        </div>
      </v-carousel>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#staffs {
  direction: rtl;
  padding: 40px;
  display: flex;
  justify-content: center;
  background: url("../../assets/Staff.svg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  height: 60vw;
  width: 100vw;
}
.container > h1 {
  font-style: normal;
  font-weight: 900;
  font-size: 90px;
  line-height: 200%;

  letter-spacing: 0.015em;

  background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>