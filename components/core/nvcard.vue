<template>
    <v-card :elevation="elevation" class="pa-4 mb-3">
        <v-card-title v-if="title || $slots.title">
            <slot name="title">
                {{ title }}
            </slot>
        </v-card-title>

        <v-card-text v-if="content || $slots.default">
            <slot>
                {{ content }}
            </slot>
        </v-card-text>

        <v-card-actions v-if="$slots.actions">
            <slot name="actions"></slot>
        </v-card-actions>
    </v-card>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        default: "Default Title",
    },
    content: {
        type: String,
        default: "",
    },
    elevation: {
        type: Number,
        default: 2,
    },
});
</script>