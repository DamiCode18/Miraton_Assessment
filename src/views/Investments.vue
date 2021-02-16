<template>
  <div class="about mt-5">
    <div class="flex">
      <div>
        <h1>Investment</h1>
        <p class="wid">Choose from our available investment plans</p>
      </div>
      <div>
        <img class="mx-3" src="@/assets/Capture 4.svg" alt="" /> Investment
        Plans
      </div>
      <div class="clr">
        <img class="mx-3" src="@/assets/Capture 5.svg" alt="" /> Create
        Investment
      </div>
      <div class="clr">
        <img class="mx-3" src="@/assets/Capture 6.svg" alt="" /> Confirm
        Investment
      </div>
    </div>
    <div class="grid">
      <div class="w-curve">
        <div class="curve">
          <p>Silver</p>
          <h5>12% P/A</h5>
          <p>30 Days</p>
        </div>
      </div>
      <div class="w-curve">
        <div class="curve">
          <p>Silver</p>
          <h5>12% P/A</h5>
          <p>30 Days</p>
        </div>
      </div>
      <div class="w-curve">
        <div class="curve">
          <p>Silver</p>
          <h5>12% P/A</h5>
          <p>30 Days</p>
        </div>
      </div>
      <div class="w-curve">
        <div class="curve">
          <p>Silver</p>
          <h5>12% P/A</h5>
          <p>30 Days</p>
        </div>
      </div>
      <div class="w-curve">
        <div class="curve">
          <p>Silver</p>
          <h5>12% P/A</h5>
          <p>30 Days</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex {
  display: flex;
}
.wid {
  width: 261px;
}
.clr {
  color: #a1a1a1;
}
.curve {
  background: no-repeat url("../../src/assets/Vector 11.svg");
  width: 294px;
  height: 167px;
  left: 398px;
  top: 321px;
  color: #fff;
  text-align: center;
  z-index: 1;
}
.w-curve {
  width: 294px;
  height: 351px;
  left: 398px;
  top: 321px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 30px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  gap: 20px;
}
</style>
