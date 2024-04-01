<template>
    <div class="movie-item">
        <AddListBtn />

        <router-link
            :to="'/movie/' + movie.Id"
            aria-current-value="page"
            class="movie-item_container"
        >
            <div class="movie-item_img-container">
                <img :src="movie.PosterPath" alt="" />
            </div>

            <div class="movie-item_content-container">
                <div class="movie-item_content-rate">
                    <i class="material-icons-outlined"> star </i>
                    <span>{{ movie.VoteAverage }}</span>
                </div>

                <h3 class="movie-item_content-title">{{ movie.Title }}</h3>
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Movie from "@/models/Movie";
import AddListBtn from "@/components/button/AddListBtn.vue";

const props = defineProps<{
    movie: Movie;
}>();
</script>

<style>
.movie-item_img-container {
    height: 280px;
    width: 100%;
}

.movie-item_img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
</style>
