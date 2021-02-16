<template>
  <div id="app">
    <Navbar />
    <div class="flex">
      <Sidebar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style scoped>
#app {
  background: #f6f6f6;
  height: 100vh;
  font-family: "Roboto", sans-serif;
}
.flex {
  display: flex;
}
</style>
