<template>
  <div id="contact-us">
    <h1>ارتباط با ما</h1>
    <div class="container">
      <div class="social-media-mail-phone">
        <div class="social-media">
          <div class="text">LOCSHARIF</div>
          <div class="logos">
            <v-img
              width="2.5vw"
              height="2.5vw"
              :src="require('../../assets/instagram.svg')"
              max-width="10vw"
              max-height="5vw"
              contain
            />
            <v-img
              :src="require('../../assets/twitter.svg')"
              max-width="10vw"
              max-height="5vw"
              width="2.5vw"
              height="2.5vw"
              contain
            />
            <v-img
              :src="require('../../assets/linkedin.svg')"
              max-width="10vw"
              max-height="5vw"
              width="2.5vw"
              height="2.5vw"
              contain
            />
            <v-img
              :src="require('../../assets/telegram.svg')"
              max-width="10vw"
              max-height="5vw"
              width="2.5vw"
              height="2.5vw"
              contain
            />
          </div>
        </div>
        <div class="phone-mail">
          <div class="mail">
            <v-img
              :src="require('../../assets/gmail.svg')"
              max-width="10vw"
              max-height="5vw"
              width="2vw"
              height="17vw"
              contain
            />
            <span>LOCSHARIF@Gmail.com</span>
          </div>
          <div class="phone">
            <v-img
              :src="require('../../assets/phone.svg')"
              max-width="10vw"
              max-height="5vw"
              width="1.8vw"
              height="1.8vw"
              contain
            />
            <span dir="ltr">{{ "+98 9330880908" }}</span>
          </div>
        </div>
      </div>
      <div class="address">
        <div class="icon">
          <v-img
            :src="require('../../assets/location.svg')"
            max-width="10vw"
            max-height="5vw"
            width="1.5vw"
            height="1.5vw"
            contain
          />
        </div>
        <div class="text">
          <div class="title">آدرس</div>
          <div class="body">
            اتاق انجمن علمی (SSC) - طبقه‌ی همکف دانشکده‌ی مهندسـی کامــپیوتر -
            دانشگاه صنعتـــی شریـــــف
          </div>
        </div>
      </div>
      <div class="did-you-know">
        <div class="icon">
          <v-img
            :src="require('../../assets/question-mark.svg')"
            max-width="10vw"
            max-height="5vw"
            width="1.5vw"
            height="1.5vw"
            contain
          />
        </div>
        <div class="text">
          <div class="title">آیا می‌دانید؟</div>
          <div class="body">
            شکل‌های استفاده شده در این طراحی، شکل‌های ناممکن (Impossible shapes)
            نام دارند که این مورد با شعار رویــداد (Make it Possible) هـم
            راستــا است.
          </div>
        </div>
      </div>
      <div class="logo-developers">
        <div class="logo-container">
          <div>
            <v-img
              :src="require('../../assets/sharif-logo.svg')"
              width="6.5vw"
              height="6.5vw"
              contain
            />
          </div>
          <div>
            <v-img
              :src="require('../../assets/logo.svg')"
              width="9.5vw"
              height="5.5vw"
              contain
            />
          </div>
          <div>
            <v-img
              :src="require('../../assets/ssc-logo.svg')"
              width="9vw"
              height="4.5vw"
              contain
            />
          </div>
        </div>
        <div class="developers">
          <div class="icon">
            <v-img
              :src="require('../../assets/pencil.svg')"
              max-width="10vw"
              max-height="5vw"
              width="1.5vw"
              height="1.5vw"
              contain
            />
          </div>
          <div class="text">
            <div class="title">توسعه‌دهندگان</div>
            <div class="body">
              <span> بک‌اند:</span>
              <span>فرانت‌اند:</span>
              <span> طراحی: </span>
              <span> تمامی حقوق محفوظ است. </span>
            </div>
          </div>
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
  padding: 1.7vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  background: url("../../assets/Contact Us.svg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;

  height: 60vw;
  width: 100vw;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

h1 {
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

.contacts {
  display: flex;
  justify-content: center;
}
.contacts > div {
  margin: 0.8vw;
}

.social-media-mail-phone {
  display: flex;
  justify-content: space-between;
  width: 35vw;
  margin-right: 1.5vw;
}

.social-media {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 13vw;
  border-right: .25vw solid black;
  padding: 0.9vw  0.9vw  0.5vw 0;
}

.social-media .text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 1.75vw;
  display: flex;
  align-items: center;
  letter-spacing: 0.385em;
  width: 100%;
}

.social-media .logos {
  display: flex;
  justify-content: space-between;
  width: 100%;

}

.phone-mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 0.2vw solid black;
  padding: 0.9vw 0.9vw  0.5vw 0;
}

.phone-mail > div {
  display: flex;
}

.phone > span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 1.75vw;
  display: flex;
  align-items: center;
  letter-spacing: 0.265em;

  color: #000000;
}

.mail > span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 1.75vw;
  display: flex;
  align-items: center;

  color: #000000;
}

.address {
  display: flex;
}

.address .text {
  display: flex;
  flex-direction: column;
  border-right: .25vw solid black;
  width: 32.5vw;
}

.address .text .title {
  border: .05vw solid black;
  width: 4vw;
  display: flex;
  justify-content: center;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 1.5vw;
  line-height: 2.5vw;
  display: flex;
  align-items: center;
  text-align: center;
}
.address .text .body {
  padding: 0 0.9vw  0 0;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 1.5vw;
  line-height: 2.5vw;
  display: flex;
  align-items: center;
}

.did-you-know {
  display: flex;
}

.did-you-know .text {
  display: flex;
  flex-direction: column;
  border-right: .25vw solid black;
  width: 40vw;
}

.did-you-know .text .title {
  border: .05vw solid black;
  width: 7.5vw;
  display: flex;
  justify-content: center;
  font-family: "IRANSans",sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.25vw;
  line-height: 2vw;
  align-items: center;
  text-align: right;
}
.did-you-know .text .body {
  padding: 0 0.9vw  0 0;
  font-family: "IRANSans",sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.25vw;
  line-height: 2vw;
  display: flex;
  align-items: center;
  text-align: right;
}

.developers {
  display: flex;
  width: 19vw;
  margin-left: 13vw;
}

.developers .text {
  display: flex;
  flex-direction: column;
  border-right: .25vw solid black;
  width: 19vw;
}

.developers .text .title {
  border: .05vw solid black;
  width: 7vw;
  display: flex;
  justify-content: center;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 1vw;
  line-height: 1.5vw;
  display: flex;
  align-items: center;
  text-align: right;
}
.developers .text .body {
  display: flex;
  flex-direction: column;

  padding: 0 1vw 0 0;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 1vw;
  line-height: 1.5vw;
  display: flex;
  text-align: right;
}

.logo-developers {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 28.75vw;
  margin-right: 10vw;
}
</style>