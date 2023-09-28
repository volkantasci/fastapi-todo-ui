<template>
  <div class="home-view">
    <v-container>
      <h1 class="text-center">All Todos</h1>
      <v-row>
        <v-col cols="12" md="4" v-for="todo in todos" :key="todo.id">
          <to-do-card :card-data="todo"/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import ToDoCard from '@/components/ToDoCard.vue'
import {indexOf} from "core-js/internals/array-includes";
import {mapGetters} from "vuex";

export default {
  name: 'HomeView',
  methods: {indexOf},
  computed: {
    ...mapGetters({
      todos: 'todos',
      api_url: 'apiRoot'
    })
  },
  components: {
    ToDoCard
  },
}
</script>
