<template>
  <router-link
    class="event-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <div class="event-card -shadow">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h4 class="title">{{ event.title }}</h4>
      <i data-feather="calendar"></i>
      <span class="attend" atend>{{ event.attendees.length }} attending</span>
    </div>
  </router-link>
</template>
<script>
import "feather-icons";
export default {
  props: {
    event: Object,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.event-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
  border-radius: 10px;
  background: #f5fcf9;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 4px 4px 20px 2px rgba(183, 186, 186, 0.47);
}
.event-card > .title {
  margin: 0;
}

.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
.attend {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #31c685;
}
</style>