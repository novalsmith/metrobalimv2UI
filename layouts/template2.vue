<template>
    <v-app>

        <v-app-bar app scroll-behavior="hide">
            <v-container>
                <v-row class="mt-2">
                    <v-col cols="1">

                        <v-btn size="large" icon @click="toggleTheme"> <v-icon aria-hidden="false">
                                mdi-menu
                            </v-icon>

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
                    <v-col cols=" 2">

                        <v-btn icon @click="toggleTheme"> <v-icon aria-hidden="false">
                                mdi-bookmark-outline
                            </v-icon>
                        </v-btn>
                        <v-btn class="align-right" icon @click="toggleTheme">
                            <v-icon :icon="currentThemeIcon" aria-hidden="false"></v-icon>
                        </v-btn>

                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <!-- <v-divider color="primary"></v-divider> -->
        <!-- Secondary App Bar -->
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
import { ref } from 'vue';
import { useTheme } from 'vuetify';

// Theme logic
const theme = useTheme();
function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

// Data
const searchQuery = ref('');
const categories = ref([
    "Nasional",
    "Internasional",
    "Ekonomi",
    "Olahraga",
    "Teknologi",
    "Hiburan",
]);

const regions = ref([
    "Tanah Papua",
    "Regional",
    "Internasional",
    "Podcas",
    "Jurnal",
    "Sastra",
    "Bisnis",
    "HIV-AIDS",
    "Insight",
    "Peristiwa",
    "Video",
    "Lainnya",
]);

// Computed properties (Correct way in <script setup>)
const currentThemeIcon = computed(() => {
    return theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-brightness-7';
});

const isDarkTheme = computed(() => {
    return theme.global.current.value.dark;
});

</script>

<style scoped>
.v-card {
    margin-bottom: 16px;
}

.featured-article {
    border: 2px solid #1976d2;
}

.article-card:hover {
    transform: translateY(-2px);
    transition: 0.3s ease-in-out;
}

.search-bar {
    max-width: 300px;
}
</style>
