<template>
    <div class="home-popular-now-item">
        <span class="home-popular-now-item_number">{{ topNumber }}</span>
        <div class="image-container">
            <img :src="movie.PosterPath" alt="" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import Movie from "@/models/Movie";

const props = defineProps<{
    topNumber: number;
    movie: Movie;
}>();
</script>

<style>
.home-popular-now-item {
    display: flex;
    align-items: center;
    height: 100%;
}

.home-popular-now-item_number {
    font-family: "Anton", sans-serif;
    font-size: 15em;
}

.image-container {
    width: 40%;
    height: 100%;
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}
@media screen and (max-width: 1300px) {
    .home-popular-now-item_number {
        font-size: 15em;
    }
}

@media screen and (max-width: 1024px) {
    .home-popular-now-item_number {
        font-size: 15em;
    }
}

@media screen and (max-width: 764px) {
    .home-popular-now-item {
        justify-content: center;
    }

    .home-popular-now-item_number {
        font-size: 11em;
    }

    .image-container {
        width: 50%;
    }
}
</style>
