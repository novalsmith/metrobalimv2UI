<template>
    <v-responsive @click="handleClick" fill-width>
        <nvimg :src="src" :alt="alt" width="100%" :height="height" :format="format" :quality="quality" :fit="fit"
            :modifiers="modifiers" />
    </v-responsive>
</template>

<script setup>
import nvimg from '@/components/core/nvimg.vue';

const props = defineProps({
    src: { type: String, required: true },
    alt: { type: String, required: false, default: "Iklan" },
    width: { type: [String, Number], required: false, default: "100%" },
    height: { type: [String, Number], required: false, default: "auto" },
    format: { type: String, required: false, default: "webp" },
    quality: { type: [String, Number], required: false, default: 80 },
    fit: { type: String, required: false, default: "cover" },
    modifiers: { type: Object, required: false, default: () => ({}) },
    maxWidth: { type: [String, Number], required: false, default: null },
    maxHeight: { type: [String, Number], required: false, default: null },
});

const emit = defineEmits(["click"]);

const handleClick = () => {
    emit("click");
};
</script>