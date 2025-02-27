<template>
    <v-icon v-bind="config" :aria-hidden="config.ariaHidden || false" />
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    config: {
        type: Object,
        default: () => ({
            icon: 'mdi-check',
        })
    },
});

</script>