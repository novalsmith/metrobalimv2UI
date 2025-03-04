<template>
    <v-btn :color="color" :variant="variant" :size="size" :icon="icon" :block="block" :disabled="disabled"
        :loading="loading" :elevation="elevation" @click="handleClick">
        <slot name="prepend" v-if="$slots.prepend"></slot>

        <slot>{{ text }}</slot>

        <slot name="append" v-if="$slots.append"></slot>
    </v-btn>
</template>

<script setup>
defineProps({
    text: {
        type: String,
        default: "Button",
    },
    color: {
        type: String,
        default: "primary",
    },
    variant: {
        type: String,
        default: "text",
    },
    size: {
        type: String,
        default: "default",
    },
    icon: {
        type: Boolean,
        default: false,
    },
    block: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    loading: {
        type: Boolean,
        default: false,
    },
    elevation: {
        type: Number,
        default: 0,
    },
    prependIcon: {
        type: String,
        default: null,
    },
    appendIcon: {
        type: String,
        default: null,
    },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
    emit("click");
};
</script>