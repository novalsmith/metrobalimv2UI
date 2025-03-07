<template>
    <v-app>
        <v-app-bar fixed app height="150">
            <v-container>
                <v-toolbar density="compact" flat>
                    <v-row align="center" no-gutters>
                        <v-col cols="auto" class="d-flex align-center">
                            <v-btn small icon @click="toggleMenu" class="mr-2">
                                <v-icon>{{ menuIcon }}</v-icon>
                            </v-btn>
                            <Ads :src="imgLogo" alt="Iklan Metro Bali"
                                :modifiers="{ format: 'webp', quality: 80, width: 200 }" @click="handleImageAdClick"
                                class="mr-4" />
                        </v-col>
                        <v-col class="d-flex align-center">
                            <v-text-field density="compact" variant="solo-filled" rounded
                                prepend-inner-icon="mdi-magnify" label="Cari tokoh, topik, atau peristiwa"
                                style="width: 500px; color: white;" class="pt-5 mr-2"
                                @input="handleSearch"></v-text-field>
                            <v-btn class="mr-2" @click="handleSubscribe">Langganan</v-btn>
                            <v-btn icon small class="mr-2" @click="toggleTheme"><v-icon
                                    :icon="currentThemeIcon"></v-icon></v-btn>
                            <v-btn icon small @click="handleProfile"><v-icon>mdi-account-circle-outline</v-icon></v-btn>
                        </v-col>
                    </v-row>
                </v-toolbar>
                <v-toolbar density="compact" flat class="mt-5 border-top">
                    <v-toolbar-items>
                        <v-row no-gutters class="mt-3">
                            <v-col cols="auto" v-for="(menu, i) in menus" :key="i" class="mr-2">
                                <v-list-item density="comfortable" :to="menu.categoryId" variant="text">
                                    <v-list-item-title class="text-capitalize">{{ menu.title }}</v-list-item-title>
                                </v-list-item>
                            </v-col>
                        </v-row>
                    </v-toolbar-items>
                    <v-spacer></v-spacer>
                </v-toolbar>
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

    </v-app>
    <v-navigation-drawer v-model="sideMenu" temporary location="left" color="blue">
        <v-container>
            <v-list>
                <v-list-item v-for="(menu, i) in menus" :key="i" @click="navigate(menu)">
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-container>
    </v-navigation-drawer>
</template>



<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTheme } from 'vuetify';
import ArticleDetailDialog from "@/components/core/articleDetailDialog.vue";
import Ads from "~/components/Ads.vue";


const articleDialog = ref(null);

defineExpose({ articleDialog });
// Theme logic
const theme = useTheme();
const isLoading = ref(true);
const sideMenu = ref(false);
const imgLogo = "/images/metrobalimlogo.webp";
const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const menuIcon = computed(() => (sideMenu.value ? 'mdi-close' : 'mdi-menu'));
const currentThemeIcon = computed(() => theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-brightness-7');

// Data Menu
const menus = ref([
    { title: "Home", icon: "mdi-map-marker", categoryId: "/" },
    { title: "Tanah Papua", icon: "mdi-map-marker", categoryId: "/article/tanah-papua" },
    { title: "Regional", icon: "mdi-earth", categoryId: "/article/regional" },
    { title: "Internasional", icon: "mdi-web", categoryId: "/article/internasional", badge: "NEW" },
    { title: "Podcast", icon: "mdi-podcast", categoryId: "/article/podcast" },
    { title: "Jurnal", icon: "mdi-newspaper", categoryId: "/article/jurnal" },
    { title: "Sastra", icon: "mdi-book-open-page-variant", categoryId: "/article/sastra" },
    { title: "Bisnis", icon: "mdi-chart-bar", categoryId: "/article/bisnis", badge: "HOT" },
    { title: "HIV-AIDS", icon: "mdi-ribbon", categoryId: "/article/hiv-aids" },
    { title: "Insight", icon: "mdi-lightbulb-on", categoryId: "/article/insight" },
    { title: "Peristiwa", icon: "mdi-alert-circle", categoryId: "/article/peristiwa", badge: "UPDATE" },
    { title: "Video", icon: "mdi-video", categoryId: "/article/video" }
]);

// Simulate data loading
onMounted(() => {
    isLoading.value = false;
});

// Methods
const toggleMenu = () => {
    sideMenu.value = !sideMenu.value;
};

const navigate = (menu) => {
    console.log(`Navigating to ${menu.link}`);
    sideMenu.value = false;
};

const isActive = (path) => {
    return route.path.startsWith(path);
};
</script>


<style scoped>
.v-navigation-drawer {
    width: 250px;
}

.text-right {
    text-align: right;
}

.border-top {
    border-top: 1px solid rgb(195, 195, 195);
}

.toolbar-menu-item {
    padding: 0 8px;
    /* Sesuaikan padding horizontal */
    margin: 0;
    /* Hilangkan margin */
    font-size: 13px;
    /* Sesuaikan ukuran font */
}

.toolbar-menu-item.v-btn--active {
    background-color: white !important;
    /* Hilangkan latar belakang aktif */
}

.v-list-item {
    padding: 0 8px;
    /* Sesuaikan padding horizontal */
    font-size: 13px;
    /* Sesuaikan ukuran font */
}

/* Hilangkan background abu-abu pada v-toolbar */
.v-toolbar {
    background-color: transparent !important;
}
</style>