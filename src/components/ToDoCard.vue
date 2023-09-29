<template>
  <v-card>
    <v-card-title>{{ cardData.title }}</v-card-title>
    <v-card-text>
      {{ cardData.description }}
    </v-card-text>
    <v-card-actions>
      <v-btn :color="cardData.completed ? 'warning' : 'success'" @click="markToggle()">
        {{ cardData.completed ? 'Mark Incomplete' : 'Mark Complete' }}
      </v-btn>
      <v-btn
          color="error"
          @click="deleteTodo"
      >
        <v-icon left>mdi-delete</v-icon>
        <span>Delete</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  name: 'ToDoCard',
  computed: {
    ...mapGetters({
      api_url: 'apiRoot'
    })
  },
  methods: {
    ...mapActions({
      addTodoToIndex: 'addTodoToList',
      delTodoFromIndex: 'deleteTodoFromList'
    }),
    markToggle() {
      const url = this.api_url + '/todos/' + this.cardData.id
      const data = JSON.parse(JSON.stringify(this.cardData))
      data.completed = !data.completed
      axios.put(url, data)
          .then(response => {
            if (response.status === 200) {
              this.delTodoFromIndex({todo: this.cardData});
              this.addTodoToIndex({todo: response.data})
            } else console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
    },

    deleteTodo() {
      const url = this.api_url + '/todos/' + this.cardData.id
      axios.delete(url)
          .then(response => {
            if (response.status === 204) {
              this.delTodoFromIndex({todo: this.cardData});
            } else console.log(response)
          })
          .catch(err => {
            console.log(err)
          })
    }
  }
}
</script>

<style scoped>

</style>