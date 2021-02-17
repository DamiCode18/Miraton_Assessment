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
      <div class="t-card"></div>
      <div class="c-card mx-2"></div>
    </div>
    <div class="l-card mt-4"></div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {};
</script>

<style scoped>
.home {
  margin-top: 60px;
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
  width: 924px;
  height: 345px;
  background: #ffffff;
  border-radius: 10px;
}
</style>
