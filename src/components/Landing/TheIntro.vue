<template>
  <div class="intro">
    <div class="navbar">
      <div class="nav-button"><a href="#home">خانه</a></div>
      <div class="nav-button"><a href="#about-event">درباره رویداد</a></div>
      <div class="nav-button"><a href="#staffs">تیم برگزاری</a></div>
      <div class="nav-button"><a href="#sponsors">حامی</a></div>
      <div class="nav-button"><a href="#contact-us"> ارتباط با ما </a></div>
      <button class="nav-button register">ثبت‌نام</button>
    </div>
    <div class="container">
      <div class="title-container">
        <h1 class="title">League</h1>
        <h6 class="sub-title">of</h6>
        <h1 class="title">Coders</h1>
      </div>
      <img class="logo" src="/loc-logo.svg" />
    </div>
  </div>
</template>

<script>
export default {
  name: "the-home",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
.intro {
  background-image: url(/public/intro-bg.svg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.navbar {
  display: flex;
  direction: rtl;
}
.container {
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0.23em;
  text-transform: uppercase;
  font-style: normal;
}

.title {
  font-weight: 700;
  font-size: 180px;
  text-align: center;
  margin: 0;
  color: #000000;
}
.sub-title {
  font-weight: 300;
  font-size: 64px;
  text-align: center;
  margin: 0;

  color: #000000;
}
strong {
  color: #f07008 !important;
}
.nav-button {
  padding: 8px;
  text-decoration: none;
  display: inline-block;
  color: black;
  font-weight: 900;
  font-size: 40px;
  outline: none;
  cursor: pointer;
  user-select: none;
  width: 175px;
  height: 58px;
}
.nav-button > a {
  text-decoration: none;
  color: inherit;
}
.register {
  color: #fff;
  background: linear-gradient(180deg, #0a0a0a 0%, #2f2f2f 100%);
  padding: 7px 22px;
  border-radius: 10px;
  transition: all ease-in-out 0.3s;
  font-weight: 500;
  margin-left: 8px;
  margin-top: 2px;
  line-height: 1;
  font-size: 13px;
}

.logo {
  height: 40px;
  width: 50px;
}
</style>
