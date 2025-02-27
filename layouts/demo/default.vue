<template>
    <v-app>
        <v-navigation-drawer app>
            <div align="center">
                <v-btn icon @click="toggleTheme" variant="text">
                    <v-icon :icon="currentThemeIcon"></v-icon> {{ themeText }}
                </v-btn>
            </div>
            <v-list activatable>
                <div class="ml-2">
                    <h3>Core Component</h3>
                </div>
                <v-list-item v-for="item in menuItems.coreComponent" :key="item.title" @click="navigateTo(item.path)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>

                <nvDivider />
                <div class="ml-2">
                    <h3>Custom Component</h3>
                </div>
                <v-list-item v-for="item in menuItems.nvCustom" :key="item.title" @click="navigateTo(item.path)">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>

            </v-list>


        </v-navigation-drawer>

        <v-main>
            <v-container>
                <slot></slot> <!-- Tempat untuk konten halaman -->
            </v-container>
        </v-main>
    </v-app>
</template>
<script setup>
import { ref } from "vue";
import { useTheme } from 'vuetify';
import { useRouter } from "vue-router";
import nvDivider from "@/components/core/nvdivider.vue"

const theme = useTheme();
const drawer = ref(true);
const router = useRouter();

const menuItems = {
    coreComponent: [
        { title: "Home", path: "/demo" },
        { title: "Button", path: "/demo/button" },
        { title: "Card", path: "/demo/card" },
        { title: "Modal", path: "/demo/modal" },
        { title: "Icon", path: "/demo/icon" },
        { title: "Text Field", path: "/demo/textfield" },
        { title: "Image", path: "/demo/image" },
        { title: "Chips", path: "/demo/chips" },
        { title: "Video", path: "/demo/video" },
    ],
    nvCustom: [
        { title: "Ads", path: "/demo/ads" },
    ]
};

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