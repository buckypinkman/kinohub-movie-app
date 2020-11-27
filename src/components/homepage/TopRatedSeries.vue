<template>
  <div class="" id="topRatedSeries">
    <h1 class="title">Top Rated Series</h1>
    <my-carousel>
      <slide v-for="result in computedResults" :key="result.id">
        <div class="img-wrap mr-4 p-1">
          <router-link :to="{ name: 'TvDetails', params: { tvId: result.id } }">
            <img
              :src="'http://image.tmdb.org/t/p/w500' + result.poster_path"
              class="img-fluid poster"
              alt=""
            />
          </router-link>
        </div>
      </slide>
    </my-carousel>
  </div>
</template>

<script>
export default {
  name: "topRatedSeries",
  computed: {
    computedResults() {
      return this.$store.getters.topSeriesResults
    }
  },
  methods: {
    getResults() {
      this.$store.dispatch('topSeriesResults')
    }
  },
  created() {
    this.getResults()
  },
};
</script>