export default {
    state() {
      return {
        topMovies: ""
      }
    },
    getters: {
      topMoviesResults(state) {
        return state.topMovies
      }
    },
    actions: {
      async topMoviesResults({
        state, rootState
      }) {
        await fetch(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${rootState.api_key}&language=en-US&page=1`
          )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            state.topMovies = response.results;
          });
      },
    }
  }