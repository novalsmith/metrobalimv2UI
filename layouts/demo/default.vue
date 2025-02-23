<script setup>
import { ref } from "vue";
import { useTheme } from 'vuetify';
import { useRouter } from "vue-router";

const theme = useTheme();
const drawer = ref(true);
const router = useRouter();

const menuItems = [
    { title: "Home", path: "/demo" },
    { title: "Button", path: "/demo/button" },
    { title: "Card", path: "/demo/card" },
    { title: "Modal", path: "/demo/modal" },
    { title: "Icon", path: "/demo/icon" },
    { title: "Text Field", path: "/demo/textfield" },
    { title: "Image", path: "/demo/image" },
];

const navigateTo = (path) => {
    router.push(path);
};
const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

let themeText = "Light";
const currentThemeIcon = computed(() => {
    if (theme.global.current.value.dark) {
        themeText = "Dark";
        return 'mdi-weather-night';
    } else {
        themeText = "Light";
        return 'mdi-brightness-7';
    }

});


</script>

<template>
    <v-app>
        <v-navigation-drawer app>
            <div align="center">
                <v-btn icon @click="toggleTheme" variant="text">
                    <v-icon :icon="currentThemeIcon"></v-icon> {{ themeText }}
                </v-btn>
            </div>
            <v-list activatable>
                <v-list-item v-for="item in menuItems" :key="item.title" @click="navigateTo(item.path)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <v-container>
                <slot /> <!-- Tempat untuk konten halaman -->
            </v-container>
        </v-main>
    </v-app>
</template>
