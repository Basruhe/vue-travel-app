// Note: the v-for directive loops over the array of destinations (in the store) and prints them. 

<template>
  <div class="home">
    <h1>All Destinations</h1>
    <div v-for="destination in destinations" :key="destination.name">
      <router-link
        :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
      >
        <h2>{{ destination.name }}</h2>
      </router-link>
      <figure>
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { id: destination.id, name: destination.name }
          }"
        >
          <img
            :src="require(`@/assets/${destination.image}`)"
            :alt="destination.name"
          />
        </router-link>
      </figure>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import store from "@/store.js";
// note: this is the same as writing "./src/store.js"

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>
