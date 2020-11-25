export default {
  state() {
    return {
      movieResults: ""
    }
  },
  getters: {
    movieResults(state) {
      return state.movieResults
    }
  },
  actions: {
    async movieResults({
      state, rootState
    }) {
      await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${rootState.api_key}&language=en-US&page=1`
        )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          state.movieResults = response.results;
        });
    },
  }
}