<template>
  <div class="sb-wid">
    <div>
      <router-link class="udr pads p-2" to="/"
        ><img
          class="mx-3 img-siz"
          src="@/assets/dashboard 1.svg"
          alt="img"
        />Home</router-link
      >
    </div>
    <div>
      <router-link class="udr pads p-2" to="/money"
        ><img class="mx-3 img-siz" src="@/assets/Group.svg" alt="img" />Send
        Money</router-link
      >
    </div>
    <div>
      <router-link class="udr pads p-2" to="/investments"
        ><img
          class="mx-3 img-siz"
          src="@/assets/bill line.svg"
          alt="img"
        />Investments</router-link
      >
    </div>
    <div>
      <router-link class="udr pads p-2" to="/transactions"
        ><img
          class="mx-3 img-siz"
          src="@/assets/bill line.svg"
          alt="img"
        />Transactions</router-link
      >
    </div>
    <div>
      <router-link class="udr pads p-2" to="/settings"
        ><img
          class="mx-3 img-siz"
          src="@/assets/settings line.svg"
          alt="img"
        />Settings</router-link
      >
    </div>
    <div>
      <router-link class="udr pads p-2" to="/logout"
        ><img
          class="mx-3 img-siz"
          src="@/assets/Group (1).svg"
          alt="img"
        />Logout</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pads {
  margin-left: 20rem;
  margin-right: 5rem;
  display: flex;
  margin-bottom: 50px;
  width: 180px;
}
.img-siz {
  width: 30px;
  height: 30px;
}

.router-link-exact-active {
  background: #fff;
  width: 180px;
  color: #333333;
  height: 50px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 12px;
}
.udr {
  text-decoration: none;
  color: #333333;
}
.sb-wid {
  margin-top: 10rem;
}
</style>
