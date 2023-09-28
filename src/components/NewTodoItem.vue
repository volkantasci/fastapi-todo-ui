<template>
  <div class="new-todo-item">
    <v-dialog v-model="dialogState" max-width="600px">
      <template v-slot:activator="{attrs, on}">
        <span
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
          <span class="ml-2">New Todo Item</span>
        </span>
      </template>

      <v-card>
        <v-card-title>New Todo Item</v-card-title>
        <v-card-text>
          <v-text-field
              label="Title"
              outlined
              v-model="title"
          />
          <v-textarea
              label="Description"
              outlined
              v-model="description"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
              color="primary"
              text
              @click="dialogState = false"
          >
            Cancel
          </v-btn>
          <v-btn
              color="primary"
              text
              @click="addTodoIndex"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import axios from "axios";

export default {
  name: 'NewTodoItem',
  data: () => ({
    dialogState: false,
    title: '',
    description: ''
  }),

  computed: {
    ...mapGetters({
      api_url: 'apiRoot'
    })
  },

  methods: {
    ...mapActions({
      addTodo: 'addTodoToList'
    }),

    addTodoIndex() {
      const todo_list_url = this.api_url + '/todos';
      axios.post(todo_list_url, {
        title: this.title,
        description: this.description
      })
          .then(response => {
            if (response.status === 201) {
              this.addTodo({todo: response.data});
              this.dialogState = false;
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