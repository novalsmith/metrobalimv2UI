<template>
    <v-container>
        <h2>Icon Demo</h2>
        <v-divider class="mb-4"></v-divider>

        <div class="d-flex justify-space-around">
            <v-row>
                <v-col cols="1" v-for="(iconData, index) in iconsValues" :key="'adv-' + index">
                    <NVIcon :icon="iconData.icon" :aria-hidden="iconData.ariaHidden" :color="iconData.color"
                        :size="iconData.size" />
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script setup>
import NVIcon from "~/components/core/nvicon.vue";

const iconsValues = [
    { icon: "mdi-home" },
    { icon: "mdi-fire" },
    { icon: "mdi-arrow-right" },
    { icon: "mdi-folder-open" },
    { icon: "mdi-widgets" },
    { icon: "mdi-gavel" },
    { icon: "mdi-tag" },
    { icon: "mdi-bookmark" },
    { icon: "mdi-book" },
    { icon: "mdi-account", size: 48 },
    { icon: "mdi-account-circle" },
    { icon: "mdi-alert-circle-outline" },
    { icon: "mdi-bell" },
    { icon: "mdi-calendar" },
    { icon: "mdi-camera" },
    { icon: "mdi-cart" },
    { icon: "mdi-check" },
    { icon: "mdi-chevron-down" },
    { icon: "mdi-clock", color: "success", size: 48, ariaHidden: false },
    { icon: "mdi-cloud" },
    { icon: "mdi-cog" },
    { icon: "mdi-content-copy" },
    { icon: "mdi-credit-card" },
    { icon: "mdi-delete" },
    { icon: "mdi-download" },
    { icon: "mdi-email" },
    { icon: "mdi-eye" },
    { icon: "mdi-file" },
    { icon: "mdi-filter" },
    { icon: "mdi-gift" },
    { icon: "mdi-heart" },
    { icon: "mdi-information-outline" },
];

definePageMeta({
    layout: "demo-default",
});
</script>