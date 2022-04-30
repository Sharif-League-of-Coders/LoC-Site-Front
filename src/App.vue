<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      page: "landing",
    };
  },
};
</script>

<style>
@font-face {
  font-family: "IRANSansBold";
  src: url("./assets/IRANSans_Black.ttf"); /* File to be stored at your site */
}
@font-face {
  font-family: "IRANSansLight";
  src: url("./assets/IRANSans_Light.ttf"); /* File to be stored at your site */
}

html {
  overflow: hidden;
}

body {
  padding: 0;
  margin: 0;
  font-family: IRANSansBold, sans-serif;
  width: 100%;
  overflow: hidden;
}

v-app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: 0;
  margin: 0;
}
</style>