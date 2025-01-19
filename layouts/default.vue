<template>
    <v-app>
        <!-- App Bar -->
        <v-app-bar app scroll-behavior="hide">
            <v-container>
                <v-row class="mt-2">
                    <v-col cols="1">
                        <!-- Menu Button -->
                        <v-btn size="large" icon @click="toggleMenu">
                            <v-icon aria-hidden="false">{{ menuIcon }}</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="2">
                        <v-img src="https://metrobalim.net/wp-content/uploads/2024/03/cropped-logo2-2048x623.png"
                            alt="TVOne News" />
                    </v-col>
                    <v-col cols="7">
                        <v-text-field class="mt-2" density="compact" variant="solo-filled" rounded
                            prepend-inner-icon="mdi-magnify" label="Search"></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <v-btn icon @click="toggleTheme">
                            <v-icon aria-hidden="false">mdi-bookmark-outline</v-icon>
                        </v-btn>
                        <v-btn class="align-right" icon @click="toggleTheme">
                            <v-icon :icon="currentThemeIcon" aria-hidden="false"></v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>
        <v-app-bar dense flat>
            <v-container class="d-flex justify-space-between align-center">
                <div class="d-flex">
                    <v-img src="https://via.placeholder.com/50x20" max-height="20" contain class="ml-4 mr-2"></v-img>
                    <v-btn v-for="(region, i) in regions" :key="i" text class="text-capitalize">
                        {{ region }}
                    </v-btn>
                </div>
            </v-container>
        </v-app-bar>

        <!-- Side Menu -->
        <v-navigation-drawer v-model="sideMenu" app temporary>
            <v-list>
                <v-list-item v-for="(region, i) in regions" :key="i" @click="navigate(region)">
                    <v-list-item-title>{{ region }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <!-- Main Content -->
        <v-main>
            <NuxtPage />
        </v-main>

        <!-- Footer -->
        <v-footer>
            <v-col class="text-center py-3">
                <span>&copy; 2025 Metrobalim. All Rights Reserved.</span>
            </v-col>
        </v-footer>
    </v-app>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTheme } from 'vuetify';

// Theme logic
const theme = useTheme();
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

// Reactive data
const sideMenu = ref(false);
const menuIcon = computed(() => (sideMenu.value ? 'mdi-close' : 'mdi-menu'));
const regions = ref([
    "Tanah Papua",
    "Regional",
    "Internasional",
    "Podcast",
    "Jurnal",
    "Sastra",
    "Bisnis",
    "HIV-AIDS",
    "Insight",
    "Peristiwa",
    "Video",
    "Lainnya",
]);

const currentThemeIcon = computed(() => {
    return theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-brightness-7';
});

// Methods
function toggleMenu() {
    sideMenu.value = !sideMenu.value;
}

function navigate(region) {
    console.log(`Navigating to ${region}`);
    sideMenu.value = false; // Close menu after navigation
}
</script>

<style scoped>
.v-navigation-drawer {
    width: 250px;
}
</style>
