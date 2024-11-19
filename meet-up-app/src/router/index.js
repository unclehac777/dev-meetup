import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Signin from '@/pages/Signin.vue'
import Signup from '@/pages/Signup.vue'
import UserProfile from '@/pages/UserProfile.vue'
import CreateMeetups from '@/pages/CreateMeetups.vue'
import Meetups from '@/pages/Meetups.vue'
import SingleMeetup from '@/components/MeetupPages/SingleMeetup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup
    
  },

  {
    path: '/signin',
    name: 'Signin',
    component: Signin
    
  },

  {
    path: '/profile',
    name: 'Profile',
    component: UserProfile
    
  },

  {
    path: '/create-meetups',
    name: 'Create Meetups',
    component: CreateMeetups
  },

  {
    path: '/see-meetups/:id',
    name: 'Single Meetup',
    component: SingleMeetup
  },

  {
    path: '/see-meetups',
    name: 'See Meetups',
    component: Meetups
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
