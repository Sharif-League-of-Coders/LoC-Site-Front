<template>
  <div id="faq">
    <div class="header">
      <h1>سوالات متداول</h1>
    </div>
    <div class="body">
      <div class="question-container">
        <details>
          <summary>مسابقه چطوری هست؟</summary>
          <p>
            بعد از اینکه ثبت نام کردین و گروه‌هاتون رو تشکیل دادین، مسابقه شروع
            می‌شه و در طی سه مرحله اجرا می‌شه. توی هر مرحله یک سوال به شما داده
            می‌شه، سوالا جواب درست یا غلط معینی ندارن، هر کدی که بتونه امتیاز
            بیش‌تری از سوالا بگیره توی اون مرحله برنده میشه، در نهایت با توجه به
            مجموع امتیازا برنده نهایی اعلام می‌شه.
          </p>
        </details>
        <details>
          <summary>چیزی هم باید بلد باشیم تا بتونیم شرکت کنیم؟</summary>
          <p>
            حقیقتش مسابقه کد نویسیه، و دانش مبانی برنامه نویسی و برنامه نویسی
            پیشرفته ای که توی دانشگاه یاد گرفتین براتون کفایت میکنه، اگر اطلاعات
            بیش‌تری نیاز باشه، برگزارکننده‌ها براتون در قالب مستندات یا کارگاه
            بهتون آموزش میدن.
          </p>
        </details>
        <details>
          <summary>خب ایول، حالا چطوری باید شرکت کنم؟</summary>
          <p>
            اول توی کانال LoCSharif عضو شو که از اخبار مطلع باشی، یه مدت دیگه
            فرم ثبت نام و تشکیل گروه رو داخلش قرار می‌دیم و می‌تونی از طریق اون
            برای شرکت توی مسابقه اقدام کنی.
          </p>
        </details>
        <details>
          <summary>صبر کن ببینم، اگه سوال داشتم از کی بپرسم؟</summary>
          <p>
            می‌تونی از طریق ایمیل و یا هر کدوم از شبکه‌های اجتماعی ما سوالت رو
            بپرسی و ما در اسرع وقت بهش پاسخ می‌دیم
          </p>
        </details>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "the-f-a-q",
};
</script>

<style scoped>
* {
  font-family: IRANSansLight, sans-serif !important;
}

#faq {
  background: url("../../assets/FAQ.svg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  height: 60vw;
  width: 100vw;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  direction: rtl;
}

.header {
  width: 100%;
  display: flex;
  justify-content: center;
}

.header > h1 {
  font-style: normal;
  font-weight: 900;
  font-size: 3.75vw;
  line-height: 118.19%;

  letter-spacing: 0.015em;

  background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.body {
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 2vw;
}

.question-container {
  direction: rtl;
  width: 43vw;
  margin-right: 9vw;
}

details {
  margin-top: 0.75vw;
}

p {
  font-style: normal;
  font-weight: 200;
  font-size: 1.5vw;
  line-height: 118.19%;
  /* or 38px */
  padding: 1vw 1vw 1vw 0;

  text-align: justify;
}

summary {
  font-family: "IRANSans", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.75vw;
  line-height: 118.19%;
  text-align: justify;
  text-transform: uppercase;
  border-right: 0.2vw solid black;
  padding-right: 1vw;
}

summary {
  list-style: none;
}

summary::-webkit-details-marker {
  display: none;
}

details summary::after {
  background-image: url('../../assets/arrow-down.svg');
  background-size: 100% 100%;
  display: inline-block;
  width: 5vw;
  height: 1vw;
  content:"";
}

/* By using [open] we can define different styles when the disclosure widget is open */
details[open] summary::after {
  background-image: url('../../assets/arrow-up.svg');
  background-size: 100% 100%;
  display: inline-block;
  width: 5vw;
  height: 1vw;
  content:"";
}
</style>
