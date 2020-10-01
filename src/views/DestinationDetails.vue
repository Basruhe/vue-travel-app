<template>
  <div>
    <!-- <p>Current destination: {{ this.$route.params.id }}</p>
    <p>Name: {{ this.$route.params.name }}</p> -->
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img
          :src="require(`@/assets/${destination.image}`)"
          :alt="destination.name"
        />
      </div>
    </section>
  </div>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {
      destinationID: this.$route.params.id
    };
  },
  // go to the store, return the destination whose destinations ID matches the ID we got through params
  computed: {
    destination() {
      return store.destinations.find(
        destination => destination.id === this.destinationId
        // console.log(this.destination)
      );
    }
  }
};
</script>