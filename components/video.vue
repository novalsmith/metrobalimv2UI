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
                    <v-responsive>
                        <v-img height="400" cover :lazy-src="currentVideo.image" class="article-image video-thumbnail">
                            <NuxtImg v-if="currentVideo.image" loading="lazy" preload :src="currentVideo.image" />
                            <div class="overlay">
                                <v-icon class="play-icon" color="white" size="80">mdi-play-circle-outline</v-icon>
                            </div>
                        </v-img>
                    </v-responsive>
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

const articles = ref([]);
const currentVideo = ref({});

// Inisialisasi data
onMounted(() => {
    articles.value = [
        {
            title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
            subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
            image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
            isLike: true,
            like: 200
        },
        {
            title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
            image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
            like: 200,
            isLike: false
        },
        {
            title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik",
            image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
            like: 150,
            isLike: false
        },
        {
            title: "ULMWP Salurkan Bantuan untuk Pengungsi di Nduga",
            image: "https://metrobalim.net/wp-content/uploads/2025/01/1.png",
            like: 50,
            isLike: false
        },
        {
            title: "Pemberhentian Pegawai Honorer di Papua Pegunungan Picu Protes",
            image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250113-WA0039.jpg",
            like: 75,
            isLike: false
        },
        {
            title: "Refleksi Perjalanan Tahun 2024: Membangun Fondasi Papua",
            image: "https://metrobalim.net/wp-content/uploads/2025/01/1-1-1024x576.png",
            like: 30,
            isLike: false
        }
    ];

    // Set video pertama sebagai default
    currentVideo.value = { ...articles.value[0] };
});

// Ganti video utama saat diklik di playlist
const selectVideo = (video) => {
    currentVideo.value = { ...video };
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
    /* Fallback properti */
    /* Limit to 3 lines */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}

.active-video {
    background: rgba(33, 150, 243, 0.2);
    /* Warna biru terang */
    border-left: 4px solid #2196f3;
    /* Garis tepi untuk menandai video aktif */
    transition: background 0.3s, border-left 0.3s;
}
</style>
