<template>
  <v-navigation-drawer
      v-model="$store.state.navigation_drawer"
      :value="$store.state.navigation_drawer"
      app
  >
    <div class="profile-avatar text-center mt-2">
      <v-avatar width="190" height="250">
        <img src="../assets/my-avatar.jpg" alt="John">
      </v-avatar>
    </div>
    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <NewTodoItem />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-icon>mdi-delete</v-icon>
            <span class="ml-2">Clear All</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-icon>mdi-refresh</v-icon>
            <span class="ml-2">Refresh</span>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import NewTodoItem from "@/components/NewTodoItem.vue";
export default {
  name: 'SideBar',
  components: {
    NewTodoItem
  },
  data: () => ({
    drawer: null,
  }),
}

</script>

<style scoped>

</style>