<template>
    <v-chip :text="text" :color="color" :variant="variant" :size="size" :pill="pill" :closable="closable"
        :prepend-icon="prependIcon" :append-icon="appendIcon" :ripple="ripple" :disabled="disabled" :class="customClass"
        @click="handleClick" @click:close="handleClose" />
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    text: { type: String, required: false, default: "Tag" },
    color: { type: String, required: false, default: "primary" }, // Warna chip
    variant: { type: String, required: false, default: "flat" }, // Variant: 'elevated', 'flat', 'outlined', 'text', 'tonal'
    size: { type: [String, Number], required: false, default: "default" }, // Ukuran: 'x-small', 'small', 'default', 'large', 'x-large'
    pill: { type: Boolean, required: false, default: false }, // Membulatkan chip
    closable: { type: Boolean, required: false, default: false }, // Menampilkan tombol close
    prependIcon: { type: String, required: false, default: null }, // Ikon di awal chip
    appendIcon: { type: String, required: false, default: null }, // Ikon di akhir chip
    ripple: { type: Boolean, required: false, default: true }, // Efek ripple saat diklik
    disabled: { type: Boolean, required: false, default: false }, // Menonaktifkan chip
    customClass: { type: String, required: false, default: "" }, // Kelas tambahan untuk styling
});

const emit = defineEmits(["click", "close"]);

const handleClick = () => {
    emit("click");
};

const handleClose = () => {
    emit("close");
};
</script>

<style scoped>
/* Tambahkan styling tambahan di sini jika diperlukan */
</style>
