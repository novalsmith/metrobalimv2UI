<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-responsive>
                    <v-img cover max-height="300" :lazy-src="adsData">
                        <NuxtImg preload loading="lazy" class="rounded-lg mb-2" height="300" :src="adsData" />
                    </v-img>
                </v-responsive>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
const adsData = "https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp";
</script>