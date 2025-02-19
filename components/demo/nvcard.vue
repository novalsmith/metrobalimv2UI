<template>
    <v-card v-bind="config" class="pa-4 mb-3">

        <!-- Title -->
        <v-card-title v-if="config.title || $slots.title">
            <slot name="title">
                {{ config.title }}
            </slot>
        </v-card-title>

        <!-- Content -->
        <v-card-text v-if="config.content || $slots.default">
            <slot>
                {{ config.content }}
            </slot>
        </v-card-text>

        <!-- Actions -->
        <v-card-actions v-if="$slots.actions">
            <slot name="actions"></slot>
        </v-card-actions>

    </v-card>
</template>

<script setup>
defineProps({
    config: {
        type: Object,
        default: () => ({
            title: "Default Title",
            content: "",
            elevation: 2,
        }),
    }
});
</script>
