<template>
  <div class="" id="topRatedMovies">
    <h1 class="title">Top Rated Movies</h1>
    <carousel :perPage="6" :paginationEnabled="false" :spacePadding="5">
      <slide v-for="result in computedResults" :key="result.id">
        <div class="img-wrap mr-4 p-1">
          <router-link
            :to="{ name: 'MovieDetails', params: { movieId: result.id } }"
          >
            <img
              :src="'http://image.tmdb.org/t/p/w500' + result.poster_path"
              class="img-fluid poster"
              alt=""
            />
          </router-link>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "topRatedMovies",
  computed: {
    computedResults() {
      return this.$store.getters.topMoviesResults
    }
  },
  methods: {
    getResults() {
      this.$store.dispatch('topMoviesResults')
    }
  },
  created() {
    this.getResults()
  },
};
</script>

