<template>


    <h2>Ads</h2>
    <v-row>
        <v-col cols="12">
            <v-card>
                <Ads src="https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp"
                    alt="Iklan Metro Bali" width="100%" height="200" format="webp" quality="80" fit="cover"
                    :modifiers="{ format: 'webp', quality: 80, height: 200 }" maxHeight="300"
                    @click="handleImageAdClick" />
            </v-card>
        </v-col>

        <v-col cols="4">
            <v-card>
                <Ads src="https://metrobalim.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-05.21.46_0b833506-768x922.jpg"
                    alt="Iklan Metro Bali" :modifiers="{ format: 'webp', quality: 80 }" @click="handleImageAdClick" />

            </v-card>
        </v-col>
        <v-col cols="4">
            <v-card>
                <Ads src="https://metrobalim.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-05.21.46_0b833506-768x922.jpg"
                    alt="Iklan Metro Bali" :modifiers="{ format: 'webp', quality: 80 }" @click="handleImageAdClick" />

            </v-card>
        </v-col>
        <v-col cols="4">
            <v-card>
                <Ads src="https://metrobalim.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-05.21.46_0b833506-768x922.jpg"
                    alt="Iklan Metro Bali" :modifiers="{ format: 'webp', quality: 80 }" @click="handleImageAdClick" />

            </v-card>
        </v-col>
    </v-row>


</template>

<script setup>
import Ads from "@/components/ads.vue";

definePageMeta({
    layout: "demo-default",
});
</script>