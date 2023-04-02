<template>
  <div class="container">
    <h1>List of events</h1>

    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";

import EventService from "@/services/EventService.js";
export default {
  components: { EventCard },
  data() {
    return {
      events: [],
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log("there was an error" + error.response);
      });
  },
};
</script>
<style scoped>
h1 {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  letter-spacing: 0.05em;

  color: #2e2d30;
}
</style>