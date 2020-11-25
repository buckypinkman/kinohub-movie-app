<template>
  <div class="" id="popularMovies">
    <h1 class="title">Popular Movies</h1>
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
  name: "popularMovies",
  computed: {
    computedResults() {
      return this.$store.getters.movieResults
    }
  },
  methods: {
    getResults() {
      this.$store.dispatch('movieResults')
    }
  },
  created() {
    this.getResults()
  },

  //   computed: {
  //     responsiveSlide() {
  //       let getUserWidth = window.screen.width;
  //       const mobileWidth = 600;
  //       const mobilePageSlide = 3;
  //       const largePageSlide = 6;
  //       if (getUserWidth < mobileWidth) {
  //         return mobilePageSlide;
  //       }
  //       return largePageSlide;
  //     },
  //   },
};
</script>
