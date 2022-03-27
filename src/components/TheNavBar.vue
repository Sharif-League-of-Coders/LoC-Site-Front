<template>
  <div class="container">
    <div class="nav-button"><a href="#home">خانه</a></div>
    <div class="nav-button"><a href="#about-event">درباره رویداد</a></div>
    <div class="nav-button"><a href="#staffs">تیم برگزاری</a></div>
    <div class="nav-button"><a href="#sponsors">حامی</a></div>
    <div class="nav-button"><a href="#contact-us"> ارتباط با ما </a></div>
    <button class="nav-button register">ثبت‌نام</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  direction: rtl;
  align-items: center;
  justify-content: center;
  background-color: rgb(6, 12, 34);
  height: 70px;
  padding: 15px 0;
}
.nav-button {
  padding: 8px;
  text-decoration: none;
  display: inline-block;
  color: rgba(202, 206, 221, 0.8);
  font-weight: 600;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  user-select: none;
}
.nav-button > a {
  text-decoration: none;
  color: inherit;
}
.register {
  color: #fff;
  background: #f07008;
  padding: 7px 22px;
  border-radius: 50px;
  border: 2px solid #f07008;
  transition: all ease-in-out 0.3s;
  font-weight: 500;
  margin-left: 8px;
  margin-top: 2px;
  line-height: 1;
  font-size: 13px;
}
</style>