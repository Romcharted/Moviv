<template>
    <div class="hero-section">
        <HomeIntro />
    </div>

    <div class="sliders-container">
        <SliderMovies
            v-if="movies"
            :movies="movies"
            id-slider="slider-currently"
            title="Actuellement au cinéma"
        />
        <SliderMovies
            v-if="movies"
            :movies="movies"
            id-slider="sliderdfddfd-currently"
            title="Actuellementssdsf au cinéma"
        />
        <SliderMovies
            v-if="movies"
            :movies="movies"
            id-slider="sliderdfsfdfdfdfdf-currently"
            title="Actuellement au cdfdfdinéma"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HomeIntro from "@/components/home/HomeIntro.vue";
import SliderMovies from "@/components/slider/SliderMovies.vue";
import Movie from "@/models/Movie";
import MovieList from "@/models/MovieList";
import MovieApiDAO from "@/sgbd/MovieApiDAO";

const movieApiDAO = new MovieApiDAO();

const movies = ref<MovieList | null>(null);

movieApiDAO
    .GetPopularMovies()
    .then((movieList) => {
        movies.value = new MovieList(0, "Popular Movies", movieList.Movies);
    })
    .catch((error) => {
        console.error("Error fetching popular movies:", error);
    });
</script>

<style>
.hero-section {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
