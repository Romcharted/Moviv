<template>
    <div id="home-slider-popular-now">
        <TitleSection>Popular Now</TitleSection>

        <swiper-container
            id="swiper-popular-now"
            init="false"
            :modules="modules"
        >
            <swiper-slide
                v-for="(movie, index) in movies.Movies"
                :key="movie.Id"
                class="swiper-slide"
            >
                <HomePopularNowItem :topNumber="index + 1" :movie="movie" />
            </swiper-slide>
        </swiper-container>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, defineEmits, defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

// Importation du module Pagination de Swiper
import { Pagination } from "swiper/modules";
const modules = [Pagination];

// Importation des composants nécessaires
import HomePopularNowItem from "./HomePopularNowItem.vue";
import Movie from "@/models/Movie";
import MovieList from "@/models/MovieList";

import TitleSection from "@/components/TitleSection.vue";

// Définition des props et des événements
const props = defineProps<{
    movies: MovieList;
}>();
const emitMovieChange = defineEmits(["movieChange"]);

// Paramètres du Swiper
const swiperParams = {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    pagination: {
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
        slideChange: (swiper: any) => {
            emitMovieChange("movieChange", swiper.realIndex);
        },
    },
};

onMounted(() => {
    let swiperEl: any = document.getElementById("swiper-popular-now");

    const params = {
        injectStyles: [
            `
            :host .swiper{
                padding-bottom: 50px !important;
                box-sizing: border-box;
            } 

            :host(#swiper-popular-now) .swiper-pagination {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            :host(#swiper-popular-now) .swiper-pagination-bullet {
                background: transparent !important;
                width: 30px;
                border-radius: 0px;
                height: auto;
                padding: 15px 0;
                position: relative;
            }

            :host(#swiper-popular-now) .swiper-pagination-bullet::before {
                content: "";
                background-color: white;
                opacity: 0.4;
                width: 100%;
                height: 4px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            :host(#swiper-popular-now) .swiper-pagination-bullet-active::before {
                opacity: 1;
            }
        `,
        ],
    };

    Object.assign(swiperEl, params);
    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();
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
}

#swiper-popular-now {
    width: 100%;
    height: 80%;
}

@media screen and (max-width: 764px) {
    #home-slider-popular-now {
        padding: 20px;
        height: 50vh;
    }
}
</style>
