<template>
  <div id="staffs">
    <div class="container">
      <h1>تیم برگزاری رویداد</h1>
      <v-sheet
        class="sheet"
        elevation="8"
        max-width="1300px"
        max-height="300px"
      >
        <v-slide-group
          v-model="model"
          class="slide-group"
          center-active
          show-arrows
        >
          <v-slide-item v-for="n in 15" :key="n">
            <v-card class="card" height="500px" width="400px">
              <div>
                <v-img
                  :src="require('../../assets/ali-abbasi.jpg')"
                  class="staff-picture"
                  contain
                />
              </div>
              <div>۱پارسا نشائی</div>
              <div>نائب دبیر</div>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
      <v-sheet class="sheet" max-width="1300px">
        <v-slide-group multiple show-arrows class="slide-group">
          <v-slide-item v-for="n in 25" :key="n" v-slot="{ active, toggle }">
            <v-btn
              class="mx-2"
              :input-value="active"
              active-class="purple white--text"
              depressed
              rounded
              @click="toggle"
            >
              Options {{ n }}
            </v-btn>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#staffs {
  direction: rtl;
  padding: 40px;
  display: flex;
  justify-content: center;
  background: url("../../assets/Staff.svg");
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  height: 60vw;
  width: 100vw;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.container > h1 {
  font-style: normal;
  font-weight: 900;
  font-size: 90px;
  line-height: 200%;

  letter-spacing: 0.015em;

  background: linear-gradient(90deg, #002b99 0%, #8000ff 60.42%, #f300f8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.v-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: tomato;
}

.sheet {
  direction: ltr;
}

.slide-group {
  direction: ltr;
}

.staff-picture {
  height: 355px;
  width: 355px;
  border-radius: 50%;
}

.staff-picture:hover {
  filter: blur(10px);
}
</style>