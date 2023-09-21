<template>
  <div class="app-bar">
    <v-app-bar>
      <v-app-bar-nav-icon @click="changeSideBar"/>
      <v-toolbar-title>Todo App Project</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: 'AppBar',
  methods: {
    changeSideBar() {
      console.log('changeSideBar')
      this.$store.state.navigation_drawer = !this.$store.state.navigation_drawer
    }
  }
}

</script>

<style scoped>

</style>