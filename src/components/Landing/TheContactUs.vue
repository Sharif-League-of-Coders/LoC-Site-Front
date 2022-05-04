<template>
  <div id="contact-us">
    <div class="container">
      <div>
        <h1>ارتباط با ما</h1>
      </div>
      <div class="social-media-mail-phone">
        <div class="social-media">
          <div class="text">LOCSHARIF</div>
          <div class="logos">
            <div
              v-for="logo in ['instagram', 'twitter', 'linkedin', 'telegram']"
              :key="logo"
            >
              <img :src="require(`../../assets/${logo}.svg`)" />
            </div>
          </div>
        </div>
        <div class="phone-mail">
          <div class="mail">
            <img :src="require('../../assets/gmail.svg')" />
            <span>LOCSHARIF@Gmail.com</span>
          </div>
          <div class="phone">
            <img :src="require('../../assets/phone.svg')" />
            <span dir="ltr">{{ "(+98)9330880908" }}</span>
          </div>
        </div>
      </div>

      <details-box
        image-src="location.svg"
        title="آدرس"
        description="
            اتاق انجمن علمی (SSC) - طبقه‌ی همکف دانشکده‌ی مهندسـی کامــپیوتر -
            دانشگاه صنعتـــی شریـــــف"
      ></details-box>
      <details-box
        image-src="question-mark.svg"
        title="آیا می‌دانید؟"
        description="
                    شکل‌های استفاده شده در این طراحی، شکل‌های ناممکن (Impossible shapes)
            نام دارند که این مورد با شعار رویــداد (Make it Possible) هـم
            راستــا است."
      ></details-box>
    </div>

    <div class="logo-developers">
      <div class="logo-container">
        <div v-for="src in ['sharif-logo', 'logo', 'ssc-logo']" :key="src">
          <div>
            <img
              :src="require(`../../assets/${src}.svg`)"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
      <div class="text">تمامی حقوق برای توسعه‌دهندگان محفوظ است</div>
    </div>
  </div>
</template>

<script>
import DetailsBox from "./ContactUs/DetailsBox";

export default {
  name: "the-contact-us",
  components: { DetailsBox },
};
</script>

<style scoped>
* {
  font-family: IRANSansLight, sans-serif !important;
}

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

.container > div:first-child {
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 20px;
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
  justify-content: center;
  width: max-content; /* 13vw; */
  border-right: 0.25vw solid black;
  padding: 0.9vw 0.9vw 0.5vw 0.5vw;
}

.social-media .text {
  font-family: Roboto, serif;
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
  margin-top: 1vw;
}

.social-media .logos > div > img {
  width: 2.5vw;
  height: 2.5vw;
}

.phone-mail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-right: 0.2vw solid black;
  padding: 0 0.9vw 0.5vw 0;
}

.mail {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.phone-mail > div {
  display: flex;
}

.phone > span {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 1.75vw;
  display: flex;
  align-items: center;
  letter-spacing: 0.265em;
  color: #000000;
}

.phone > img,
.mail > img {
  max-width: 10vw;
  max-height: 5vw;
  width: 1.8vw;
  height: 1.8vw;
}

.mail > span {
  font-family: Roboto, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 1.5vw;
  display: flex;
  align-items: center;
  color: #000000;
}

.logo-developers {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.logo-developers .text {
  font-size: 1.1vw;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 28.75vw;
  height: 10vw;
}

.logo-developers > .logo-container > div:first-child {
  width: 6.5vw;
  height: 6.5vw;
}
.logo-developers .logo-container > div:nth-child(2) {
  width: 9.5vw;
  height: 5.5vw;
}

.logo-developers .logo-container > div:last-child {
  width: 9vw;
  height: 4.5vw;
}

@media screen and (max-width: 750px) {
  #contact-us {
    background-image: url("../../assets/phone/contact-us.svg");
    background-position: center center;
    height: fit-content;
    padding: 20px !important;
    justify-content: space-between;
  }

  h1 {
    font-style: normal;
    font-weight: 900;
    font-size: 11vw;
    line-height: 118.19%;

    letter-spacing: 0.015em;

    background: linear-gradient(
      90deg,
      #002b99 0%,
      #8000ff 60.42%,
      #f300f8 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .social-media {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: max-content; /* 13vw; */
    border-right: 0.6vw solid black;
    padding: 0.9vw 0.9vw 0.5vw 0.5vw;
  }

  .social-media .text {
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 4vw;
    line-height: 4.5vw;
    display: flex;
    align-items: center;
    letter-spacing: 0.385em;
    width: 100%;
  }

  .phone > span {
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 4vw;
    line-height: 4.5vw;
    display: flex;
    align-items: center;
    letter-spacing: 0.265em;
    color: #000000;
  }

  .mail > span {
    font-family: Roboto, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 4vw;
    line-height: 4.5vw;
    display: flex;
    align-items: center;
    color: #000000;
  }

  .phone > img,
  .mail > img {
    width: 4vw;
    height: 4vw;
  }

  .social-media .logos > div > img {
    width: 6vw;
    height: 6vw;
  }

  .container {
    width: 100%;
    height: 30%;
    justify-content: space-between;
  }

  .phone-mail {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-right: 0.6vw solid black;
    padding: 0 0.9vw 0.5vw 0;
  }
  .logo-developers {
    margin-top: 120vw;
  }
  .logo-container {
    width: fit-content;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2vw;
  }
  .logo-developers .text {
    font-size: 2.5vw;
  }
  .logo-developers > .logo-container > div:first-child {
    width: 14vw;
    height: 14vw;
    margin-left: 3vw;
  }
  .logo-developers > .logo-container > div:nth-child(2) {
    width: 20vw;
    height: 11.5vw;
    margin-left: 3vw;
  }

  .logo-developers > .logo-container > div:last-child {
    width: 19.5vw;
    height: 10vw;
  }
}
</style>
