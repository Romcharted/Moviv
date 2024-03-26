<template>
    <div class="home-intro">
        <MovieBanner :movie="movie" />
        <HomeSliderPopularNow
            v-if="movies && movies.Movies.length > 5"
            :movies="movies"
            @movieChange="updateMovie"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MovieBanner from "@/components/movie/MovieBanner.vue";
import HomeSliderPopularNow from "@/components/slider/HomeSliderPopularNow.vue";
import Movie from "@/models/Movie";
import MovieList from "@/models/MovieList";
import MovieApiDAO from "@/sgbd/MovieApiDAO";

const movieApiDAO = new MovieApiDAO();

const movie = ref<Movie | null>(null);
const movies = ref<MovieList | null>(null);

movieApiDAO
    .GetPopularMovies()
    .then((movieList) => {
        movies.value = new MovieList(0, "Popular Movies", movieList.Movies);
        movie.value = movies.value.Movies[0];
    })
    .catch((error) => {
        console.error("Error fetching popular movies:", error);
    });

const updateMovie = (newMovieIndex: number) => {
    movie.value = movies.value?.Movies[newMovieIndex]
        ? movies.value.Movies[newMovieIndex]
        : null;
};
</script>

<style>
.home-intro {
    width: 100%;
    height: 100%;
}
</style>
