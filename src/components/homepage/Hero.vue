<template>
  <div id="hero">
    <carousel
      :perPage="1"
      :paginationEnabled="false"
      :autoplay="true"
      :autoplayTimeout="3000"
      :loop="true"
    >
      <slide v-for="result in computedResults" :key="result.id">
        <div class="wrap">
          <img
            :src="'http://image.tmdb.org/t/p/w1280' + result.backdrop_path"
          />

          <router-link
            :to="{ name: 'MovieDetails', params: { movieId: result.id } }"
          >
            <div class="overlay">
              <div class="content col-md-7">
                <h4>LATEST</h4>
                <h1>{{ result.title }}</h1>
                <h5>
                  Rating : {{ result.vote_average }} |
                  {{ result.original_language.toUpperCase() }}
                </h5>
              </div>
            </div>
          </router-link>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
export default {
  name: "hero",
  computed: {
    computedResults() {
      return this.$store.getters.heroResults;
    },
  },
  methods: {
    getResults() {
      this.$store.dispatch("heroResults");
    },
  },
  created() {
    this.getResults();
  },
};
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}

.wrap {
  position: relative;
}

.overlay {
  position: absolute;
  cursor: pointer;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 10%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

.content {
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  padding-left: 4rem;
}

h1 {
  font-size: 3rem;
  font-weight: bolder;
}

h4,
h5 {
  color: #dbdbdb;
}

@media only screen and (max-width: 600px) {
  .content {
    padding-left: 2rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  h4,
  h5 {
    font-size: 1rem;
  }
}

/*
.overlay {
  height: 110vh;
  font-size: 0.9rem;
  position: relative;
  width: 100%;
  transform: translate(0%, -100%);
  background: rgb(0, 0, 0);
  background: linear-gradient(
    20deg,
    rgba(0, 0, 0, 4) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  width: 100%;
  transition: 0.4s ease;
  color: white;
  text-align: center;
  cursor: pointer;
} */
</style>
