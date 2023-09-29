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
            <RefreshTodos />
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import NewTodoItem from "@/components/NewTodoItem.vue";
import RefreshTodos from "@/components/RefreshTodos.vue";
export default {
  name: 'SideBar',
  components: {
    NewTodoItem,
    RefreshTodos
  },
  data: () => ({
    drawer: null,
  }),
}

</script>

<style scoped>

</style>