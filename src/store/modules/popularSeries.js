export default {
    state() {
      return {
        seriesResults: ""
      }
    },
    getters: {
      seriesResults(state) {
        return state.seriesResults
      }
    },
    actions: {
      async seriesResults({
        state, rootState
      }) {
        await fetch(
            `https://api.themoviedb.org/3/tv/popular?api_key=${rootState.api_key}&language=en-US&page=1`
          )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            state.seriesResults = response.results;
          });
      },
    }
  }