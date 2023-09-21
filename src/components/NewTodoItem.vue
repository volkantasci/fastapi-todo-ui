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
          />
          <v-textarea
              label="Description"
              outlined
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer />
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
              @click="dialogState = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'NewTodoItem',
  data: () => ({
    dialogState: false,
  }),
}

</script>

<style scoped>

</style>