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

        <div class="menu-bottom__item">
            <i class="material-icons-outlined"> logout </i>
            <span>{{ $t("settings.logout") }}</span>
        </div>

        <div class="menu-bottom__item">
            <i class="material-icons-outlined"> light_mode </i>

            <span>{{ $t("settings.dark-mode") }}</span>

            <div class="menu-bottom__item__toggle-container">
                <input type="checkbox" id="switch-theme" />
                <label for="switch-theme"></label>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style>
.menu-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    flex-wrap: nowrap;
    gap: 20px;

    width: 100%;
    height: 100%;
    padding: 15px 15px 30px 15px;
}

.menu-bottom__item {
    display: flex;
    align-items: center;
    gap: 12px;
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
    background-color: var(--colorChecked);
}

.menu-bottom__item__toggle-container label {
    display: block;
    width: var(--widthLabel);
    height: var(--heightLabel);
    background-color: var(--colorDefault);
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
    background-color: var(--colorCircle);
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
