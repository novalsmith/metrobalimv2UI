<template>
    <v-container>
        <div class="text-h5 mb-4 d-flex align-center">
            <v-icon class="mr-2">mdi-video</v-icon> Live Update
        </div>
        <v-row>
            <!-- Playlist Video -->
            <v-col md="5" sm="12" lg="5">
                <v-list>
                    <v-list-item v-for="(video, index) in articles" :key="index" @click="selectVideo(video)"
                        class="video-list-item" :class="{ 'active-video': currentVideo.title === video.title }">

                        <v-row>
                            <v-col cols="4">
                                <v-img height="80" :lazy-src="video.image" class="video-thumbnail article-image">
                                    <NuxtImg v-if="video.image" loading="lazy" placeholder :src="video.image" />
                                    <div class="overlay-small">
                                        <v-icon class="play-icon" color="white">mdi-play-circle-outline</v-icon>
                                    </div>
                                </v-img>
                            </v-col>
                            <v-col cols="8">
                                <v-list-item-title class="truncated-title">
                                    {{ video.title }}
                                </v-list-item-title>
                                <v-list-item-subtitle>1 Jam yang lalu</v-list-item-subtitle>
                            </v-col>
                        </v-row>
                    </v-list-item>
                </v-list>
            </v-col>

            <!-- Pemutar Video Utama -->
            <v-col md="7" sm="12" lg="7">
                <v-card>
                    <NVVideo :videoSrc="currentVideo.videoUrl" />
                    <v-card-title class="text-wrap text-h6 truncated-title">
                        {{ currentVideo.title }}
                    </v-card-title>
                    <v-card-actions class="d-flex align-center justify-space-between">
                        <v-btn text small color="primary">Tanah Papua</v-btn>
                        <span class="text-caption ml-2">1 Jam yang lalu</span>
                        <v-spacer></v-spacer>
                        <v-btn text @click="toggleLike(currentVideo)">
                            <v-icon :color="currentVideo.isLike ? 'red' : ''">
                                {{ currentVideo.isLike ? 'mdi-heart' : 'mdi-heart-outline' }}
                            </v-icon>
                            {{ currentVideo.like }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";
import NVVideo from '@/components/core/nvvideo.vue'

// Data daftar video
const articles = ref([]);
const currentVideo = ref({});
const isVideoPlaying = ref(false); // Menandakan apakah video sedang diputar



// Inisialisasi data
onMounted(() => {
    articles.value = [
        {
            title: "Gubernur Papua Pegunungan, Jhon Tabo: Jabatan ASN Harus Sesuai Aturan Negara.",
            image: getThumbnail("https://www.youtube.com/watch?v=SrGsyhxzo6s"),
            videoUrl: convertToEmbedUrl("https://www.youtube.com/watch?v=SrGsyhxzo6s"),
            isLike: true,
            like: 200
        },
        {
            title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
            image: getThumbnail("https://www.youtube.com/watch?v=Gvxl3CkID5Y"),
            videoUrl: convertToEmbedUrl("https://www.youtube.com/watch?v=Gvxl3CkID5Y"),
            isLike: true,
            like: 200
        },
        {
            title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
            image: getThumbnail("https://www.youtube.com/watch?v=KpflazB9i1c"),
            videoUrl: convertToEmbedUrl("https://www.youtube.com/watch?v=KpflazB9i1c"),
            isLike: false,
            like: 200
        }
    ];

    // Set video pertama sebagai default
    currentVideo.value = { ...articles.value[0] };
});


// Fungsi untuk konversi URL ke embed YouTube dengan autoplay
const convertToEmbedUrl = (url) => {
    if (!url.includes("embed")) {
        const videoId = url.split("v=")[1]?.split("&")[0];
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return `${url}?autoplay=1`;
};

const getThumbnail = (url) => {
    if (!url.includes("embed")) {
        const videoId = url.split("v=")[1]?.split("&")[0];
        return `https://img.youtube.com/vi/${videoId}/0.jpg`;
    }
    return `${url}?autoplay=1`;
};

// Ganti video utama saat diklik di playlist
const selectVideo = (video) => {
    currentVideo.value = {
        ...video,
        videoUrl: convertToEmbedUrl(video.videoUrl) // Tambahkan autoplay
    };
    isVideoPlaying.value = true; // Langsung ganti ke iframe dan putar video
};

// Saat thumbnail diklik, langsung putar video
const playVideo = () => {
    isVideoPlaying.value = true;
    currentVideo.value.videoUrl = convertToEmbedUrl(currentVideo.value.videoUrl); // Pastikan autoplay aktif
};




// Toggle like
const toggleLike = (video) => {
    video.isLike = !video.isLike;
    video.like += video.isLike ? 1 : -1;
};
</script>

<style scoped>
.video-thumbnail {
    position: relative;
    cursor: pointer;
}

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

.overlay-small {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.play-icon {
    font-size: 2rem;
}

.video-list-item {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
    transition: background 0.2s;
}

.video-list-item:hover {
    background: rgba(0, 0, 0, 0.05);
}

.article-image {
    border-radius: 8px;
}

.article-image img {
    object-fit: contain;
    width: 100%;
}

.truncated-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}

.active-video {
    background: rgba(33, 150, 243, 0.2);
    border-left: 4px solid #2196f3;
    transition: background 0.3s, border-left 0.3s;
}
</style>
