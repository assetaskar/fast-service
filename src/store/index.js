import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    delivery: [],
    error: {
      isError: false,
      message: "",
    },
  },
  mutations: {
    addDelivery(state, data) {
      state.delivery = data;
    },
    clearDelivery(state) {
      state.delivery = [];
    },
    addError(state, message) {
      state.error = { isError: true, message };
    },
    clearError(state) {
      state.error = { isError: false, message: "" };
    },
  },
  actions: {
    async fetchDelivery({ commit }, city) {
      try {
        const response = await fetch(
          `https://qvjgl.mocklab.io/delivery/check?search=${city}`
        );
        const data = await response.json();
        commit("addDelivery", data);
      } catch (e) {
        commit("addError", "We didn’t found such city. Please check spelling");
      }
    },
  },
});
