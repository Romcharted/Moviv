<template>
    <div>
        <div v-if="movie">
            <MovieBanner :movie="movie" />
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import MovieApiDAO from "@/sgbd/MovieApiDAO";
import Movie from "@/models/Movie";
import { useRoute } from "vue-router";
import MovieBanner from "@/components/movie/MovieBanner.vue";

const movieDao = new MovieApiDAO();
const route = useRoute();
let movieId: number | null = null;
const movie = ref<Movie | null>(null);

// Vérification de type et conversion en nombre entier
if (typeof route.params.id === "string") {
    movieId = parseInt(route.params.id);
}

onMounted(async () => {
    try {
        if (movieId !== null) {
            movie.value = await movieDao.GetMovieById(movieId);
        }
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
});
</script>
