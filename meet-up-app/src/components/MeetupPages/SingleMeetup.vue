<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="mx-auto" max-width="900px">
          <v-img
            class="align-end text-white"
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
            height="400px"
            cover
          >
            <v-card-title>My Meetup</v-card-title>
          </v-img>

          <v-card-subtitle class="pt-4">
            17th July 2017 - Where it takes place
          </v-card-subtitle>

          <v-card-text>
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda at deserunt dolorum eius esse eum, expedita hic illo ipsum magni, nobis, odio odit quaerat quibusdam quis rem veritatis voluptas!</div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" elevated>Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MyMeetupCard',
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
