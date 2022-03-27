<template>
  <div id="about-event">
    <div class="container">
      <section class="about">
        <h3>درباره رویداد</h3>
        <p>
          رویداد لیگ برنامه‌نویسان شریف، توسط انجمن علمی دانشکده‌ی مهندسی
          کامپیوتر دانشگاه صنعتی شریف در نیم‌سال دوم تحصیلی ۱۴۰۰-۱۴۰۱ با مخاطب
          اصلی دانش‌جویان ترم دومی دانشگاه‌های مختلف برگزار می‌شود. در این
          رویداد، دانش‌جویان علاقه‌مند، کد حل سوالات مختلفی را به زبان
          برنامه‌نویسی جاوا نوشته و تسلط‌شان را بر روی مباحث مختلف درسی و
          فرادرسی مربوط به برنامه‌نویسی، افزایش می‌دهند.
        </p>
      </section>
      <section>
        <h3>برگزار شده توسط</h3>
        <p>انجمن علمی دانشکده‌ی مهندسی کامپیوتر دانشگاه صنعتی شریف</p>
      </section>
      <section>
        <h3>زمان برگزاری</h3>
        <p>بهار ۱۴۰۱</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-about-event",
};
</script>

<style scoped>
.container {
  display: flex;
  direction: rtl;
  color: white;
  background: linear-gradient(
      to top,
      rgba(13, 20, 41, 0.7),
      rgba(13, 20, 41, 0.7)
    ),
    url(/src/assets/about-bg.jpg) no-repeat;
  background-size: cover;
  padding: 40px;
}
.about {
  width: 50%;
}
section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  margin: 20px;
}
</style>