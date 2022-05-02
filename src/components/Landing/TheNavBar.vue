<template>
  <div class="nav-bar-container">
    <div class="navigation-area">
      <div class="logo">
        <v-img
          :src="require('../../assets/logo.svg')"
          height="2.5vw"
          width="4.5vw"
        />
      </div>
      <div class="navigation-area-button-container">
        <v-btn
          href="#about-event"
          class="navigation-area-button"
          color="#fff"
          depressed
          width="min-content"
          >{{ 'معرفی' }}
        </v-btn>
        <v-divider class="divider" vertical />
        <v-btn
          href="#sponsor"
          class="navigation-area-button"
          color="#fff"
          depressed
          width="min-content"
          >{{ 'حامی' }}
        </v-btn>
        <v-divider class="divider" vertical />
        <v-btn
          href="#faq"
          class="navigation-area-button"
          color="#fff"
          depressed
          width="min-content"
          >{{ 'سوالات متداول' }}
        </v-btn>
        <v-divider class="divider" vertical />
        <v-btn
          href="#contact-us"
          class="navigation-area-button"
          color="#fff"
          depressed
          width="min-content"
          >{{ 'ارتباط با ما' }}
        </v-btn>
        <v-divider class="divider" vertical />
      </div>
    </div>
    <!-- ثبت نام -->
    <div class="sign-up-area">
      <v-btn
        class="register"
        color="#ffffff"
        height="2.25vw"
        outlined
        width="17vw"
        disabled
        >به زودی...
      </v-btn>
      <!--      <v-btn class="login" color="#000" height="2.25vw" outlined width="7.5vw"-->
      <!--        >ورود-->
      <!--      </v-btn>-->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  font-family: IRANSansLight, sans-serif !important;
  letter-spacing: 0 !important;
}

.nav-bar-container {
  width: 100%;
  display: flex;
  direction: rtl;
  justify-content: space-between;
  box-sizing: border-box;
  flex-direction: row;
  margin-top: 2.5vw;
  padding-right: 2.5vw;
}

.navigation-area {
  display: flex;
  justify-content: space-between;
}

.navigation-area > .logo > img {
  width: 4.5vw;
  height: 2.5vw;
}

.navigation-area-button-container {
  height: 2.25vw;
  display: flex;
  align-items: center;
}

.v-btn:not(.v-btn--round).v-size--default {
  width: min-content;
  padding: 0 0.5vw;
  font-size: 1.5vw;
  font-style: normal;
  font-weight: 300;
  line-height: 2vw;
}

.sign-up-area {
  display: flex;
}

.sign-up-area > .v-btn {
  border-width: 0;
}

.sign-up-area > * {
  width: 8vw;
  height: 2.25vw;
  color: white;

  border-radius: 0.5vw;

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 300;
  font-size: 1.4vw;
  line-height: 2vw;

  margin-left: 1vw;
}

.register {
  /*background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);*/
  color: black !important;
}

.divider {
  z-index: 1000;
  margin-top: 0.5vw;
  min-height: 0;
  max-height: calc(100% - 1vw);
}

.login {
  background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);
  -webkit-background-clip: text;
  background-clip: text;
}
</style>
