<template>
    <v-app>
      <!-- Navigation Drawer -->
      <v-navigation-drawer v-model="sideNav" app temporary>
        <v-list>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            :to="item.link"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <!-- App Bar -->
      <v-app-bar app color="lime lighten-2">
        <v-app-bar-nav-icon class="d-sm-none" @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title >
          <router-link to="/" tag="span" style="cursor: pointer;">
            DevMeetup
          </router-link>         
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="d-none d-sm-flex" >
          <v-btn v-for="item in menuItems" :key="item.title" :to="item.link" flat>
            <v-icon >{{ item.icon }}</v-icon>
            {{ item.title }}
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
        menuItems: [
        { icon: 'mdi-account-supervisor', title: 'See Meetups', link:'/see-meetups'   },
        { icon: 'mdi-map-marker', title: 'Organize Meetups', link:'/create-meetups' },
        { icon: 'mdi-account', title: 'Profile', link:'/profile' },
        { icon: 'mdi-face-man-profile', title: 'Sign Up', link:'/signup' },
        { icon: 'mdi-lock-open-outline', title: 'Sign In', link:'/signin' }
        ]
      };
    },
    methods: {
      toggleDrawer() {
        this.sideNav = !this.sideNav;
      }
    }
  };
  </script>
  
  <style>
  /* Add any custom styles here */
  </style>
  