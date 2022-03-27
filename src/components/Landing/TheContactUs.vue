<template>
  <div id="contact-us">
    <div class="container">
      <h1>ارتباط با ما</h1>
      <p>در صورت وجود هرگونه پرسش، با ما در ارتباط باشید</p>
      <div class="contacts">
        <div>
          <h3>آدرس</h3>
          <p>
            اتاق انجمن علمی (SSC) - طبقه‌ی همکف دانشکده‌ی مهندسی کامپیوتر -
            دانشگاه صنعتی شریف
          </p>
        </div>
        <div>
          <h3>توییتر</h3>
          <p><a href="https://twitter.com/locsharif">LOCSharif</a></p>
        </div>
        <div>
          <h3>ایمیل</h3>
          <p><a href="mailto:locsharif@gmail.com">LOCSharif@gmail.com</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#contact-us {
  direction: rtl;
  padding: 40px;
  display: flex;
  justify-content: center;
}
h1 {
  border-bottom: 3px solid #f07008;
}

.contacts {
  display: flex;
  justify-content: center;
}
.contacts > div {
  margin: 20px;
}
</style>