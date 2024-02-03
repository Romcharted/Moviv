<template>
    <div>
        <div>Home Page</div>

        <span id="test_trad">
            {{ $t("hello") }}
        </span>

        <button @click="toggleLocale">Toggle Locale</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const toggleLocale = () => {
    locale.value = locale.value === "en" ? "fr" : "en";
};
</script>

<style scoped>
#test_trad {
    font-size: 40px;
}
</style>
