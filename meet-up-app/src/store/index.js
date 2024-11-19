// store/index.js
import { defineStore } from 'pinia';

export const useMeetupStore = defineStore('meetupStore', {
  state: () => ({
    loadedMeetups: [
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg',
        id: 'afajfjadfaadfa323',
        title: 'Meetup in New York',
        date: '2017-07-17',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
      },
      {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg',
        id: 'aadsfhbkhlk1241',
        title: 'Meetup in Paris',
        date: '2017-07-19',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit...'
      }
    ]
  }),
  getters: {
    getMeetupById: (state) => (id) => state.loadedMeetups.find(meetup => meetup.id === id)
  }
});
