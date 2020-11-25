export default {
    state() {
      return {
        topSeries: ""
      }
    },
    getters: {
      topSeriesResults(state) {
        return state.topSeries
      }
    },
    actions: {
      async topSeriesResults({
        state, rootState
      }) {
        rootState.isLoading = true
        await fetch(
            `https://api.themoviedb.org/3/tv/top_rated?api_key=${rootState.api_key}&language=en-US&page=1`
          )
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            state.topSeries = response.results;
            rootState.isLoading = false
          });
      },
    }
  }