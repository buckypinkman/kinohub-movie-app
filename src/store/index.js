import Vue from 'vue'
import Vuex from 'vuex'

//homepage modules
import popularMovies from './modules/popularMovies'
import popularSeries from './modules/popularSeries'
import topRatedMovies from './modules/topRatedMovies'
import topRatedSeries from './modules/topRatedSeries'
import hero from './modules/hero'


Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    popularMovies,
    popularSeries,
    topRatedMovies,
    topRatedSeries,
    hero,
  },
  state() {
    return {
      api_key: '9436950aed01e5d0f8d81b8672c7a6be',
      isLoading: false
    }
  }
})

export default store