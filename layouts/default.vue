<template>
    <v-app>
        <!-- App Bar -->
        <v-app-bar fixed app height="150">
            <v-container>
                <v-row align="center" justify="space-between">
                    <!-- Logo -->
                    <v-col cols="3" class="d-flex justify-start align-center">

                        <v-responsive>
                            <NuxtImg preset="logo" :src="imgLogo" loading="lazy" class="nuxt-img-responsive" />
                        </v-responsive>
                    </v-col>

                    <!-- Search Bar -->
                    <v-col cols="6" class="d-flex justify-center align-center">
                        <v-text-field class="mt-3" density="compact" variant="solo-filled" rounded
                            prepend-inner-icon="mdi-magnify" label="Search">
                        </v-text-field>
                    </v-col>

                    <!-- Right Buttons -->
                    <v-col cols="3" class="d-flex justify-end align-center">
                        <div class="mt-3">
                            <v-btn>
                                <v-icon>mdi-mail</v-icon> Subscribe
                            </v-btn>
                            <v-btn icon>
                                <v-icon icon="mdi-bookmark-outline"></v-icon>
                            </v-btn>
                            <v-btn icon @click="toggleTheme" class="mr-2">
                                <v-icon :icon="currentThemeIcon"></v-icon>
                            </v-btn>
                        </div>
                    </v-col>

                    <v-col cols="12">
                        <template v-if="isLoading">
                            <v-skeleton-loader type="text" width="100%" height="40" />
                        </template>
                        <template v-else>
                            <v-btn v-for="(menu, i) in menus" :key="i" variant="text" class="text-capitalize"
                                :to="menu.categoryId">
                                {{ menu.title }}
                            </v-btn>
                            <!-- <v-spacer></v-spacer> -->
                            <v-btn variant="text" @click="toggleMenu">
                                Lainnya <v-icon>{{ menuIcon }}</v-icon>
                            </v-btn>
                        </template>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <!-- Side Menu -->
        <v-navigation-drawer v-model="sideMenu" temporary location="top" color="blue">
            <v-container>
                <v-list>
                    <v-list-item v-for="(menu, i) in menus" :key="i" @click="navigate(menu)">
                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-navigation-drawer>

        <!-- Main Content -->
        <v-main>
            <keep-alive>
                <NuxtPage />
            </keep-alive>
        </v-main>
        <ArticleDetailDialog ref="articleDialog" />

        <!-- Footer -->
        <v-footer>
            <v-col class="text-center py-3">
                <span>&copy; 2025 Metrobalim. All Rights Reserved.</span>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script setup>
import { NuxtImg } from '#components';
import { ref, computed, onMounted } from 'vue';
import { useTheme } from 'vuetify';
import ArticleDetailDialog from "@/components/articleDetailDialog.vue";


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
.v-app-bar {
    display: block !important;
    visibility: visible !important;
}

.v-navigation-drawer {
    width: 250px;
}

.v-btn {
    font-size: 14px;
    padding: 10px;
}

.text-right {
    text-align: right;
}

.article-image img {
    object-fit: contain;
    width: 100%;
}

.nuxt-img-responsive {
    width: 100%;
    max-width: 90%;
    object-fit: cover;
}
</style>
