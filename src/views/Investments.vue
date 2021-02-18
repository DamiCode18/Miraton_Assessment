<template>
  <div class="investments">
    <div class="flex">
      <div>
        <h1 style="color: #333333">Investment</h1>
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
          <p class="p-text txt-pad">Silver</p>
          <h5 style="font-size: 2.2rem">
            12<span style="font-size: 1.5rem">% P/A</span>
          </h5>
          <p class="p-text">30 Days</p>
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
          <p class="p-text txt-pad">Gold</p>
          <h5 style="font-size: 2.2rem">
            13<span style="font-size: 1.5rem">% P/A</span>
          </h5>
          <p class="p-text">90 Days</p>
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
          <p class="p-text txt-pad">Diamond</p>
          <h5 style="font-size: 2.2rem">
            13.5<span style="font-size: 1.5rem">% P/A</span>
          </h5>
          <p class="p-text">180 Days</p>
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
          <p class="p-text txt-pad">Platinum</p>
          <h5 style="font-size: 2.2rem">
            15<span style="font-size: 1.5rem">% P/A</span>
          </h5>
          <p class="p-text">12 Months</p>
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
          <p class="p-text txt-pad">Bond</p>
          <h5 style="font-size: 2.2rem">
            19.50<span style="font-size: 1.5rem">% P/A</span>
          </h5>
          <p class="p-text">18 Months</p>
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
  color: #313e3e;
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
  margin-top: 190px;
}
.fnt {
  font-size: 14px;
  color: #7c7c7c;
}
.p-text {
  font-size: 14px;
}
.txt-pad {
  padding-top: 15px;
  margin-bottom: 0px !important;
}
</style>
