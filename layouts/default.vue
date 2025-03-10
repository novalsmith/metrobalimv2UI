<template>
    <v-app>
        <v-toolbar color="toolbar">
            <template v-slot:prepend>
                <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
                <Ads :src="imgLogo" alt="Iklan Metro Bali" :modifiers="{ format: 'webp', quality: 80, width: 200 }"
                    @click="handleClickImg" class="mr-5" />
            </template>
            <v-spacer></v-spacer>
            <v-toolbar-items v-if="!isSmallScreen">
                <v-btn v-for="(menu, i) in menus" :key="i" :to="menu.categoryId" slim variant="text" rounded="false"
                    class="custom-active-button"
                    @click="menu.subMenu ? showSubMenuToolbar(menu) : hideSubMenuToolbar()">
                    <v-icon class="mr-1" size="27">{{ menu.icon }}</v-icon>
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

        <v-toolbar flat v-if="!isSmallScreen && subMenuToolbarVisible" elevation="1" color="subToolbar"
            density="compact">
            <!-- <v-container fluid> -->
            <v-row justify="center">
                <!-- <v-col cols="auto"> -->
                <v-toolbar-items>
                    <!-- <v-btn variant="text" v-for="(subMenu, j) in selectedSubMenu.subMenu" :key="j" :to="subMenu.categoryId"
                    @click="navigate(subMenu)">
                    <v-icon class="mr-1" :color="subMenu.color">{{ subMenu.icon }}</v-icon>
                    {{ subMenu.title }}
                </v-btn> -->


                    <!-- <v-row no-gutters> -->
                    <!-- <v-col v-for="(menu, i) in selectedSubMenu.subMenu" :key="i"> -->
                    <v-list-item :to="menu.categoryId" v-for="(menu, i) in selectedSubMenu.subMenu" :key="i">

                        <v-list-item-title class="text-capitalize">
                            <!-- <template v-slot:prepend> -->
                            <!-- <v-icon :icon="menu.icon"></v-icon> -->
                            <!-- </template> -->
                            {{ menu.title }}</v-list-item-title>
                    </v-list-item>
                    <!-- </v-col> -->
                    <!-- </v-row> -->
                </v-toolbar-items>
                <!-- </v-col> -->
            </v-row>
            <!-- </v-container> -->
        </v-toolbar>

        <v-main>
            <keep-alive>
                <NuxtPage />
            </keep-alive>
        </v-main>
        <ArticleDetailDialog ref="articleDialog" />

        <v-footer><v-col class="text-center py-3"><span>&copy; 2025 Metrobalim. All Rights
                    Reserved.</span></v-col></v-footer>
        <v-navigation-drawer v-model="sideMenu" temporary location="left" color="sidebar" :width="drawerWidth">
            <v-container>
                <v-text-field label="Search" prepend-inner-icon="mdi-magnify" class="mb-4"></v-text-field>
                <v-list dense>
                    <v-list-item v-for="(menu, i) in menus" :key="i" @click="handleMenuItemClick(menu)">
                        <template v-if="menu.subMenu">
                            <v-list-group :value="activeMenu === menu">
                                <template v-slot:activator="{ props }">
                                    <v-list-item v-bind="props">
                                        <v-list-item-title>{{ menu.title }}</v-list-item-title>
                                    </v-list-item>
                                </template>
                                <v-list-item v-for="(subMenu, j) in menu.subMenu" :key="j" @click="navigate(subMenu)"
                                    dense>
                                    <v-list-item-title class="text-truncate">{{ subMenu.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list-group>
                        </template>
                        <template v-else>
                            <v-list-item @click="navigate(menu)">
                                <v-list-item-title>{{ menu.title }}</v-list-item-title>
                            </v-list-item>
                        </template>
                    </v-list-item>
                </v-list>
                <v-divider class="my-4"></v-divider>
                <v-list dense>
                    <v-list-item>
                        <v-list-item-title>Dark Theme</v-list-item-title>
                        <template v-slot:append>
                            <v-switch v-model="theme.global.name.value" inset :true-value="'dark'"
                                :false-value="'light'"></v-switch>
                        </template>
                    </v-list-item>
                    <v-list-item @click="handleProfile">
                        <v-list-item-title>Profile</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-navigation-drawer>
    </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useTheme, useDisplay } from 'vuetify';
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

const { data: menus, pending: menusPending } = await useFetch('/api/mockMenu');

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
    route
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

// Breakpoint and Responsive Logic
const { smAndDown } = useDisplay();
const isSmallScreen = computed(() => smAndDown.value);
const drawerWidth = computed(() => isSmallScreen.value ? '90%' : '300');
</script>

<style scoped>
.v-navigation-drawer {
    padding: 1rem;
}
</style>