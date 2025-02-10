<template>
    <v-app app>
        <!-- App Bar -->
        <v-app-bar>
            <v-container>
                <v-row align="center" justify="space-between">
                    <!-- Logo -->
                    <v-col cols="3" class="d-flex justify-start align-center">
                        <v-skeleton-loader v-if="isLoading" type="image" width="150" height="40" />
                        <v-img v-else aspect-ratio="4"
                            src="https://metrobalim.net/wp-content/uploads/2024/03/cropped-logo2-2048x623.png"
                            alt="Metrobalim News" />
                    </v-col>

                    <!-- Search Bar -->
                    <v-col cols="6" class="d-flex justify-center align-center">
                        <v-skeleton-loader v-if="isLoading" type="text" width="100%" height="40" />
                        <v-text-field v-else class="mt-9" density="compact" variant="solo-filled" rounded
                            prepend-inner-icon="mdi-magnify" label="Search">
                        </v-text-field>
                    </v-col>

                    <!-- Right Buttons -->
                    <v-col cols="3" class="d-flex justify-end align-center">
                        <v-skeleton-loader v-if="isLoading" type="image" width="150" height="40" />
                        <div v-else class="mt-5">
                            <v-btn>
                                <v-icon icon="mdi-mail"></v-icon> Subscribe
                            </v-btn>
                            <v-btn icon>
                                <v-icon icon="mdi-bookmark-outline"></v-icon>
                            </v-btn>
                            <v-btn icon @click="toggleTheme" class="mr-2">
                                <v-icon :icon="currentThemeIcon"></v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>

        <!-- App Bar Menu -->
        <v-app-bar dense flat class="border-bottom">
            <v-container class="d-flex justify-space-between align-center">
                <template v-if="isLoading">
                    <v-skeleton-loader type="text" width="100%" height="40" />
                </template>
                <template v-else>
                    <v-btn v-for="(region, i) in menus" :key="i" variant="text" class="text-capitalize"
                        :to="region.link">
                        {{ region.title }}
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn variant="text" @click="toggleMenu">
                        Lainnya <v-icon>{{ menuIcon }}</v-icon>
                    </v-btn>
                </template>
            </v-container>
        </v-app-bar>

        <!-- Side Menu -->
        <v-navigation-drawer v-model="sideMenu" temporary location="top" color="blue">
            <v-container>
                <v-list>
                    <v-list-item v-for="(region, i) in regions" :key="i" @click="navigate(region)">
                        <v-list-item-title>{{ region.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-container>
        </v-navigation-drawer>

        <!-- Main Content -->
        <v-main>
            <!-- <NuxtPage /> -->
            <slot /> <!-- Pastikan ini ada -->
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
import { ref, computed, onMounted } from 'vue';
import { useTheme } from 'vuetify';

// Theme logic
const theme = useTheme();
const isLoading = ref(true);
const sideMenu = ref(false);

const toggleTheme = () => {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};

const menuIcon = computed(() => (sideMenu.value ? 'mdi-close' : 'mdi-menu'));
const currentThemeIcon = computed(() => theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-brightness-7');

const menus = ref([
    {
        title: "Tanah Papua",
        icon: "mdi-map-marker",
        link: "/tanah-papua",
        badge: null
    },
    {
        title: "Regional",
        icon: "mdi-earth",
        link: "/regional",
        badge: null
    },
    {
        title: "Internasional",
        icon: "mdi-web",
        link: "/internasional",
        badge: "NEW"
    },
    {
        title: "Podcast",
        icon: "mdi-podcast",
        link: "/podcast",
        badge: null
    },
    {
        title: "Jurnal",
        icon: "mdi-newspaper",
        link: "/jurnal",
        badge: null
    },
    {
        title: "Sastra",
        icon: "mdi-book-open-page-variant",
        link: "/sastra",
        badge: null
    },
    {
        title: "Bisnis",
        icon: "mdi-chart-bar",
        link: "/bisnis",
        badge: "HOT"
    },
    {
        title: "HIV-AIDS",
        icon: "mdi-ribbon",
        link: "/hiv-aids",
        badge: null
    },
    {
        title: "Insight",
        icon: "mdi-lightbulb-on",
        link: "/insight",
        badge: null
    },
    {
        title: "Peristiwa",
        icon: "mdi-alert-circle",
        link: "/peristiwa",
        badge: "UPDATE"
    },
    {
        title: "Video",
        icon: "mdi-video",
        link: "/video",
        badge: null
    }
]);


const regions = ref([
    {
        title: "Tanah Papua",
        icon: "mdi-map-marker",
        link: "/tanah-papua",
        badge: null
    },
    {
        title: "Regional",
        icon: "mdi-earth",
        link: "/regional",
        badge: null
    },
    {
        title: "Internasional",
        icon: "mdi-web",
        link: "/internasional",
        badge: "NEW"
    },
    {
        title: "Podcast",
        icon: "mdi-podcast",
        link: "/podcast",
        badge: null
    },
    {
        title: "Jurnal",
        icon: "mdi-newspaper",
        link: "/jurnal",
        badge: null
    },
    {
        title: "Sastra",
        icon: "mdi-book-open-page-variant",
        link: "/sastra",
        badge: null
    },
    {
        title: "Bisnis",
        icon: "mdi-chart-bar",
        link: "/bisnis",
        badge: "HOT"
    },
    {
        title: "HIV-AIDS",
        icon: "mdi-ribbon",
        link: "/hiv-aids",
        badge: null
    },
    {
        title: "Insight",
        icon: "mdi-lightbulb-on",
        link: "/insight",
        badge: null
    },
    {
        title: "Peristiwa",
        icon: "mdi-alert-circle",
        link: "/peristiwa",
        badge: "UPDATE"
    },
    {
        title: "Video",
        icon: "mdi-video",
        link: "/video",
        badge: null
    }
]);

// Simulate data loading
onMounted(() => {
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
});

// Methods
const toggleMenu = () => {
    sideMenu.value = !sideMenu.value;
};

const navigate = (region) => {
    console.log(`Navigating to ${region}`);
    sideMenu.value = false;
};
</script>

<style scoped>
.v-navigation-drawer {
    width: 250px;
}

.v-btn {
    font-size: 14px;
    padding: 10px;
}

.v-btn--flat {
    text-transform: none;
}

.text-right {
    text-align: right;
}
</style>
