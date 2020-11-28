<template>
  <div id="searchResult">
    <spinner/>
    <navbar />
    <div class="container mt-4">
      <h2 v-if="movResults.length || tvResults.length == 0">Movie not found.</h2>
      <h2 v-else>Search results for : "{{ this.searchQuery }}"</h2>
      <div class="row mt-4 justify-content-center">
        <div
          class="card-wrap mt-3 p-3"
          style="width: 12rem"
          v-for="result in movResults"
          :key="result.id"
        >
          <router-link
            :to="{ name: 'MovieDetails', params: { movieId: result.id } }"
          >
            <placeholder v-if="result.poster_path == null" />
            <img
              :src="'http://image.tmdb.org/t/p/w500' + result.poster_path"
              class="img-fluid search-poster"
              alt=""
            />
            <div class="search-title pl-2 py-3">
              <p>{{ result.title }}</p>
            </div>
          </router-link>
        </div>
        <div
          class="card-wrap mt-3 p-3"
          style="width: 12rem"
          v-for="result in tvResults"
          :key="result.id"
        >
          <router-link :to="{ name: 'TvDetails', params: { tvId: result.id } }">
            <placeholder v-if="result.poster_path == null" />
            <img
              :src="'http://image.tmdb.org/t/p/w500' + result.poster_path"
              class="img-fluid poster"
              alt=""
            />
            <div class="search-title pl-2 py-3">
              <p>{{ result.name }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchResult",
  props: ['searchQuery'],
  data() {
    return {
      movResults: "",
      tvResults: "",
    };
  },
  methods: {
    getMovie(query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.$store.state.api_key}&language=en-US&query=${query}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.movResults = response.results;
        });
    },
    getTv(query) {
      this.$store.state.isLoading = true
      fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${this.$store.state.api_key}&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.tvResults = response.results;
        this.$store.state.isLoading = false
      });
    },
  },
  async created() {
    await this.getMovie(this.searchQuery)
    await this.getTv(this.searchQuery)
  },
  watch: {
    searchQuery(newQuery) {
      this.getMovie(newQuery)
      this.getTv(newQuery)
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

.search-poster {
  cursor: pointer;
  transition: 0.2s;
}

.search-poster:hover {
  transform: scale(1.04);
  box-shadow: 0 0 11px rgba(3, 3, 3, 0.822);
}

@media only screen and (max-width: 768px) {
  .card-wrap {
    max-width: 10rem;
  }

  .search-poster {
    max-width: 130px;
  }

}
</style>