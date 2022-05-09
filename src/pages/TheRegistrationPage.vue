<template>
  <v-container class="register-box">
    <v-card max-width="385px" class="mx-auto mt-12">
      <v-tabs grow centered hide-slider v-model="tab" style="overflow: visible">
        <v-tab class="register-tab text-h6" active-class="active-tab" ripple="false">ورود</v-tab>
        <v-tab class="register-tab text-h6" active-class="active-tab" ripple="false">ثبت نام</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <Login/>
        <register/>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
import Register from "../components/registration/Register"
import Login from "../components/registration/Login"

export default {
  name: "the-registration-page",
  components: {
    Register,
    Login
  },
  data() {
    return {
      tab: 0,
    }
  }
};
</script>

<style lang="scss">
.register-box{
  height: 100%;
  width: 100%;
  background-image: url(../assets/Register-now.svg);
  background-size: 100% 70%;
}
.active-tab {
  background: transparent !important;
}

.register-tab {
  &:hover, &:active, &:focus {
    background: transparent !important;
  }
}

.register-btn, .login-btn {
  background-image: linear-gradient(to right, #00C4EF, #002B99);
}
</style>