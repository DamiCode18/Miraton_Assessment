<template>
  <div class="investments mt-5">
    <div class="flex">
      <div>
        <h1>Investment</h1>
        <p class="wid">Choose from our available investment plans</p>
      </div>
      <div class="mt-3">
        <img class="mx-3" src="@/assets/Capture 4.svg" alt="" /> Investment
        Plans
      </div>
      <div class="clr mt-3">
        <img class="mx-3" src="@/assets/Capture 5.svg" alt="" /> Create
        Investment
      </div>
      <div class="clr mt-3">
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
        <div class="text-center fnt">
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatically Renewable
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatic Renewal Options
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Cancel Renewal Anytime
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Fast Automated Payout
          </div>
          <button class="btn btn-style">Make Investment</button>
        </div>
      </div>
      <div class="w-curve">
        <div class="curve">
          <p>Silver</p>
          <h5>12% P/A</h5>
          <p>30 Days</p>
        </div>
        <div class="text-center fnt">
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatically Renewable
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatic Renewal Options
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Cancel Renewal Anytime
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Fast Automated Payout
          </div>
          <button class="btn btn-style">Make Investment</button>
        </div>
      </div>
      <div class="w-curve">
        <div class="curve">
          <p>Silver</p>
          <h5>12% P/A</h5>
          <p>30 Days</p>
        </div>
        <div class="text-center fnt">
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatically Renewable
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatic Renewal Options
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Cancel Renewal Anytime
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Fast Automated Payout
          </div>
          <button class="btn btn-style">Make Investment</button>
        </div>
      </div>
      <div class="w-curve">
        <div class="curve">
          <p>Platinum</p>
          <h5>12% P/A</h5>
          <p>30 Days</p>
        </div>
        <div class="text-center fnt">
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatically Renewable
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatic Renewal Options
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Cancel Renewal Anytime
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Fast Automated Payout
          </div>
          <button class="btn btn-style">Make Investment</button>
        </div>
      </div>
      <div class="w-curve">
        <div class="curve">
          <p>Bond</p>
          <h5>12% P/A</h5>
          <p>30 Days</p>
        </div>
        <div class="text-center fnt">
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatically Renewable
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Automatic Renewal Options
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Cancel Renewal Anytime
          </div>
          <div>
            <img src="@/assets/check.svg" alt="" /> Fast Automated Payout
          </div>
          <button class="btn btn-style">Make Investment</button>
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
.btn-style {
  color: #fff;
  background: #008080;
  width: 178px;
  height: 46px;
  border-radius: 10px;
  padding: 15px 34px;
  margin-top: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
.investments {
  margin-left: 5rem;
}
.fnt {
  font-size: 14px;
  color: #7c7c7c;
}
</style>
