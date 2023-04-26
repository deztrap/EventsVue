import EventService from "@/services/EventService";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    count: 0,
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community",
    ],
    events: [],
    event: null,
  },
  getters: {},
  mutations: {
    INCREAMENT(state, value) {
      state.count = state.count + value;
    },
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    LIST_EVENT(state, events) {
      state.events = events;
    },
    SHOW_EVENT(state, event) {
      state.event = event;
    },
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event);
      commit("ADD_EVENT", event);
    },
    listEvent({ commit }) {
      EventService.getEvents()
        .then((response) => {
          commit("LIST_EVENT", response.data);
        })
        .catch((error) => {
          console.log("there was an error" + error.response);
        });
    },
    showEvent({ commit }, id) {
      EventService.getEvent(id)
        .then((response) => {
          commit("SHOW_EVENT", response.data);
        })
        .catch((error) => {
          console.log("There was an error:", error.response);
        });
    },
  },
  modules: {},
});
