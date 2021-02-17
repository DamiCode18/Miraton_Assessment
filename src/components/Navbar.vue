<template>
  <div>
    <nav class="navbar navbar-expand-lg nav-bg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"
          ><img src="@/assets/cloudbank 1.svg" alt="img"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form class="d-flex">
            <img class="m-auto mx-3" src="@/assets/Vector.svg" alt="" />
            <img class="m-auto mx-3 res" src="@/assets/pic.jpeg" alt="" />
            <h6 class="m-auto mx-3">Ezekwesili Obinna</h6>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
.nav-bg {
  background: #fff;
  padding-left: 15rem;
  padding-right: 15rem;
}
.res {
  width: 3rem;
  border-radius: 50%;
}
</style>
