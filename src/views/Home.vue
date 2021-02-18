<template>
  <div class="home">
    <h1>Obinna,</h1>
    <p>Good morning, it’s a good day to save 🤑</p>
    <div class="flex">
      <div class="d-card mx-2">
        <p>SAVINGS ACCOUNT</p>
        <h5>#0.00</h5>
      </div>
      <div class="d-card mx-2">
        <p>BUSINESS ACCOUNT</p>
        <h5>#2,900.00</h5>
      </div>
      <div class="d-card mx-2">
        <div class="flex2">
          <p>Investments</p>
          <p style="color: #2f80ed">0229238715</p>
        </div>
        <h5>#2,900.00</h5>
        <div class="flex2">
          <p style="color: #2f80ed">8.19%</p>
          <p>0229238715</p>
        </div>
      </div>
    </div>
    <div class="mt-4">
      <h5>Announcement</h5>
    </div>
    <div class="a-card my-2">
      <img class="p-3" src="@/assets/Ellipse 8.svg" alt="img" /> Finish your KYC
    </div>
    <div class="a-card my-2">
      <img class="p-3" src="@/assets/Ellipse 8.svg" alt="img" /> Follow us on
      our social media platforms
    </div>
    <div class="a-card my-2">
      <img class="p-3" src="@/assets/Ellipse 8.svg" alt="img" /> Request for a
      CloudBank mastercard
    </div>
    <div class="flex">
      <div class="t-card">
        <div class="t-flex">
          <h6>Transactions</h6>
          <h6 style="color: #658383">View all</h6>
        </div>
        <h6 class="p-text">Today</h6>
        <div class="p-text my-auto">
          <div class="sb-flex">
            <div class="flex">
              <img src="@/assets/Ellipse 2.svg" alt="" />
              <div class="mx-1">
                <h6 class="p-text">Bank Trasfer</h6>
                <h6 class="p-text">Account Funding</h6>
              </div>
            </div>
            <div>
              <h6 class="tr-text">₦1000.00</h6>
            </div>
          </div>
        </div>
        <div class="p-text my-auto mt-4">
          <div class="sb2-flex">
            <div class="flex">
              <img src="@/assets/Ellipse 2.svg" alt="" />
              <div class="mx-1">
                <h6 class="p-text">CB user transfer</h6>
                <h6 class="p-text">Account Funding</h6>
              </div>
            </div>
            <div>
              <h6 class="tr-text">₦1000.00</h6>
            </div>
          </div>
        </div>
        <h6 class="p-text mt-4">Tomorrow</h6>
        <div class="p-text my-auto">
          <div class="sb2-flex">
            <div class="flex">
              <img src="@/assets/Ellipse 2.svg" alt="" />
              <div class="mx-1">
                <h6 class="p-text">Card</h6>
                <h6 class="p-text">Account Withdrawal</h6>
              </div>
            </div>
            <div>
              <h6 class="tr-text2">₦900.00</h6>
            </div>
          </div>
        </div>
      </div>
      <div class="c-card mx-2">
        <div class="t-flex">
          <div>
            <h6>Breakdown</h6>
          </div>
          <div class="flex">
            <div class="text-center">
              <h6>Yesterday</h6>
            </div>
            <div>
              <h6><img src="@/assets/Polygon 1.svg" alt="" /></h6>
              <h6><img src="@/assets/Polygon 2.svg" alt="" /></h6>
            </div>
          </div>
        </div>
        <div class="ab text-center">
          <img src="@/assets/Ellipse 3.svg" alt="" />
        </div>
        <div class="abs text-center">
          <img src="@/assets/Vector 2.svg" alt="" />
        </div>
        <div class="abs2">
          <h6>Total Money Recieved</h6>
          <h6>₦ 2,000.00</h6>
          <h6>Total Money Spent</h6>
          <h6>₦ 900.00</h6>
        </div>
      </div>
    </div>
    <div class="l-card mt-4">
      <div class="">
        <div class="l-bg">
          <p>Total</p>
          <h6>₦2909.98</h6>
        </div>
        <div class="flex">
          <div><img src="@/assets/Ellipse 4.svg" alt="" /> Savings</div>
          <div><img src="@/assets/Ellipse 5.svg" alt="" /> Business</div>
          <div><img src="@/assets/Ellipse 6.svg" alt="" /> Investment</div>
        </div>
      </div>
      <div>
        <div>
          <h6>Savings</h6>
          <h6>₦ 2,900.00</h6>
        </div>
        <div>
          <h6>Savings</h6>
          <h6>₦ 2,900.00</h6>
        </div>
        <div>
          <h6>Savings</h6>
          <h6>₦ 2,900.00</h6>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {};
</script>

<style scoped>
.home {
  margin-top: 150px;
  margin-left: 5rem;
}
.d-card {
  width: 300px;
  height: 130px;
  top: 268px;
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem;
}
.flex {
  display: flex;
}
.flex2 {
  display: flex;
  justify-content: space-between;
}
.a-card {
  width: 924px;
  height: 55px;
  left: 396px;
  top: 466px;
  background: #ffffff;
  border-radius: 10px;
}
.t-card {
  width: 612px;
  height: 392px;
  left: 396px;
  top: 681px;
  background: #ffffff;
  border-radius: 10px;
}
.c-card {
  width: 300px;
  height: 392px;
  left: 1020px;
  top: 681px;
  background: #ffffff;
  border-radius: 10px;
}
.l-card {
  display: flex;
  width: 924px;
  height: 345px;
  background: #ffffff;
  border-radius: 10px;
  padding: 3.5rem 8rem;
}
.t-flex {
  display: flex;
  justify-content: space-between;
  padding: 35px 30px 5px 30px;
}
.p-text {
  padding-left: 30px;
  font-size: 14px;
}
.sb-flex {
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
  border-bottom: 1px solid #e0e0e0;
}
.sb2-flex {
  display: flex;
  justify-content: space-between;
  padding-right: 30px;
}
.tr-text {
  width: 80px;
  height: 21px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #219653;
}
.tr-text2 {
  width: 80px;
  height: 21px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #db261b;
}
.abs {
  margin-top: -150px;
  margin-left: 55px;
}
.abs2 {
  margin-top: 130px;
}
.l-bg {
  background: no-repeat url("../../src/assets/Ellipse 3 (1).svg");
  width: 190px;
  height: 190px;
  text-align: center;
  box-sizing: border-box;
}
</style>
