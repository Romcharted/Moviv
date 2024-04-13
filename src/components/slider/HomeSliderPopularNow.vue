<template>
    <div id="home-slider-popular-now">
        <TitleSection>Popular Now</TitleSection>

        <div class="swiper-container" id="swiper-popular-now">
            <div class="swiper-wrapper">
                <div
                    v-for="(movie, index) in movies.Movies"
                    :key="movie.Id"
                    class="swiper-slide"
                    v-if="movies"
                >
                    <HomePopularNowItem :topNumber="index + 1" :movie="movie" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, defineEmits, defineProps } from "vue";
import TitleSection from "@/components/TitleSection.vue";
import HomePopularNowItem from "./HomePopularNowItem.vue";
import MovieList from "@/models/MovieList";
import Swiper from "swiper";

const props = defineProps<{
    movies: MovieList | null;
}>();
const emitMovieChange = defineEmits(["movieChange"]);

onMounted(() => {
    let swiperEl = new Swiper("#swiper-popular-now", {
        loop: true,
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: "#swiper-popular-now .swiper-pagination",
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
        on: {
            slideChange: (swiper) => {
                emitMovieChange("movieChange", swiper.realIndex);
            },
        },
    });
});
</script>

<style>
#home-slider-popular-now {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: nowrap;
    padding: 25px 50px;
    width: 100%;
    height: 40%;
    gap: 20px;
    overflow: hidden;
}

#swiper-popular-now {
    width: 100%;
    height: 80%;
    padding-bottom: 50px !important;
    box-sizing: border-box;
    position: relative;
}

#swiper-popular-now .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
}

#swiper-popular-now .swiper-pagination-bullet {
    background: transparent !important;
    width: 30px;
    border-radius: 0px;
    height: auto;
    padding: 15px 0;
    position: relative;
}

#swiper-popular-now .swiper-pagination-bullet::before {
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

#swiper-popular-now .swiper-pagination-bullet-active::before {
    opacity: 1;
}

@media screen and (max-width: 764px) {
    #home-slider-popular-now {
        padding: 20px;
        height: 50vh;
    }
}
</style>
