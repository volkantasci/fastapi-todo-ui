<template>
  <v-btn
      color="primary"
      class="white--text"
      @click="refreshTodos"
  >
    <v-icon>mdi-refresh</v-icon>
    <span class="ml-2">Refresh</span>
  </v-btn>
</template>

<script>
import axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'RefreshTodos',
  computed: {
    ...mapGetters({
      api_url: 'apiRoot'
    })
  },
  methods: {
    ...mapActions({
      setTodos: 'setTodos'
    }),
    refreshTodos() {
      const todo_list_url = this.api_url + '/todos';
      axios.get(todo_list_url)
          .then(response => {
            if (response.status === 200) {
              this.setTodos({todos: response.data});
            } else {
              console.log(response);
            }
          })
          .catch(error => {
            console.log(error);
          })
    }
  }
}

</script>

<style scoped>

</style>