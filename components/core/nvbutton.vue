<template>
    <v-btn v-bind="config" @click="handleClick">
        <slot name="prepend" v-if="$slots.prepend">
        </slot>

        <slot>{{ config.text }}</slot>

        <slot name="append" v-if="$slots.append">

        </slot>
    </v-btn>
</template>

<script setup>
defineProps({
    config: {
        type: Object,
        default: () => ({
            text: "Button",
            color: "primary",
            variant: "text",
            size: "default",
            icon: false,
            block: false,
            disabled: false,
            loading: false,
            elevation: 0,
            prependIcon: null,
            appendIcon: null
        }),
    }
});

const emit = defineEmits(["click"]);

const handleClick = () => {
    emit("click");
};
</script>
