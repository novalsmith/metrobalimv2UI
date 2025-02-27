<template>
    <v-card class="video-container">
        <v-responsive>
            <div v-if="!isPlaying" class="thumbnail-container" @click="loadIframe">
                <img :src="thumbnailUrl" class="video-thumbnail" alt="Thumbnail Video" />
                <div class="play-button">
                    <v-icon size="50" color="white">mdi-play-circle</v-icon>
                </div>
            </div>
            <iframe v-else class="video-iframe" :src="embedUrl" frameborder="0" allowfullscreen loading="lazy"></iframe>
        </v-responsive>
        <v-card-title class="text-h6">{{ title }}</v-card-title>
    </v-card>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    videoSrc: String,
    title: String,
});

const isPlaying = ref(false);

// Ekstrak ID video dari URL
const videoId = computed(() => {
    if (!props.videoSrc) return "";
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = props.videoSrc.match(regExp);
    return match && match[1] ? match[1] : "";
});

// URL thumbnail dari YouTube
const thumbnailUrl = computed(() => `https://img.youtube.com/vi/${videoId.value}/hqdefault.jpg`);

// URL embed YouTube
const embedUrl = computed(() => `https://www.youtube.com/embed/${videoId.value}?autoplay=1`);

// Load iframe saat thumbnail diklik
const loadIframe = () => {
    isPlaying.value = true;
};
</script>

<style scoped>
.video-container {
    max-width: 600px;
    margin: auto;
    position: relative;
}

.thumbnail-container {
    position: relative;
    cursor: pointer;
}

.video-thumbnail {
    width: 100%;
    border-radius: 8px;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    padding: 10px;
}
</style>