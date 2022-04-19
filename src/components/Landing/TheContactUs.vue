<template>
  <div id="contact-us">
    <h1>ارتباط با ما</h1>
    <div class="container">
      <div class="social-media-mail-phone">
        <div class="social-media">
          <div class="text">LOCSHARIF</div>
          <div class="logos">
            <v-img
              width="57px"
              height="57px"
              :src="require('../../assets/instagram.svg')"
              max-width="10vw"
              max-height="5vw"
              contain
            />
            <v-img
              :src="require('../../assets/twitter.svg')"
              max-width="10vw"
              max-height="5vw"
              width="57px"
              height="57px"
              contain
            />
            <v-img
              :src="require('../../assets/linkedin.svg')"
              max-width="10vw"
              max-height="5vw"
              width="57px"
              height="57px"
              contain
            />
            <v-img
              :src="require('../../assets/telegram.svg')"
              max-width="10vw"
              max-height="5vw"
              width="57px"
              height="57px"
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
              width="50px"
              height="39px"
              contain
            />
            <span>LOCSHARIF@Gmail.com</span>
          </div>
          <div class="phone">
            <v-img
              :src="require('../../assets/phone.svg')"
              max-width="10vw"
              max-height="5vw"
              width="44px"
              height="44px"
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
            width="36px"
            height="36px"
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
            width="36px"
            height="36px"
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
              width="158px"
              height="158px"
              contain
            />
          </div>
          <div>
            <v-img
              :src="require('../../assets/logo.svg')"
              width="220px"
              height="131px"
              contain
            />
          </div>
          <div>
            <v-img
              :src="require('../../assets/ssc-logo.svg')"
              width="223px"
              height="108px"
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
              width="36px"
              height="36px"
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
  padding: 40px;
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
  font-size: 90px;
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
  margin: 20px;
}

.social-media-mail-phone {
  display: flex;
  justify-content: space-between;
  width: 863px;
  margin-right: 36px;
}

.social-media {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 330px;
  border-right: 5px solid black;
  padding: 20px 20px 14px 0;
}

.social-media .text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
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
  border-right: 5px solid black;
  padding: 20px 20px 14px 0;
}

.phone-mail > div {
  display: flex;
}

.phone > span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  letter-spacing: 0.265em;

  color: #000000;
}

.mail > span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
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
  border-right: 5px solid black;
  width: 770px;
}

.address .text .title {
  border: 1px solid black;
  width: 104px;
  display: flex;
  justify-content: center;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 56px;
  display: flex;
  align-items: center;
  text-align: center;
}
.address .text .body {
  padding: 0 20px 0 0;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 36px;
  line-height: 56px;
  display: flex;
  align-items: center;
}

.did-you-know {
  display: flex;
}

.did-you-know .text {
  display: flex;
  flex-direction: column;
  border-right: 5px solid black;
  width: 959px;
}

.did-you-know .text .title {
  border: 1px solid black;
  width: 170px;
  display: flex;
  justify-content: center;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 47px;
  display: flex;
  align-items: center;
  text-align: right;
}
.did-you-know .text .body {
  padding: 0 20px 0 0;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  line-height: 47px;
  display: flex;
  align-items: center;
  text-align: right;
}

.developers {
  display: flex;
  width: 453px;
  margin-left: 308px;
}

.developers .text {
  display: flex;
  flex-direction: column;
  border-right: 5px solid black;
  width: 453px;
}

.developers .text .title {
  border: 1px solid black;
  width: 172px;
  display: flex;
  justify-content: center;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 38px;
  display: flex;
  align-items: center;
  text-align: right;
}
.developers .text .body {
  display: flex;
  flex-direction: column;

  padding: 0 20px 0 0;
  font-family: "IRANSans";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 38px;
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
  width: 690px;
  margin-right: 243px;
}
</style>