<template>
  <div id="contact-us">
    <div class="container">
      <h1>ارتباط با ما</h1>
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
        <div class="title">
          <v-img
            :src="require('../../assets/location.svg')"
            max-width="10vw"
            max-height="5vw"
            width="36px"
            height="36px"
            contain
          />
          <span>آدرس</span>
        </div>
        <div class="body">
          <span
            >اتاق انجمن علمی (SSC) - طبقه‌ی همکف دانشکده‌ی مهندسـی کامــپیوتر -
            دانشگاه صنعتـــی شریـــــف</span
          >
        </div>
      </div>
      <div class="did-you-know"></div>
      <div class="logo-container"></div>
      <div class="developers"></div>
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

  background: url("../../assets/Contact Us.svg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;

  height: 60vw;
  width: 100vw;
}

.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

.address .title {
  display: flex;
}

.address .title > span {
  border: 1px solid black;
  padding: 4px 11px;
  box-sizing: border-box;
}
</style>