<template>
  <v-card>
    <v-card-title>{{ cardData.title }}</v-card-title>
    <v-card-text>
      {{ cardData.description }}
    </v-card-text>
    <v-card-actions>
      <v-btn :color="cardData.completed ? 'warning' : 'success'">
        {{ cardData.completed ? 'Mark Incomplete' : 'Mark Complete' }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    cardData: {
      type: Object,
      required: true
    }
  },
  name: 'ToDoCard',
}
</script>

<style scoped>

</style>