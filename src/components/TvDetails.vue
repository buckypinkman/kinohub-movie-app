<template>
  <details-container>
    <spinner v-if="$store.state.isLoading" />
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
            <h5>
              Created by :
              <span class="text-white font-weight-bold">{{ getCreator }}</span>
            </h5>
            <h1 class="my-3">
              {{ results.name }}
              <span class="year">({{ getYear }} - {{ getLastYear }})</span>
            </h1>
            <h5>
              Rating : {{ results.vote_average }} |
              <span v-for="res in results.genres" :key="res.id">
                {{ res.name }}
              </span>
              | {{ lang }}
            </h5>
            <h5 class="mt-3">
              Episodes :
              {{ results.number_of_episodes }} | Seasons :
              {{ results.number_of_seasons }}
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
                results.name +
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
        <carousel :perPage="6" :paginationEnabled="false" :spacePadding="5">
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
        </carousel>
      </div>
      <div class="row cast long-mr">
        <h2 class="mb-4">Similiar TV Shows</h2>
        <carousel :perPage="6" :paginationEnabled="false" :spacePadding="5">
          <h4 v-if="similiarItem.length == 0">No data available.</h4>
          <slide v-for="result in similiarItem" :key="result.id" v-else>
            <div class="img-wrap mr-4 p-2">
              <router-link
                :to="{ name: 'TvDetails', params: { tvId: result.id } }"
              >
                <placeholder v-if="result.poster_path == null" />
                <img
                  :src="'http://image.tmdb.org/t/p/w500' + result.poster_path"
                  class="img-fluid poster"
                  alt=""
                />
              </router-link>
              <div class="p-2 mt-2">
                <p>{{ result.name }}</p>
              </div>
            </div>
          </slide>
        </carousel>
      </div>
      <div class="row mt-5">
        <router-link :to="{ name: 'Home' }">
          <p>Back to home</p>
        </router-link>
      </div>
    </div>
  </details-container>
</template>

<script>
import DetailsContainer from "./layouts/DetailsContainer.vue";
export default {
  components: { DetailsContainer },
  name: "tvDetails",
  props: ["tvId"],
  data() {
    return {
      results: "",
      casts: "",
      readMore: true,
      similiarItem: "",
    };
  },
  methods: {
    getDetails(id) {
      fetch(
        `https://api.themoviedb.org/3/tv/${id}?api_key=${this.$store.state.api_key}&language=en-US`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.results = response;
        });
    },
    getCredits(id) {
      this.$store.state.isLoading = true;
      fetch(
        `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${this.$store.state.api_key}&language=en-US`
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
        `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${this.$store.state.api_key}&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          this.similiarItem = response.results;
        });
    },
  },
  async created() {
    await this.getDetails(this.tvId);

    await this.getCredits(this.tvId);

    await this.getSimiliarItems(this.tvId);
  },
  watch: {
    tvId(newId) {
      //watch route props
      this.getDetails(newId);
      this.getCredits(newId);
      this.getSimiliarItems(newId);
    },
  },
  computed: {
    getYear() {
      const release = this.results.first_air_date;
      return release.split("-", 1).join();
    },
    getLastYear() {
      const release = this.results.last_air_date.split("-", 1).join();
      if (release == this.getYear) {
        return "?";
      }
      return release;
    },
    getCreator() {
      const creator = this.results.created_by.map((res) => res.name);
      if (creator.length == 0) {
        return "(no data available)";
      }
      return creator[0];
    },
    lang() {
      return this.results.original_language.toUpperCase();
    },
  },
};
</script>
