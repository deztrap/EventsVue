<template>
  <div class="container">
    <h1>List of events</h1>
    <span>{{ events.length }} events</span>

    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";
// import EventService from "@/services/EventService.js";
export default {
  components: { EventCard },

  created() {
    this.$store.dispatch("listEvent");
  },

  computed: mapState(["events"]),
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
span {
  font-family: "Mulish";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: right;
  letter-spacing: 0.05em;

  color: rgba(46, 45, 48, 0.49);
  padding-inline: 10px;
}
</style>