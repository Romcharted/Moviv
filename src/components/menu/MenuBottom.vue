<template>
    <div class="menu-bottom">
        <router-link
            class="menu-bottom__item"
            :to="{ name: 'Settings' }"
            aria-current-value="page"
        >
            <i class="material-icons-outlined"> settings </i>
            <span>Settings</span>
        </router-link>

        <div v-if="authStore.IsLoggedIn" class="menu-bottom__item">
            <i class="material-icons-outlined"> logout </i>
            <span @click="authStore.SignOut()" class="menu-auth">
                {{ $t("settings.logout") }}
            </span>
        </div>
        <div v-else class="menu-bottom__item">
            <i class="material-icons-outlined"> logout </i>
            <span @click="authStore.SignIn()">
                {{ $t("settings.sign-in") }}
            </span>
        </div>

        <div class="menu-bottom__item part__dark-mode">
            <div class="menu-bottom__item-text">
                <i class="material-icons-outlined"> light_mode </i>
                <span>{{ $t("settings.dark-mode") }}</span>
            </div>

            <div class="menu-bottom__item__toggle-container">
                <input
                    type="checkbox"
                    id="switch-theme"
                    @change="toggleTheme"
                    v-model="userThemeToggleActive"
                />
                <label for="switch-theme"></label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import UseAuthStore from "@/stores/useAuthStore";

const authStore = UseAuthStore();

// Fonction pour définir le thème et mettre à jour
const setTheme = (theme: string) => {
    localStorage.setItem("user-theme", theme);
    document.documentElement.className = theme;
    userTheme.value = theme;
    userThemeToggleActive.value = theme === "dark-theme" ? true : false;
};

// Fonction pour récupérer le thème stocké dans le localStorage
const getTheme = (): string => {
    const storedTheme = localStorage.getItem("user-theme");
    return storedTheme ? storedTheme : "light-theme";
};

const userTheme = ref(getTheme());
const userThemeToggleActive = ref(false);

// Fonction pour basculer entre les thèmes
const toggleTheme = () => {
    const newTheme =
        userTheme.value === "dark-theme" ? "light-theme" : "dark-theme";
    setTheme(newTheme);
};

onMounted(() => {
    // Récupère le thème stocké dans le localStorage
    const storedTheme = localStorage.getItem("user-theme");

    // Si un thème est stocké, appliquer ce thème, sinon, appliquer le thème par défaut "light-theme"
    if (storedTheme) {
        setTheme(storedTheme);
    } else {
        setTheme("light-theme");
    }
});
</script>

<style>
.menu-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: nowrap;

    width: 100%;
    padding: 40px 15px 15px 15px;
}

.menu-bottom__item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    transition: all 0.3s;
    padding: 10px 0px;
    border-radius: var(--border-radius);
}

.menu-bottom__item:hover {
    background: var(--text-color);
    color: var(--secondary-color);
}

.part__dark-mode {
    justify-content: space-between;
    width: 100%;
}

.menu-bottom__item-text {
    display: flex;
    align-items: center;
    gap: 12px;
}

.menu-auth {
    cursor: pointer;
}

/* ====================== Toggle ====================== */
.menu-bottom__item__toggle-container {
    /* Variables */
    --widthLabel: 55px;
    --heightLabel: 30px;
    --diffSize: 10px;
    --sizeToggle: calc(var(--heightLabel) - var(--diffSize));
    --colorChecked: var(--main-color);
    --colorDefault: #6d7082;
    --colorCircle: #fff;
    position: relative;
}

.menu-bottom__item__toggle-container #switch-theme {
    /* on cache l'input */
    visibility: hidden;
    width: 0;
    height: 0;
    position: absolute;
}

.menu-bottom__item__toggle-container #switch-theme:checked + label::before {
    transform: translate(110%, -50%);
}

.menu-bottom__item__toggle-container #switch-theme:checked + label {
    background: var(--colorChecked);
}

.menu-bottom__item__toggle-container label {
    display: block;
    width: var(--widthLabel);
    height: var(--heightLabel);
    background: var(--colorDefault);
    border-radius: var(--sizeToggle);
    cursor: pointer;
    transition: 0.3s;
}

.menu-bottom__item__toggle-container label::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    background: var(--colorCircle);
    width: var(--sizeToggle);
    height: var(--sizeToggle);
    border-radius: var(--sizeToggle);
    transition: 0.3s;
}

.menu-bottom__item__toggle-container label:active::before {
    width: calc(var(--sizeToggle) + 20%);
}

.menu-bottom__item__toggle-container
    #switch-theme:checked
    + label:active::before {
    transform: translate(36%, -50%);
}
</style>
