<template>
    <v-card class="px-2 py-2 custom-card" elevation="0">
        <!-- Header -->
        <v-card-title class="d-flex align-center justify-space-between">
            <span class="text-h6">{{ title }}</span>
            <v-btn variant="text" @click="$emit('refresh')">
                More <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
        </v-card-title>

        <v-divider></v-divider>

        <!-- Isi Card -->
        <v-card-text>
            <slot></slot>
        </v-card-text>
    </v-card>
</template>

<script setup>
defineProps({
    title: String
});
</script>

<style scoped>
.custom-card {
    /* padding: 10px; */
    /* border-radius: 25px; */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
