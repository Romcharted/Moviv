<template>
    <div id="home-slider-popular-now">
        <TitleSection>Popular Now</TitleSection>

        <swiper-container
            id="swiper-popular-now"
            init="false"
            pagination="true"
            :modules="modules"
        >
            <swiper-slide
                v-for="(movie, index) in movies"
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

import { Pagination } from "swiper/modules";
const modules = [Pagination];
import HomePopularNowItem from "./HomePopularNowItem.vue";
import Movie from "@/models/Movie";
import TitleSection from "@/components/TitleSection.vue";

const props = defineProps<{
    movies: Movie[];
}>();

const emitMovieChange = defineEmits(["movieChange"]);

const swiperParams = {
    loop: true,
    autoplay: {
        delay: 4000,
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
    height: 30%;
    gap: 20px;
}

#swiper-popular-now {
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
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
    background-color: white;
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
        height: 40vh;
    }
}
</style>
