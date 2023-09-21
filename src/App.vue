<template>
  <v-app>
    <v-main>
      <AppBar/>
      <SideBar />
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  name: 'App',
  components: {
    SideBar,
    AppBar,
  },

  data: () => ({
    //
  }),
};
</script>
