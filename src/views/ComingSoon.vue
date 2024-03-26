<template>
    <div>Coming Soon Page</div>
</template>

<script setup lang="ts">
// Importez les classes et les interfaces nécessaires
import Movie from "@/models/Movie";
import MovieApiDAO from "@/sgbd/MovieApiDAO";

// Créez une instance de MovieApiDAO
const movieApiDAO = new MovieApiDAO();

// Appelez la méthode GetPopularMovies pour obtenir la liste des films populaires
movieApiDAO
    .GetPopularMovies()
    .then((movieList) => {
        // Une fois que la liste des films est récupérée, affichez-la dans la console
        console.log("Popular Movies:", movieList.SortMoviesByPopularity());
    })
    .catch((error) => {
        console.error("Error fetching popular movies:", error);
    });
</script>
