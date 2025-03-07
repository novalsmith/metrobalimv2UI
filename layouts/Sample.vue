<template>
    <v-app>
        <v-app-bar fixed app>
            <v-container fluid>
                <v-row align="center" no-gutters>
                    <v-col cols="auto" class="d-flex align-center">
                        <v-btn small icon @click="toggleMenu" class="mr-2">
                            <v-icon>{{ menuIcon }}</v-icon>
                        </v-btn>
                        <Ads :src="imgLogo" alt="Iklan Metro Bali"
                            :modifiers="{ format: 'webp', quality: 80, width: 200 }" @click="handleImageAdClick"
                            class="mr-4" />

                        <v-menu v-for="(menu, i) in menus" :key="i" offset-y open-on-hover
                            transition="slide-x-transition">
                            <template v-slot:activator="{ props }">
                                <v-btn :prepend-icon="menu.icon" v-bind="props" class="text-capitalize"
                                    style="font-size: medium;">
                                    {{ menu.title }}
                                    <v-icon v-if="menu.subMenu" class="menu-icon">{{ submenuIcon }}</v-icon>
                                </v-btn>
                            </template>
                            <v-list v-if="menu.subMenu">
                                <v-list-item v-for="(subMenu, j) in menu.subMenu" :key="j" @click="navigate(subMenu)">
                                    <v-list-item-title>{{ subMenu.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                            <v-list v-else>
                                <v-list-item @click="navigate(menu)">
                                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                    <v-col class="d-flex align-center justify-end">
                        <v-btn icon small @click="handleSearch"><v-icon>mdi-magnify</v-icon></v-btn>
                        <v-btn icon small class="mr-2" @click="toggleTheme"><v-icon
                                :icon="currentThemeIcon"></v-icon></v-btn>
                        <v-btn icon small @click="handleProfile"><v-icon>mdi-account-circle-outline</v-icon></v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <v-main>
            <keep-alive>
                <NuxtPage />
            </keep-alive>
        </v-main>
        <ArticleDetailDialog ref="articleDialog" />

        <v-footer><v-col class="text-center py-3"><span>&copy; 2025 Metrobalim. All Rights
                    Reserved.</span></v-col></v-footer>
        <v-navigation-drawer v-model="sideMenu" temporary location="left" color="blue">
            <v-container>
                <v-list>
                    <v-list-item v-for="(menu, i) in menus" :key="i" @click="navigate(menu)">
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-navigation-drawer>
    </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTheme } from 'vuetify';
import ArticleDetailDialog from "@/components/core/articleDetailDialog.vue";
import Ads from "~/components/Ads.vue";

const articleDialog = ref(null);
defineExpose({ articleDialog });

const theme = useTheme();
const isLoading = ref(true);
const sideMenu = ref(false);
const imgLogo = "/images/metrobalimlogo.webp";
const activeSubMenu = ref(null);

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const menuIcon = computed(() => (sideMenu.value ? 'mdi-close' : 'mdi-menu'));
const currentThemeIcon = computed(() => theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-brightness-7');
const submenuIcon = computed(() => 'mdi-chevron-down');

const menus = ref([
    { title: "Home", icon: "mdi-home", categoryId: "/" },
    {
        title: "Tanah Papua", icon: "mdi-map-marker", categoryId: "/article/tanah-papua",
        subMenu: [
            { title: "Papua", icon: "mdi-earth", categoryId: "/article/regional" },
            { title: "Papua Tengah", icon: "mdi-earth", categoryId: "/article/regional" },
            { title: "Papua Pegunungan", icon: "mdi-earth", categoryId: "/article/regional" },
            { title: "Papua Selatan", icon: "mdi-earth", categoryId: "/article/regional" },
            { title: "Papua Barat", icon: "mdi-earth", categoryId: "/article/regional" },
            { title: "Papua Barat Daya", icon: "mdi-earth", categoryId: "/article/regional" },
        ]
    },
    { title: "Nasional", icon: "mdi-earth", categoryId: "/article/regional" },
    { title: "Internasional", icon: "mdi-web", categoryId: "/article/internasional", badge: "NEW" },
    {
        title: "Insight", icon: "mdi-lightbulb-on", categoryId: "/article/insight",
        subMenu: [
            { title: "Podcast", icon: "mdi-podcast", categoryId: "/article/podcast" },
            { title: "Jurnal", icon: "mdi-newspaper", categoryId: "/article/jurnal" },
            { title: "Sastra", icon: "mdi-book-open-page-variant", categoryId: "/article/sastra" },
            { title: "Bisnis", icon: "mdi-chart-bar", categoryId: "/article/bisnis", badge: "HOT" },
            { title: "HIV-AIDS", icon: "mdi-ribbon", categoryId: "/article/hiv-aids" },
        ]
    },
    { title: "Kesehatan", icon: "mdi-video", categoryId: "/article/video" },
    { title: "Pendidikan", icon: "mdi-video", categoryId: "/article/video" }
]);

onMounted(() => {
    isLoading.value = false;
});

const toggleMenu = () => {
    sideMenu.value = !sideMenu.value;
};

const navigate = (menu) => {
    console.log(`Navigating to ${menu.categoryId}`);
    sideMenu.value = false;
};

const handleSearch = () => {
    console.log("Search clicked");
};
</script>

<style scoped>
.v-navigation-drawer {
    width: 250px;
}

.text-right {
    text-align: right;
}

.menu-btn {
    height: 100%;
    padding: 0 16px;
    display: flex;
    align-items: center;
}

.menu-icon {
    margin-left: 4px;
}
</style>