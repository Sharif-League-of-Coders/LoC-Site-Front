<template>
  <div class="db-container">
    <div class="icon">
      <v-img
          :src="require(`/src/assets/${imageSrc}`)"
          max-width="10vw"
          max-height="5vw"
          width="1.5vw"
          height="1.5vw"
          contain
      />
    </div>
    <div class="text">
      <div class="title">{{ title }}</div>
      <div class="body">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "details-box",
  props: {
    imageSrc: String,
    title: String,
    description: String,
  },
};
</script>

<style scoped>
.db-container {
  display: flex;
  flex-direction: row !important;
  width: 100%;
  align-items: flex-start;
}

.db-container .text {
  display: flex;
  flex-direction: column;
  border-right: 0.25vw solid black !important;
  width: 32.5vw !important;
}

.db-container .text .title {
  width: fit-content;
  display: flex;
  justify-content: center;
  font-style: normal;
  font-weight: 300;
  font-size: 1.5vw !important;
  line-height: 2.5vw;
  align-items: center;
  text-align: center;
  font-family: IRANSansLight, sans-serif !important;
}

.db-container .text .body {
  padding: 0 0.9vw 0 0;
  font-style: normal;
  font-weight: 300;
  font-size: 1.5vw;
  line-height: 2.5vw;
  display: flex;
  align-items: center;
}
</style>
