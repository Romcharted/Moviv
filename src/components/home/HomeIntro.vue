<template>
    <div class="home-intro">
        <MovieBanner :movie="movie" />
        <HomeSliderPopularNow />
    </div>
</template>

<script setup lang="ts">
import MovieBanner from "@/components/movie/MovieBanner.vue";
import Movie from "@/models/Movie";
import HomeSliderPopularNow from "@/components/slider/HomeSliderPopularNow.vue";

const dataTest = {
    adult: false,
    backdrop_path: "/qBQV4i2sjIydDJUKm7pwvpyfy5p.jpg",
    belongs_to_collection: {
        id: 726871,
        name: "Dune Collection",
        poster_path: "/c1AiZTXyyzmPOlTLSubp7CEeYj.jpg",
        backdrop_path: "/iCFFmXkK5FdIzqZyyQQEdpkTo8C.jpg",
    },
    budget: 190000000,
    genres: [
        {
            id: 28,
            name: "Action",
        },
        {
            id: 12,
            name: "Adventure",
        },
        {
            id: 878,
            name: "Science Fiction",
        },
    ],
    homepage: "https://www.dunemovie.com",
    id: 693134,
    imdb_id: "tt15239678",
    original_language: "en",
    original_title: "Dune: Part Two",
    overview:
        "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    popularity: 1312.486,
    poster_path: "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    production_companies: [
        {
            id: 923,
            logo_path: "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
            name: "Legendary Pictures",
            origin_country: "US",
        },
    ],
    production_countries: [
        {
            iso_3166_1: "US",
            name: "United States of America",
        },
    ],
    release_date: "2024-02-27",
    revenue: 32800000,
    runtime: 167,
    spoken_languages: [
        {
            english_name: "English",
            iso_639_1: "en",
            name: "English",
        },
    ],
    status: "Released",
    tagline: "Long live the fighters.",
    title: "Dune: Part Two",
    video: false,
    vote_average: 8.455,
    vote_count: 342,
};

const movie = new Movie(dataTest);
</script>

<style>
.home-intro {
    width: 100%;
    height: 100%;
}
</style>
