<template>
    <v-container>
        <v-row>
            <v-col cols="6" v-for="image in images" :key="image.src">
                <v-responsive>
                    <NVImage v-if="image.src" :src="image.src" :alt="image.alt" :modifiers="image.modifiers"
                        :placeholder="true" />
                </v-responsive>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import NVImage from '@/components/demo/nvimg.vue';

const images = [
    {
        src: "https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp",
        alt: "Iklan 1",
        modifiers: {
            format: 'webp',
            quality: 80,
        },
    },
    {
        src: "https://metrobalim.net/wp-content/uploads/2025/02/IMG-20250218-WA0041-2048x1365.jpg",
        alt: "Iklan 2",
        modifiers: {
            format: 'webp',
            quality: 80,
        },
    },
    {
        src: "https://metrobalim.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-05.21.46_0b833506-768x922.jpg",
        alt: "Iklan 3",
        modifiers: {
            format: 'webp',
            quality: 80,
        },
    },
    // ... tambahkan gambar lainnya di sini
];

definePageMeta({
    layout: "demo-default",
});
</script>