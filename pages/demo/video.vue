<template>
    <v-container>
        <h2 class="text-h5 mb-4">Video Player</h2>
        <VideoPlayerComponent videoSrc="https://youtu.be/Gvxl3CkID5Y?si=wo67a58OL9nLL-fb" title="Contoh Video" />
    </v-container>
</template>

<script setup>
import VideoPlayerComponent from "@/components/core/nvvideo.vue";
</script>