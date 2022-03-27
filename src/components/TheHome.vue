<template>
  <div id="home">
    <div class="container">
      <div class="intro">
        <h1 class="title">
          لیگ
          <strong>برنامه‌نویسان</strong>
        </h1>
        <h2>دانشکده مهندسی کامپیوتر، دانشگاه صنعتی شریف</h2>
        <button>درباره رویداد</button>
      </div>
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
.container {
  background: linear-gradient(
      to top,
      rgba(6, 12, 34, 0.8),
      rgba(6, 12, 34, 0.8)
    ),
    url(../assets/intro-bg.jpg) no-repeat;
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  overflow: hidden;
  position: relative;
}

.title {
  color: #fff;
  font-size: 56px;
  font-weight: 600;
  text-transform: uppercase;
}
strong {
  color: #f07008 !important;
}
</style>
