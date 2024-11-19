<template>
   <v-container>
     <v-row class="mt-2">
       <v-col cols="12" sm="6" class="text-center text-sm-right">
         <v-btn large :to="{ path: '/see-meetups' }" color="success">
           Explore Meetups
         </v-btn>
       </v-col>
       <v-col cols="12" sm="6" class="text-center text-sm-left">
         <v-btn large :to="{ path: '/create-meetups' }" color="success">
           Organize Meetup
         </v-btn>
       </v-col>
     </v-row>
     <v-row class="mt-2">
       <v-col cols="12">
         <v-carousel hide-delimiters class="carousel-height">
           <v-carousel-item
             v-for="meetup in meetups"
             :key="meetup.id"
             :src="meetup.imageUrl"
           >
             <div class="title">
               {{ meetup.title }}
             </div>
           </v-carousel-item>
         </v-carousel>
       </v-col>
     </v-row>
     <v-row class="mt-2">
       <v-col cols="12" class="text-center">
         <p class="responsive-text">Join our awesome meetups!</p>
       </v-col>
     </v-row>
   </v-container>
 </template>
 
 <script>
 export default {
   data() {
     return {
       meetups: [
         { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg', id: 'afajfjadfaadfa323', title: 'Meetup in New York' },
         { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg', id: 'aadsfhbkhlk1241', title: 'Meetup in Paris' }
       ]
     };
   }
 };

 
 </script>
 
 <style scoped>
 .carousel-height {
   height: 300px; /* Adjust the height as needed */
 }
 .title {
   position: absolute;
   bottom: 10px;
   left: 50%;
   transform: translateX(-50%);
   color: white;
   font-size: 1.5em; /* Adjusted font size */
   padding: 10px; /* Adjusted padding */
   text-align: center;
   width: 90%; /* Adjust width to make sure it fits */
   font-style: italic;
 }
 .responsive-text {
   font-size: 1.2em; /* Adjusted font size */
   padding: 5px; /* Add padding to make it look better on small screens */
 }
 </style>
 