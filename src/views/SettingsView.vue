<template>
    <div>
        <h1>Settings Page</h1>
    </div>
</template>

<script setup lang="ts">
import useSettingsStore from "@/stores/useSettingsStore";
import Settings from "@/models/Settings";
import { ref, onMounted } from "vue";

// Déclarer userSettings comme une référence
const userSettingst = ref<Settings | null>(null);

// Initialiser userSettings après le montage du composant
onMounted(async () => {
    userSettingst.value = useSettingsStore().userSettings;
});
</script>
