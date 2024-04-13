<template>
    <div class="slider-movies">
        <TitleSection>{{ title }}</TitleSection>

        <div class="swiper-container" :id="idSlider">
            <div class="swiper-wrapper">
                <div
                    v-for="(movie, index) in movies.Movies"
                    :key="movie.Id"
                    class="swiper-slide"
                    v-if="movies"
                >
                    <MovieItemSlider :movie="movie" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from "vue";
import Swiper from "swiper";
import TitleSection from "@/components/TitleSection.vue";
import MovieItemSlider from "@/components/movie/MovieItemSlider.vue";
import MovieList from "@/models/MovieList";

const props = defineProps<{
    movies: MovieList | null;
    idSlider: string;
    title: string;
}>();

onMounted(() => {
    let swiperSelector = "#" + props.idSlider;
    let swiperEl = new Swiper(swiperSelector, {
        loop: true,
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: `${swiperSelector} .swiper-pagination`,
            clickable: true,
        },
        spaceBetween: 20,
        breakpoints: {
            100: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1250: { slidesPerView: 4 },
            1650: { slidesPerView: 5 },
        },
    });
});
</script>

<style>
.slider-movies .swiper-slide {
    height: unset;
    overflow: hidden;
}

.slider-movies {
    padding: 25px 50px;
    width: 100%;
    gap: 40px;
    display: flex;
    flex-direction: column;
}

.slider-movies .swiper-container {
    padding-bottom: 50px !important;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
}

.slider-movies .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
}

.slider-movies .swiper-pagination .swiper-pagination-bullet {
    background: transparent !important;
    width: 30px;
    border-radius: 0px;
    height: auto;
    padding: 15px 0;
    position: relative;
}

.slider-movies .swiper-pagination .swiper-pagination-bullet::before {
    content: "";
    background-color: var(--text-color);
    opacity: 0.4;
    width: 100%;
    height: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.slider-movies .swiper-pagination .swiper-pagination-bullet-active::before {
    opacity: 1;
}

@media (max-width: 1024px) {
    .slider-movies {
        padding: 20px;
    }
}
</style>
