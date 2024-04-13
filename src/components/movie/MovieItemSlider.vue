<template>
    <div class="movie-item-slider">
        <AddListBtnSlider :idMovie="movie.Id" :active="true" />

        <router-link
            :to="'/movie/' + movie.Id"
            aria-current-value="page"
            class="movie-item-slider_container"
        >
            <div class="movie-item-slider_img-container">
                <img :src="movie.PosterPath" alt="" />
            </div>

            <div class="movie-item-slider_content-container">
                <div class="movie-item-slider_content-rate">
                    <i class="material-icons-outlined"> star </i>
                    <span>{{ movie.VoteAverage }}</span>
                </div>

                <h3 class="movie-item-slider_content-title">
                    {{ movie.Title }}
                </h3>
            </div>
        </router-link>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Movie from "@/models/Movie";
import AddListBtnSlider from "@/components/button/AddListBtnSlider.vue";

const props = defineProps<{
    movie: Movie;
}>();
</script>

<style>
.movie-item-slider {
    font-family: "Anton", sans-serif;
    height: 100%;
    position: relative;
}

.movie-item-slider_img-container {
    height: 380px;
    width: 100%;
}

.movie-item-slider_img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.movie-item-slider_content-container {
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--secondary-color);
    height: 100%;
}

.movie-item-slider_content-title {
    font-family: "Noto Serif", serif;
}

.movie-item-slider_content-rate {
    display: flex;
    align-items: center;
    gap: 10px;
}

.movie-item-slider_content-rate span {
    font-size: 16px;
}

.movie-item-slider_content-rate i {
    color: #dcb116;
}
</style>
