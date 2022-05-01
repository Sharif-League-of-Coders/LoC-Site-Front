<template>
  <div id="about-event">
    <h1>معرفی</h1>

    <div class="container">
      <section class="about">
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
        <h3>برگزار کننده</h3>
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
* {
  font-family: IRANSansBold, sans-serif !important;

}
#about-event {
  display: flex;
  direction: rtl;
  flex-direction: column;
  align-items: center;
  color: black;
  background: url(/src/assets/introduction.svg);
  background-size: 100vw auto;
  background-position: top center;
  background-repeat: no-repeat;
  padding: 1.6vw 7.5vw 25vw;
  height: 60vw;
  width: 100vw;
}

.container {
  border-right: .05vw solid black;
  width: 100%;
}

.about {
  width: 25vw;
}
h1 {
  font-style: normal;
  font-weight: 900;
  font-size: 3.75vw;
  line-height: 170%;

  letter-spacing: 0.015em;

  background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: right;
  margin: 0.8vw;
  width: 25vw;
}
h3 {
  font-family: IRANSansBold, sans-serif !important;

  font-style: normal;
  font-weight: 700;
  font-size: 1.5vw;
  line-height: 2.5vw;
}

p {
  font-family: IRANSansLight, sans-serif !important;

  font-style: normal;
  font-weight: 300;
  font-size: 1.5vw;
  line-height: 2.5vw;
  text-align: justify;
}
</style>