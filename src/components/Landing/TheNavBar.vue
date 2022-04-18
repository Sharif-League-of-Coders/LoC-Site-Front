<template>
  <div class="nav-bar-container">
    <div class="navigation-area">
      <div class="logo">
        <v-img
          :src="require('../../assets/logo.svg')"
          width="105px"
          height="62.56px"
        />
      </div>
      <div
        v-for="item in [
          'معرفی',
          'جوایز',
          'زمان‌بندی',
          'تیم برگزاری',
          'حامی',
          'سوالات متداول',
          'ارتباط با ما',
        ]"
        :key="item"
        class="navigation-area-button-container"
      >
        <v-btn
          width="min-content"
          depressed
          color="#fff"
          class="navigation-area-button"
          >{{ item }}</v-btn
        >
        <v-divider vertical class="divider" />
      </div>
    </div>
    <div class="sign-up-area">
      <v-btn
        width="7.5vw"
        height="54px"
        color="#ffffff"
        outlined
        class="register"
        >ثبت نام</v-btn
      >
      <v-btn outlined width="7.5vw" height="54px" color="#000" class="login"
        >ورود</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar-container {
  width: 100%;
  display: flex;
  direction: rtl;
  justify-content: space-between;
  box-sizing: border-box;
  flex-direction: row;
}

.navigation-area {
  display: flex;
  justify-content: space-between;
}

.navigation-area > .logo > img {
  width: 105px;
  height: 63px;
}

.navigation-area-button-container {
  height: 54px;
  display: flex;
  align-items: center;
}

.v-btn:not(.v-btn--round).v-size--default {
  width: min-content;
  padding: 0 10px;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 300;
  line-height: 50px;
}

.sign-up-area {
  display: flex;
}

.sign-up-area > * {
  width: 192px;
  height: 54px;
  color: white;

  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 50px;

  margin-left: 23px;
}

.register {
  background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);
}

.divider {
  z-index: 1000;
  margin-top: 12px;
  min-height: 0;
  max-height: calc(100% - 24px);
}

.login {
  background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);
  -webkit-background-clip: text;
  background-clip: text;
}
</style>