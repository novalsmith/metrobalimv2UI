<template>
    <v-app >
        <v-toolbar elevation="1" :style="{ background: $vuetify.theme.current.colors.secondaryGradient } ">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
                <NuxtLink to="/">
                    <Ads :src="imgLogo" alt="Iklan Metro Bali" :modifiers="{ format: 'webp', quality: 80, width: 200 }"
                        class="mr-5" />
                </NuxtLink>
            </template>
            <v-spacer></v-spacer>
            <v-toolbar-items v-if="!isSmallScreen">

                <v-btn v-for="menu in menus" :key="menu.categoryId" variant="text" rounded="false" :to="menu.link"
                    :active="isMenuActive(menu.categoryId)" exact>
                    <VIcon class="mr-1" size="25" :icon="menu.icon" />
                    {{ menu.title }}
                </v-btn>

            </v-toolbar-items>
            <v-spacer></v-spacer>
            <v-divider class="mx-2" vertical></v-divider>
            <v-btn icon small @click="handleSearch"><v-icon>mdi-magnify</v-icon></v-btn>
            <v-btn icon small class="mr-2" @click="toggleTheme"><v-icon :icon="currentThemeIcon"></v-icon></v-btn>
            <v-btn icon small @click="handleProfile"><v-icon>mdi-account-circle-outline</v-icon></v-btn>
            <v-btn icon="mdi-dots-vertical"></v-btn>
        </v-toolbar>
        <v-toolbar density="compact" v-if="subMenuToolbarVisible" color="subToolbar" elevation="1">
            <v-toolbar-items style="display: flex; justify-content: center; width: 100%;">
                <v-btn v-for="subMenu in selectedSubMenu.subMenu" :key="subMenu.categoryId" variant="text"
                    rounded="false" :to="subMenu.link" exact :active="isSubMenuActive(subMenu.categoryId)">
                    {{ subMenu.title }}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>

        <v-main>
            <keep-alive>
                <NuxtPage />
            </keep-alive>
        </v-main>
        <ArticleDetailDialog ref="articleDialog" />

        <v-footer>
            <v-col class="text-center py-3">
                <span>&copy; 2025 Metrobalim. All Rights Reserved.</span>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import { useTheme, useDisplay } from 'vuetify';
import { useRoute, useRouter } from 'vue-router';

import ArticleDetailDialog from "@/components/core/articleDetailDialog.vue";
import Ads from "~/components/Ads.vue";

const route = useRoute();
const router = useRouter();
const articleDialog = ref(null);
defineExpose({ articleDialog });

const theme = useTheme();
const isLoading = ref(true);
const imgLogo = "/images/metrobalimlogo.webp";
const activeMenu = ref(null);
const subMenuToolbarVisible = ref(false);
const selectedSubMenu = ref({});

const { data: menus } = await useFetch('/api/mockMenu');


// Defined all function here

const hideShowSubMenu = () => {
    const foundMenu = menus.value.find(menu => menu.link === route.path || menu.categoryId === route.params.category);
    console.log(foundMenu);
    if (foundMenu && foundMenu.subMenu.length > 0) {
        subMenuToolbarVisible.value = true;
        selectedSubMenu.value = foundMenu;
    } else {
        subMenuToolbarVisible.value = false;
        selectedSubMenu.value = {};
    }
};

// on load
onMounted(() => {
    isLoading.value = false;
    hideShowSubMenu();
});

// wach and listen every changes
watch(() => {
    hideShowSubMenu();
});



const isMenuActive = (menu) => route.params.category == menu || route.path == menu; // Checking home path as well
const isSubMenuActive = (menu) => route.params.subCategory == menu;
const toggleMenu = () => sideMenu.value = !sideMenu.value;

const handleSearch = () => console.log("do handleSearch");
const handleProfile = () => console.log("do handleProfile");
const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const currentThemeIcon = computed(() => theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-brightness-7');

const { smAndDown } = useDisplay();
const isSmallScreen = computed(() => smAndDown.value);
</script>