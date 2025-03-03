<template>

    <ScriptYouTubePlayer :videoId="videoId">
        <template #awaitingLoad>
            <div class="overlay">
                <v-icon class="play-icon" color="white" size="80">mdi-play-circle-outline</v-icon>
            </div>

        </template>
    </ScriptYouTubePlayer>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
    videoSrc: String
});

// Ekstrak ID video dari URL
const videoId = computed(() => {
    if (!props.videoSrc) return "";
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = props.videoSrc.match(regExp);
    return match && match[1] ? match[1] : props.videoSrc;
});
</script>

<style scoped>
.overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>