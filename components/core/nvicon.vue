<template>
    <v-icon :icon="icon" :aria-hidden="ariaHidden" />
</template>

<script setup>
defineProps({
    icon: {
        type: String,
        default: "mdi-check",
    },
    ariaHidden: {
        type: Boolean,
        default: false,
    },
});
</script>