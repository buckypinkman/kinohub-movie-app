import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieDetails from '../components/MovieDetails.vue'
import Home from '../components/homepage/Home.vue'
import TvDetails from '../components/TvDetails.vue'
import SearchResults from '../components/SearchResults.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: "/movie/details/:movieId",
            name: 'MovieDetails',
            component: MovieDetails,
            props: true
        },
        {
            path: "/tv/details/:tvId",
            name: 'TvDetails',
            component: TvDetails,
            props: true
        },
        {
            path: "/search/:searchQuery",
            name: 'Search',
            component: SearchResults,
            props: true
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {
                x: 0,
                y: 0
            }
        }
    }
})