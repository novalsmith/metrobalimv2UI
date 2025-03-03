<template>


    <v-container>
        <h2>Images</h2>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <NVImage v-if="images[0].src" :src="images[0].src" :alt="images[0].alt"
                        :modifiers="images[0].modifiers" :placeholder="true" />
                </v-card>
            </v-col>

            <v-col cols="4">
                <v-card>
                    <NVImage v-if="images[1].src" :src="images[1].src" :alt="images[1].alt"
                        :modifiers="images[1].modifiers" :placeholder="true" />
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card>
                    <NVImage v-if="images[2].src" :src="images[2].src" :alt="images[2].alt"
                        :modifiers="images[2].modifiers" :placeholder="true" />

                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card>
                    <NVImage v-if="images[2].src" :src="images[2].src" :alt="images[2].alt"
                        :modifiers="images[2].modifiers" :placeholder="true" />
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import NVImage from '~/components/core/nvimg.vue';

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