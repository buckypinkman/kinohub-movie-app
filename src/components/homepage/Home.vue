<template>
  <div id="app">
    <spinner v-if="$store.state.isLoading" />
    <navbar />
    <hero />
    <div class="container long-mr">
      <popular-movies />
      <top-rated-movies class="long-mr" />
      <popular-series class="long-mr" />
      <top-rated-series class="long-mr" />
    </div>
    <Footer class="long-mr" />
  </div>
</template>

<script>
import Hero from "./Hero.vue";
import PopularMovies from "./PopularMovies.vue";
import TopRatedMovies from "./TopRatedMovies.vue";
import PopularSeries from "./PopularSeries.vue";
import TopRatedSeries from "./TopRatedSeries.vue";
import Footer from "../UI/Footer.vue";

export default {
  name: "App",
  components: {
    Hero,
    PopularMovies,
    TopRatedMovies,
    PopularSeries,
    TopRatedSeries,
    Footer,
  },
};
</script>

<style>
body {
  background-color: rgb(12, 15, 26);
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.long-mr {
  margin-top: 6rem;
}

.title {
  color: rgb(233, 233, 233);
  font-weight: bolder;
  margin-bottom: 3rem !important;
}

.poster {
  cursor: pointer;
  transition: 0.2s;
}

.poster:hover {
  transform: scale(1.04);
  box-shadow: 0 0 11px rgba(3, 3, 3, 0.822);
}

p {
  font-size: 14px;
}

@media only screen and (max-width: 768px) {
  .poster {
    max-width: 110px;
  }
}

@media only screen and (max-width: 992px) {
  .long-mr {
    margin-top: 3.8rem;
  }

  .title {
    font-size: 1.6rem;
    margin-bottom: 1.8rem !important;
  }
}
</style>
