export default {
    state() {
      return {
        heroResults: ""
      }
    },
    getters: {
      heroResults(state) {
        return state.heroResults
      }
    },
    actions: {
      async heroResults({
        state, rootState
      }) {
        await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?api_key=${rootState.api_key}&language=en-US&page=1`
          )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            state.heroResults = response.results;
          });
      },
    }
  }