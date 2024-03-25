<template>
    <div
        class="movie-banner"
        :style="{ 'background-image': 'url(' + movie.BackdropPath + ')' }"
    >
        <div class="movie-banner-overlay"></div>
        <div class="movie-banner-content">
            <h2>{{ movie.Title }}</h2>

            <ul class="movie-banner_genre">
                <li v-for="genre in movie.Genres" :key="genre.id">
                    {{ genre.name }}
                </li>
            </ul>

            <div class="movie-banne_details-content">
                <span>{{ movie.Status }}</span>
                <span>•</span>
                <span>{{
                    formatDate(movie.ReleaseDate, i18n.global.locale.value)
                }}</span>
                <span>•</span>
                <span>{{ formatDuration(movie.Runtime) }}</span>
            </div>

            <p class="movie-banner_overview">{{ movie.Overview }}</p>

            <div class="movie-banner_buttons">
                <router-link
                    :to="{ name: 'Movie', params: { id: movie.Id } }"
                    aria-current-value="page"
                    class="movie-banner_discover"
                    >Discover</router-link
                >
                <button
                    class="movie-banner_add-favorie-list"
                    @click="addToFavorieList"
                >
                    <i class="material-icons-outlined"> add </i>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import i18n from "@/i18n";
import Movie from "@/models/Movie";

const props = defineProps<{
    movie: Movie;
}>();

const addToFavorieList = () => {
    console.log("Add Fav");
};

const formatDate = (date: Date, lang: string = "en"): string => {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return date.toLocaleDateString(lang, options);
};

const formatDuration = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const formattedHours = hours > 0 ? `${hours}h` : "";
    const formattedMinutes =
        remainingMinutes > 0 ? `${remainingMinutes}min` : "";
    return `${formattedHours} ${formattedMinutes}`;
};
</script>

<style>
.movie-banner {
    position: relative;
    width: 100%;
    height: 70%;
    background-position: center;
    background-size: cover;
}

.movie-banner-overlay {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    pointer-events: none;
    background: rgb(15, 15, 15);
    background: -moz-linear-gradient(
        90deg,
        rgba(15, 15, 15, 1) 0%,
        rgba(15, 15, 15, 0) 70%
    );
    background: -webkit-linear-gradient(
        90deg,
        rgba(15, 15, 15, 1) 0%,
        rgba(15, 15, 15, 0) 70%
    );
    background: linear-gradient(
        90deg,
        rgba(15, 15, 15, 1) 0%,
        rgba(15, 15, 15, 0) 70%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0f0f0f",endColorstr="#0f0f0f",GradientType=1);
}

/* ====================== Movie banner content ====================== */
.movie-banner-content {
    z-index: 2;
    position: relative;
    padding: 80px 5%;
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    gap: 25px;
    font-family: "Noto Serif", sans-serif;
    font-size: 14px;
    color: var(--text-color-light);
}

.movie-banner-content h2 {
    font-size: 64px;
    font-family: "Anton", sans-serif;
}

.movie-banner_genre {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    padding: 0;
}

.movie-banner_genre li {
    background: var(--main-color);
    background-size: 150% auto;
    transition: 0.5s;
    color: var(--text-btn-color);
    width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
}

.movie-banne_details-content {
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.movie-banner_overview {
    font-size: 16px;
}

/* ============ Movie banner Buttons ============ */
.movie-banner_buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 25px;
}

.movie-banner_buttons .movie-banner_discover {
    background: var(--main-color);
    background-size: 150% auto;
    transition: 0.5s;
    color: var(--text-btn-color);
    padding: 15px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius);
    font-size: 18px;
    max-height: 54px;
}
.movie-banner_buttons .movie-banner_discover:hover {
    background-position: right center;
}

.movie-banner_add-favorie-list {
    width: 54px;
    height: 54px;
    border-radius: var(--border-radius);
    border: 1px solid var(--text-color-light);
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-color-light);
    cursor: pointer;
    transition: background 0.3s;
}

.movie-banner_add-favorie-list:hover {
    background: rgba(255, 255, 255, 0.3);
}

.movie-banner_add-favorie-list i {
    font-size: 39px !important;
}
</style>
