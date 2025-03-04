<template>
    <v-app-bar fixed app height="150">
        <v-container>
            <v-row align="center" justify="space-between">
                <v-col cols="auto" class="d-flex align-center">
                    <v-btn v-if="showDrawerIcon" icon @click="drawer = !drawer">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                    <slot name="left">
                        <Ads :src="imgLogo" alt="Iklan Metro Bali"
                            :modifiers="{ format: 'webp', quality: 80, width: 200 }" />
                    </slot>
                </v-col>
                <v-col cols="6" class="d-flex justify-center align-center">
                    <v-text-field class="mt-3" density="compact" variant="solo-filled" rounded
                        prepend-inner-icon="mdi-magnify" label="Search">
                    </v-text-field>
                </v-col>
                <v-col cols="auto" class="d-flex align-center">
                    <slot name="right">
                        <v-btn variant="text">
                            <v-icon>mdi-mail</v-icon> Subscribe
                        </v-btn>
                        <v-btn variant="text">
                            <v-icon icon="mdi-bookmark-outline"></v-icon>
                        </v-btn>
                        <v-btn variant="text" @click="toggleTheme" class="mr-2">
                            <v-icon :icon="currentThemeIcon"></v-icon>
                        </v-btn>
                    </slot>
                </v-col>
                <v-col cols="12">
                    <slot name="bottom">
                        <template v-if="isLoading">
                            <v-skeleton-loader type="text" width="100%" height="40" />
                        </template>
                        <template v-else>
                            <div class="menu-container">
                                <div class="menu-items">
                                    <v-btn v-for="(menu, i) in visibleMenus" :key="i" variant="text"
                                        class="text-capitalize menu-item" :to="menu.categoryId">
                                        {{ menu.title }}
                                    </v-btn>
                                </div>
                                <!-- <v-btn v-if="showMoreButton" variant="text" @click="toggleMenu">
                                    Lainnya <v-icon>{{ menuIcon }}</v-icon>
                                </v-btn> -->
                            </div>
                        </template>
                    </slot>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
        <v-list nav>
            <v-list-item v-for="(menu, i) in hiddenMenus" :key="i" :to="menu.categoryId">
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue';
import Ads from "~/components/Ads.vue";
import { useTheme } from 'vuetify';

const props = defineProps({
    imgLogo: { type: String, required: true },
    isLoading: { type: Boolean, required: true },
    menus: { type: Array, required: true },
    toggleMenu: { type: Function, required: true },
});

const theme = useTheme();
const drawer = ref(false);
const currentThemeIcon = computed(() => theme.global.current.value.dark ? 'mdi-weather-night' : 'mdi-brightness-7');
const menuIcon = computed(() => (drawer.value ? 'mdi-close' : 'mdi-menu'));

const visibleMenus = ref([]);
const hiddenMenus = ref([]);
const showDrawerIcon = ref(false);
const showMoreButton = ref(false);

onMounted(() => {
    updateMenus();
});
const maxMenu = 12;
const updateMenus = () => {
    visibleMenus.value = props.menus.slice(0, maxMenu);
    hiddenMenus.value = props.menus.slice(maxMenu);
    showMoreButton.value = props.menus.length > maxMenu;
    showDrawerIcon.value = props.menus.length > maxMenu;
};

const toggleMenu = () => {
    drawer.value = !drawer.value;
};
</script>

<style scoped>
.menu-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
    justify-content: space-between;
    align-items: center;
}

.menu-items {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
}

.menu-item {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
</style>