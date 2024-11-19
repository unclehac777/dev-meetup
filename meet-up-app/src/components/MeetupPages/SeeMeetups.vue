<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="info" elevation="3">
          <v-row no-gutters>
            <v-col cols="5" sm="4" md="3">
              <v-img
                src="https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg"
                height="130px"
                class="rounded-start"
                cover
              ></v-img>
            </v-col>
            <v-col cols="7" sm="8" md="9">
              <v-card-title class="d-flex flex-column justify-center">
                <div class="title-container">
                  <h5 class="primary--text mb-0">My Meetup</h5>
                  <div class="subtitle">17th July 2017</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn text color="primary" :to="{ path: '/see-meetups/:id' }">
                  <v-icon left>mdi-arrow-forward</v-icon>
                  View Meetup
                </v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MeetupCard'
};
</script>

<style scoped>
.v-card {
  border-radius: 15px;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.v-img {
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.title-container {
  color: #6c757d;
  font-weight: bold;
}
.subtitle {
  color: #adb5bd;
}
.v-btn {
  margin: 0;
  padding: 0 10px;
}
</style>