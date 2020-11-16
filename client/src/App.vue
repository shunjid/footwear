<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import M from "materialize-css";

export default {
  name: "App",
  components: {
    NavBar
  },
  mounted: function() {
    M.AutoInit();
  }
};
</script>
