<template>
    <div>Movie Page</div>
</template>

<script setup lang="ts">
import Movie from "@/models/Movie";

const dataTest = {
    adult: false,
    backdrop_path: "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
    belongs_to_collection: null,
    budget: 80000000,
    genres: [
        {
            id: 878,
            name: "Science Fiction",
        },
        {
            id: 28,
            name: "Action",
        },
        {
            id: 12,
            name: "Adventure",
        },
    ],
    homepage: "https://www.madameweb.movie",
    id: 634492,
    imdb_id: "tt11057302",
    original_language: "en",
    original_title: "Madame Web",
    overview:
        "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
    popularity: 1264.699,
    poster_path: "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
    production_companies: [
        {
            id: 5,
            logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
            name: "Columbia Pictures",
            origin_country: "US",
        },
        {
            id: 435,
            logo_path: "/AjzK0s2w1GtLfR4hqCjVSYi0Sr8.png",
            name: "di Bonaventura Pictures",
            origin_country: "US",
        },
        {
            id: 7505,
            logo_path: "/837VMM4wOkODc1idNxGT0KQJlej.png",
            name: "Marvel Entertainment",
            origin_country: "US",
        },
    ],
    production_countries: [
        {
            iso_3166_1: "US",
            name: "United States of America",
        },
    ],
    release_date: "2024-02-14",
    revenue: 12500000,
    runtime: 116,
    spoken_languages: [
        {
            english_name: "English",
            iso_639_1: "en",
            name: "English",
        },
    ],
    status: "Released",
    tagline: "Her web connects them all.",
    title: "Madame Web",
    video: false,
    vote_average: 5.476,
    vote_count: 148,
};

const movie = new Movie(dataTest);

import TMDB from "@/services/TmdbAPI";
const tmdb = new TMDB();
//const movieAPI = await tmdb.GetMovieDetails(634492);

/* const movieList = await tmdb.GetPopularMovies();
movieList.Movies.forEach((movie) => {
    console.log("Title:", movie.Title);
    console.log("Overview:", movie.Overview);
    console.log("Release Date:", movie.ReleaseDate);
    console.log("Popularity:", movie.Popularity);
    console.log("Vote Average:", movie.VoteAverage);
    console.log("-------------------------------------------");
}); */
</script>
