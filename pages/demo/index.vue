<template>
    <v-container>
        <div>Welcome to Kitchen Sync Components </div>
        <div>this component build with <nuxt-link to="https://vuetifyjs.com/en/components/all/#containment">Vuetify
                js</nuxt-link></div>

    </v-container>
</template>


<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

definePageMeta({
    layout: "demo-default",
});
</script>
