<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-responsive>
                    <v-skeleton-loader type="image" :loading="loading">
                        <v-img cover max-height="300">
                            <NuxtImg class="rounded-lg mb-2" height="300"
                                src="https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp" />
                        </v-img>
                    </v-skeleton-loader>
                </v-responsive>
            </v-col>
        </v-row>
    </v-container>

    <!-- Topik Populer -->
    <v-container>
        <v-skeleton-loader :loading="loading" type="text">
            <v-row>
                <v-col cols="2">
                    <div class="text-h6 mb-4">
                        <v-icon>mdi-pound</v-icon> Topik Populer
                    </div>
                </v-col>
                <v-col cols="10">
                    <v-skeleton-loader v-if="loading" type="text" width="100%" height="40" />
                    <v-chip-group v-else class="text-primary">
                        <v-chip v-for="tag in tags" :key="tag" class="rounded" :text="tag"></v-chip>
                    </v-chip-group>
                </v-col>
            </v-row>
        </v-skeleton-loader>
    </v-container>

    <!-- Artikel Utama -->
    <v-container>
        <v-row align="stretch">
            <v-col md="6" sm="12" lg="6">
                <v-hover v-slot:default="{ isHovering }">
                    <v-skeleton-loader :loading="loading" type="image, card-avatar, article">
                        <v-card class="article-card h-100" :class="{ 'on-hover': isHovering }">
                            <v-responsive>
                                <!-- <v-img v-if="articles.length" cover max-height="400">
                                    <NuxtImg class="rounded-lg mb-2" :src="articles[0].image" />
                                </v-img> -->
                                <v-img height="400" cover>
                                    <NuxtImg preset="headlineMain" v-if="articles[0]?.image"
                                        :src="articles[0]?.image" />
                                </v-img>
                            </v-responsive>
                            <v-card-title class="text-wrap text-h6">
                                {{ articles[0]?.title }}
                            </v-card-title>
                            <v-card-actions class="d-flex align-center justify-space-between">
                                <v-btn text small color="primary">Tanah Papua</v-btn>
                                <span class="text-caption ml-2">1 Jam yang lalu</span>
                                <v-spacer></v-spacer>
                                <v-btn text>
                                    <v-icon v-if="articles[0]?.isLike" color="red">mdi-heart</v-icon>
                                    <v-icon v-else>mdi-heart-outline</v-icon>
                                    {{ articles[0]?.like }}
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-skeleton-loader>
                </v-hover>
            </v-col>

            <!-- Artikel Sampingan -->
            <v-col md="6" sm="12" lg="6">
                <v-row dense align="stretch">
                    <v-col v-for="index in 3" :key="index" cols="12">
                        <v-skeleton-loader v-if="loading" type="card-avatar" height="239"></v-skeleton-loader>
                        <v-hover v-else v-slot:default="{ isHovering }">
                            <v-card class="article-card h-100" :class="{ 'on-hover': isHovering }">
                                <v-row no-gutters>
                                    <v-col cols="12" md="6">
                                        <v-card-title class="truncated-title text-h6">
                                            <NuxtLink to="/" class="text-decoration-none text-primary">
                                                {{ articles[index]?.title }}
                                            </NuxtLink>
                                        </v-card-title>

                                    </v-col>
                                    <v-col cols="12" md="6">

                                        <v-img class="article-image" height="120">
                                            <NuxtImg preset="headlineSub" v-if="articles[index]?.image"
                                                :src="articles[index]?.image" />
                                        </v-img>



                                        <!-- <v-img class="article-image" max-height="120">
                                            <NuxtImg preset="headlineSub" v-if="articles[index]?.image"
                                                :src="articles[index]?.image" />
                                        </v-img> -->

                                    </v-col>
                                    <v-col cols="12">
                                        <v-card-actions class="d-flex align-center justify-space-between">
                                            <v-btn text small color="primary">Tanah Papua</v-btn>
                                            <span class="text-caption">1 Jam yang lalu</span>
                                            <v-spacer></v-spacer>
                                            <v-btn text>
                                                <v-icon v-if="articles[index]?.isLike" color="red">mdi-heart</v-icon>
                                                <v-icon v-else>mdi-heart-outline</v-icon>
                                                {{ articles[index]?.like }}
                                            </v-btn>
                                        </v-card-actions>
                                    </v-col>
                                </v-row>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <!-- Iklan -->
        <v-row>
            <v-col cols="12">
                <v-responsive>
                    <v-skeleton-loader type="image" :loading="loading">
                        <v-img cover max-height="300">
                            <NuxtImg class="rounded-lg mb-2" height="300"
                                src="https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp" />
                        </v-img>
                    </v-skeleton-loader>
                </v-responsive>
            </v-col>
        </v-row>
    </v-container>

    <!-- Artikel Terbaru -->
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" md="7">
                <div class="mb-8">
                    <div class="text-h5 mb-4 d-flex align-center">
                        <v-icon class="mr-2">mdi-newspaper-variant-multiple-outline</v-icon> Terbaru
                    </div>
                    <v-row v-if="loading">
                        <v-col v-for="a in 10" :key="a" cols="12">
                            <v-skeleton-loader type="card"></v-skeleton-loader>
                        </v-col>
                    </v-row>
                    <v-row v-else>
                        <v-col v-for="(item, index) in articles.slice(3, 10)" :key="index" cols="12">
                            <v-hover v-slot:default="{ isHovering }">
                                <v-card class="article-card" :class="{ 'on-hover': isHovering }">
                                    <v-row no-gutters>
                                        <v-col cols="12" md="5">
                                            <NuxtLink :to="`/artikel/${item.slug}`">
                                                <v-img class="article-image" max-height="150">
                                                    <NuxtImg preset="article" v-if="item.image" :src="item.image" />
                                                </v-img>
                                            </NuxtLink>
                                        </v-col>
                                        <v-col cols="12" md="7" class="d-flex flex-column justify-space-between">
                                            <v-card-title class="text-h6 text-wrap">
                                                <NuxtLink :to="`/artikel/${item.slug}`"
                                                    class="text-decoration-none text-primary">
                                                    {{ item.title }}
                                                </NuxtLink>
                                            </v-card-title>
                                            <v-spacer></v-spacer> <!-- Mendorong aksi ke bawah -->
                                            <v-card-actions class="d-flex align-center justify-space-between">
                                                <v-btn text small color="primary">Tanah Papua</v-btn>
                                                <span class="text-subtitle-2">1 Jam yang lalu</span>
                                                <v-spacer></v-spacer>
                                                <v-btn text>
                                                    <v-icon v-if="articles[index]?.isLike"
                                                        color="red">mdi-heart</v-icon>
                                                    <v-icon v-else>mdi-heart-outline</v-icon>
                                                    {{ articles[index]?.like }}
                                                </v-btn>
                                            </v-card-actions>
                                        </v-col>
                                    </v-row>
                                </v-card>

                            </v-hover>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="12" md="5" lg="5">
                <!-- isi dengan apa -->
                <v-container>
                    <div class="text-h5 mb-4">
                        <v-icon>mdi-trending-up</v-icon> Trending
                    </div>
                    <v-row dense>
                        <v-col v-for="(article, index) in articles.slice(0, 5)" :key="index" cols="12">
                            <!-- Content State -->
                            <v-hover v-slot:default="{ isHovering }">
                                <v-card :class="{ 'on-hover': isHovering }">
                                    <v-card-title class="truncated-title text-h6">
                                        <NuxtLink to="/" class="text-decoration-none text-primary">
                                            {{ index + 1 }}. {{ articles[index]?.title }}
                                        </NuxtLink>
                                    </v-card-title>


                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container>
                    <v-card class="m-2">
                        <div class="text-h5 mb-4">Follow Us</div>
                        <v-row dense justify="center" align="center">
                            <!-- Facebook -->
                            <v-btn icon href="https://www.facebook.com/" target="_blank" color="blue darken-4"
                                class="mr-1" title="Follow us on Facebook">
                                <v-icon large>mdi-facebook</v-icon>
                            </v-btn>
                            <!-- Instagram -->
                            <v-btn icon href="https://www.instagram.com/" target="_blank" color="pink darken-2"
                                class="mr-1" title="Follow us on Instagram">
                                <v-icon large>mdi-instagram</v-icon>
                            </v-btn>
                            <!-- YouTube -->
                            <v-btn icon href="https://www.youtube.com/" target="_blank" color="red darken-4"
                                class="mr-1" title="Subscribe to our YouTube channel">
                                <v-icon large>mdi-youtube</v-icon>
                            </v-btn>
                            <!-- Twitter -->
                            <v-btn icon href="https://twitter.com/" target="_blank" color="light-blue darken-1"
                                class="mr-1" title="Follow us on Twitter">
                                <v-icon large>mdi-twitter</v-icon>
                            </v-btn>
                            <!-- WhatsApp -->
                            <v-btn icon href="https://wa.me/your-number" target="_blank" color="green darken-2"
                                class="mr-1" title="Chat with us on WhatsApp">
                                <v-icon large>mdi-whatsapp</v-icon>
                            </v-btn>
                        </v-row>
                    </v-card>
                </v-container>

                <v-container>
                    <v-col cols="12">
                        <v-img>
                            <NuxtImg to="/" src="https://metrobalim.net/wp-content/uploads/2025/01/poster1.jpg" />
                        </v-img>
                    </v-col>

                </v-container>


            </v-col>
        </v-row>
    </v-container>
    <v-container fluid class="bg-primary">
        <videoComponent />
    </v-container>
</template>

<script setup>


import { ref, onMounted } from "vue";
import videoComponent from "@/components/video.vue";

const loading = ref(true);
const articles = ref([]);

const tags = ref([
    'Kebakaran Glodok',
    'Kebakaran Los Angeles',
    'Papua Merdeka',
    'Pilkada Papua',
    'Drawers',
    'Shopping',
    'Art',
    'Tech',
    'Creative Writing',
]);

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
        articles.value = [
            {
                title: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
                subtitle: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
                isLike: true,
                like: 5
            },
            {
                title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
                subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
                image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
                isLike: true,
                like: 200
            },
            {
                title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
                subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
                isLike: true,
                like: 200
            },

            {
                title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
                subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
                isLike: true,
                like: 200
            },
            {
                title: "ULMWP Salurkan Bantuan untuk Pengungsi di Nduga, Papua Pegunungan",
                subtitle: "ULMWP Salurkan Bantuan untuk Pengungsi di Nduga, Papua Pegunungan",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/1.png",
                isLike: true,
                like: 50
            },
            {
                title: "Pemberhentian Pegawai Honorer di Papua Pegunungan Picu Protes",
                subtitle: "Pemberhentian Pegawai Honorer di Papua Pegunungan Picu Protes",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250113-WA0039.jpg",
                isLike: false,
                like: 0
            },
            {
                title: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua",
                subtitle: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua.",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/1-1-1024x576.png",
                isLike: false,
                like: 0
            },
            {
                title: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
                subtitle: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250114-WA0051.jpg",
                isLike: false,
                like: 0
            },

            {
                title: "DOA di Getsemani",
                image: "https://answeredfaith.com/wp-content/uploads/2024/11/examples-of-jesus-praying-in-the-bible-1.jpg",
                like: 30
            },
            {
                title: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
                subtitle: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
                isLike: true,
                like: 5
            },
            {
                title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
                subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
                image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
                isLike: true,
                like: 200
            },
            {
                title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
                subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
                isLike: true,
                like: 200
            },

            {
                title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
                subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
                isLike: true,
                like: 200
            },
            {
                title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
                subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
                image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
                isLike: true,
                like: 200
            },
            {
                title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
                subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
                isLike: true,
                like: 200
            },

            {
                title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
                subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
                isLike: true,
                like: 200
            },
        ];
    }, 2000); // Simulasi loading
});
</script>

<style scoped>
.article-card:hover {
    transform: translateY(-3px);
    transition: 0.2s ease-in-out;
}

.truncated-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    /* Fallback properti */
    /* Limit to 3 lines */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}

.article-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-card.on-hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.article-image {

    border-radius: 8px;
}

.article-image img {
    object-fit: contain;
    width: 100%;
}

.article-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.article-image:hover .article-overlay {
    opacity: 1;
}

.image-responsive {
    width: 100%;
    /* Mengisi kolom sepenuhnya */
    height: auto;
}

.article-title {
    display: -webkit-box;
    line-clamp: 3;
    /* Batasi ke 3 baris */
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>