<template>
  <div class="wrap">
    <the-header />
    <main class="main">
      <h1 class="title">Delivery cost</h1>
      <p class="description">Enter name of the city to count delivery cost</p>
      <input-search
        class="mb"
        v-model.trim="search"
        :error="error"
        @enter="enterHandler"
        v-slot="{ isClickEnter }"
      >
        <input-search-help
          v-if="showCities && !isClickEnter"
          :cities="respectiveCities"
          @help="helpHandler"
        />
      </input-search>
      <popular-cities
        @getCity="getPopular"
        :class="{ 'mobile-popular': !!length }"
      />
    </main>
    <the-footer class="main-footer" />
  </div>
</template>

<script>
import TheFooter from "./TheFooter.vue";
import TheHeader from "./TheHeader.vue";
import InputSearch from "./InputSearch.vue";
import InputSearchHelp from "./InputSearchHelp.vue";
import PopularCities from "./PopularCities.vue";

export default {
  name: "Main",
  components: {
    TheHeader,
    TheFooter,
    InputSearch,
    InputSearchHelp,
    PopularCities,
  },
  data: () => ({
    cities: ["Nur-sultan", "Almaty", "Aktau"],
    search: "",
  }),
  computed: {
    respectiveCities() {
      return this.search
        ? this.cities.filter((city) =>
            city.toLowerCase().includes(this.search.toLowerCase())
          )
        : [];
    },
    showCities() {
      const arr = this.respectiveCities;
      const length = arr.length;
      if (length === 1 && arr[0].toLowerCase() === this.search.toLowerCase()) {
        return false;
      } else if (length) {
        return true;
      }
      return false;
    },
    error() {
      return this.$store.state.error;
    },
    length() {
      return this.$store.state.delivery.length;
    },
  },
  watch: {
    search() {
      this.$store.commit("clearDelivery");
      this.$store.commit("clearError");
    },
  },
  methods: {
    enterHandler() {
      this.$store.dispatch("fetchDelivery", this.search.toLowerCase());
    },
    helpHandler(city) {
      this.search = city;
    },
    getPopular(city) {
      this.search = city;
    },
  },
};
</script>

<style scoped>
.wrap {
  min-height: 100vh;
  flex-basis: 50%;
  padding-left: calc(((100vw - 1290px) / 2) - 25px);
  margin: 0 25px;
  display: flex;
  flex-direction: column;
}
.main {
  max-width: 525px;
  flex-grow: 1;
  padding: 50px 0;
}
.title {
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 15px;
  margin-left: 10px;
}
.description {
  font-size: 24px;
  color: rgba(40, 48, 68, 0.5);
  margin: 0;
  margin-bottom: 80px;
  margin-left: 10px;
}
.mb {
  margin-bottom: 40px;
}
@media (max-width: 1215px) {
  .main {
    padding: 30px 0;
  }
  .title {
    font-size: 36px;
  }
  .description {
    font-size: 16px;
    margin-bottom: 40px;
  }
  .mb {
    margin-bottom: 0;
  }
}
@media (max-width: 700px) {
  .wrap {
    flex-grow: 1;
    min-height: auto;
  }
  .main-footer {
    display: none;
  }
  .mobile-popular {
    display: none;
  }
}
</style>