<template>
    <v-app>
        <v-toolbar color="grey-darken-4" elevation="1">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
                <Ads :src="imgLogo" alt="Iklan Metro Bali" :modifiers="{ format: 'webp', quality: 80, width: 200 }"
                    @click="handleClickImg" class="mr-5" />
            </template>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn v-for="(menu, i) in menus" :key="i" :to="menu.categoryId" slim variant="text" rounded="false"
                    class="custom-active-button"
                    @click="menu.subMenu ? showSubMenuToolbar(menu) : hideSubMenuToolbar()">
                    <v-icon class="mr-1" size="27" color="grey-lighten-1">{{ menu.icon }}</v-icon>
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

        <v-toolbar v-if="subMenuToolbarVisible" elevation="1" flat density="compact" color="grey-darken-3">
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="auto">
                        <v-toolbar-items variant="text">
                            <v-btn v-for="(subMenu, j) in selectedSubMenu.subMenu" :key="j" :to="subMenu.categoryId"
                                slim variant="text" rounded="false" @click="navigate(subMenu)">
                                <v-icon class="mr-1" size="27" color="grey-lighten-1">{{ subMenu.icon }}</v-icon>
                                {{ subMenu.title }}
                            </v-btn>
                        </v-toolbar-items>
                    </v-col>
                </v-row>
            </v-container>
        </v-toolbar>

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
import { useRoute } from 'vue-router';
import ArticleDetailDialog from "@/components/core/articleDetailDialog.vue";
import Ads from "~/components/Ads.vue";

const route = useRoute();
const articleDialog = ref(null);
defineExpose({ articleDialog });

const theme = useTheme();
const isLoading = ref(true);
const sideMenu = ref(false);
const imgLogo = "/images/metrobalimlogo.webp";
const activeMenu = ref(null);
const subMenuToolbarVisible = ref(false);
const selectedSubMenu = ref({});

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const menuIcon = computed(() => (sideMenu.value ? 'mdi-close' : 'mdi-menu'));
const currentThemeIcon = computed(() => theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-brightness-7');

const menus = ref([
    { title: "Home", icon: "mdi-home", categoryId: "/" },
    {
        title: "Tanah Papua", icon: "mdi-heart", categoryId: "/article/tanah-papua",
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
            { title: "Kesehatan", icon: "mdi-doctor", categoryId: "/article/video" },
            { title: "Pendidikan", icon: "mdi-book-open", categoryId: "/article/video" },
            { title: "Sport", icon: "mdi-book-open", categoryId: "/article/video" },
        ]
    },
]);

onMounted(() => {
    isLoading.value = false;
    const currentPath = route.path;
    const foundMenu = menus.value.find(menu => currentPath == menu.categoryId);
    if (foundMenu && foundMenu.subMenu) {
        showSubMenuToolbar(foundMenu);
    } else if (foundMenu) {
        activeMenu.value = foundMenu;
    }
});

const toggleMenu = () => {
    sideMenu.value = !sideMenu.value;
};

const navigate = (menu) => {
    sideMenu.value = false;
    subMenuToolbarVisible.value = false;
    activeMenu.value = menus.value.find(mainMenu => mainMenu.subMenu && mainMenu.subMenu.some(sub => sub.title === menu.title)) || menus.value.find(mainMenu => mainMenu.title === menu.title) || null;
};

const handleSearch = () => {
    console.log("Search clicked");
    alert("search");
};

const handleClickImg = () => {
    route.path("/");
};

const handleProfile = () => {
    alert("profile");
};





const showSubMenuToolbar = (menu) => {
    if (menu.subMenu) {
        subMenuToolbarVisible.value = true;
        selectedSubMenu.value = menu;
        activeMenu.value = menu;
    }
};

const hideSubMenuToolbar = () => {
    subMenuToolbarVisible.value = false;
    selectedSubMenu.value = {};
    activeMenu.value = null;
};
</script>


<style scoped>
.sub-menu-toolbar {
    background-color: #f0f0f0;
}

.custom-active-button.v-btn--active {
    /* background-color: #bfdcff; */
    /* Warna latar belakang kustom */
    /* color: #fcfcfc; */
    /* Warna teks kustom */
}
</style>