<template>
  <details-container>
    <spinner v-if="$store.state.isLoading" />
    <div>
      <div class="content">
        <img
          src="https://via.placeholder.com/1280x720.png/161c30/6d748a/?text=No Image Available :("
          v-if="results.backdrop_path == null"
          alt=""
          class="backdrop"
        />
        <img
          v-else
          :src="'http://image.tmdb.org/t/p/w1280' + results.backdrop_path"
          alt=""
          class="backdrop"
        />
        <div class="overlay">
          <div class="content-body ml-md-5 d-md-flex container">
            <img
              class="detail-poster mx-4"
              :src="'http://image.tmdb.org/t/p/w1280' + results.poster_path"
              alt=""
            />
            <div class="content-data">
              <h4>{{ results.status }}</h4>
              <h1 class="my-3">
                {{ results.title }}
                <span class="year">({{ getYear }})</span>
              </h1>
              <h5 class="mb-3">Rating : {{ results.vote_average }}</h5>
              <h5>
                <span v-for="res in results.genres" :key="res.id">
                  {{ res.name }}
                </span>
                | {{ lang }}
              </h5>
              <a
                :href="results.homepage"
                target="_blank"
                class="btn btn-primary btn-lg mt-3 mt-md-4 shadow mr-4"
                ><i class="fas fa-play mr-3"></i>Watch Now
              </a>
              <a
                class="btn btn-outline-light btn-lg mt-3 mt-md-4 shadow"
                :href="
                  'https://www.youtube.com/results?search_query=' +
                  results.title +
                  ' trailer'
                "
                target="_blank"
                ><i class="fas fa-play mr-3"></i>Watch Trailer</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row summary">
          <h2 class="mb-4">SUMMARY</h2>
          <h6 v-if="readMore">{{ results.overview.slice(0, 180) }}..</h6>
          <h6 v-else>{{ results.overview }}</h6>
          <a @click.prevent="readMore = !readMore" href="#">
            <span v-if="readMore">Read more..</span>
            <span v-else>Read Less..</span>
          </a>
        </div>
        <div class="row cast long-mr">
          <h2 class="mb-4">CASTS</h2>
          <my-carousel>
            <h4 v-if="casts.length == 0">No data available.</h4>
            <slide v-for="result in casts" :key="result.id" v-else>
              <div class="img-wrap mr-4 p-2">
                <placeholder v-if="result.profile_path == null" />
                <img
                  :src="'http://image.tmdb.org/t/p/w500' + result.profile_path"
                  class="img-fluid poster"
                  alt=""
                />
                <div class="p-2 mt-2">
                  <h6>{{ result.name }}</h6>
                  <p>{{ result.character }}</p>
                </div>
              </div>
            </slide>
          </my-carousel>
        </div>
        <div class="row mt-5">
          <h2 class="mb-4">Similiar Movies</h2>
          <my-carousel>
            <h4 v-if="similiarItem.length == 0">No data available.</h4>
            <slide v-for="result in similiarItem" :key="result.id" v-else>
              <div class="img-wrap mr-4 p-2">
                <router-link
                  :to="{ name: 'MovieDetails', params: { movieId: result.id } }"
                >
                  <placeholder v-if="result.poster_path == null" />
                  <img
                    :src="'http://image.tmdb.org/t/p/w500' + result.poster_path"
                    class="img-fluid poster"
                    alt=""
                  />
                </router-link>
                <div class="p-2 mt-2">
                  <p>{{ result.title }}</p>
                </div>
              </div>
            </slide>
          </my-carousel>
        </div>
        <div class="row mt-5">
          <router-link :to="{ name: 'Home' }">
            <p>Back to home</p>
          </router-link>
        </div>
      </div>
    </div>
  </details-container>
</template>

<script>
import DetailsContainer from './layouts/DetailsContainer.vue';

export default {
  components: { DetailsContainer },
  name: "movieDetails",
  props: ["movieId"],
  data() {
    return {
      results: "",
      readMore: true,
      casts: "",
      similiarItem: "",
    };
  },
  methods: {
    getDetails(id) {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${this.$store.state.api_key}&language=en-US`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.results = response;
        });
    },
    getCredits(id) {
      this.$store.state.isLoading = true
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.$store.state.api_key}&language=en-US`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.casts = response.cast;
          this.$store.state.isLoading = false;
        });
    },
    getSimiliarItems(id) {
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.$store.state.api_key}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.similiarItem = response.results;
        });
    },
  },
  async created() {
    await this.getDetails(this.movieId);

    await this.getCredits(this.movieId);

    await this.getSimiliarItems(this.movieId);
  },
  watch: {
    movieId(newId) {
      //watch route props
      this.getDetails(newId);
      this.getCredits(newId);
      this.getSimiliarItems(newId);
    },
  },
  computed: {
    getYear() {
      const release = this.results.release_date;
      return release.split("-", 1).join();
    },
    lang() {
      return this.results.original_language.toUpperCase();
    },
  },
};
</script>
