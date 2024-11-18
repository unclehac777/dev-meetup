<template>
    <v-app>
      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="sideNav" app temporary>
        <v-list>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-supervisor-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>View Meetups</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <!-- App Bar -->
       
      <v-app-bar app color="lime-lighten-2">
        <v-app-bar-nav-icon class="d-sm-none" @click.stop="sideNav = !sideNav"></v-app-bar-nav-icon>
        <v-toolbar-title>DevMeetup</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-sm-flex">
          <v-btn flat>
            <v-icon left dark>mdi-account-supervisor</v-icon>
            View Meetups
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
  
      <!-- Main Content -->
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sideNav: false,
      };
    },
  };
  </script>
  
  <style>
  </style>
  