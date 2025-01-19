<template>

    <!-- iklan -->

    <v-container>
        <v-card class="mx-auto" height="300" link>
            <v-img
                src="https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp">

            </v-img>
        </v-card>
    </v-container>

    <v-container>
        <v-row>
            <v-col cols="2">
                <div class="text-h6 mb-4">
                    <v-icon>mdi-pound</v-icon> Topik Populer
                </div>
            </v-col>
            <v-col cols="10">

                <v-chip-group class="text-primary">
                    <v-chip class="rounded" v-for="tag in tags" :key="tag" :text="tag"></v-chip>
                </v-chip-group>

            </v-col>
        </v-row>

    </v-container>

    <v-container>
        <!-- Section 1: Main Article -->
        <v-row>
            <v-col cols="12" md="8">
                <v-hover v-slot:default="{ isHovering }">
                    <v-card v-if="loading" class="mb-4">
                        <v-skeleton-loader type="card" height="500"></v-skeleton-loader>
                    </v-card>
                    <v-card v-else class="mb-4 article-card" :class="{ 'on-hover': isHovering }">
                        <v-img :src="articles[0].image" cover gradient="to bottom, rgba(1,0,0,0), rgba(0,0,0,.8)"
                            class="align-end" height="500">
                            <v-card-title class="text-white text-wrap pa-4">
                                <div class="text-h6 font-weight-bold">{{ articles[0].title }}</div>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-actions class="text-white">
                                <v-btn text class="text-white">Tanah Papua</v-btn>
                                <span>1 Jam yang lalu</span>
                                <v-spacer></v-spacer>
                                <v-icon>mdi-heart-outline</v-icon>
                            </v-card-actions>
                        </v-img>
                    </v-card>
                </v-hover>
            </v-col>

            <!-- Section 1: Side Articles -->
            <v-col cols="12" md="4">
                <v-row dense>
                    <v-col v-for="index in 2" :key="index" cols="12">
                        <v-card v-if="loading" class="mb-4">
                            <v-skeleton-loader type="card" height="239"></v-skeleton-loader>
                        </v-card>
                        <v-hover v-else v-slot:default="{ isHovering }">
                            <v-card class="mb-4 article-card" :class="{ 'on-hover': isHovering }">
                                <v-img :src="articles[index].image" cover
                                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)" class="align-end" height="239">
                                    <div class="position-absolute bottom-0 start-0 end-0 bg-gradient-bottom pa-2">
                                        <v-card-title class="text-white text-wrap pa-0 pt-2">
                                            <div class="font-weight-bold">{{ articles[index].title }}</div>
                                        </v-card-title>
                                        <v-divider></v-divider>
                                        <v-card-actions class="text-white pa-0 pt-2">
                                            <v-btn text class="text-white">Tanah Papua</v-btn>
                                            <span>1 Jam yang lalu</span>
                                            <v-spacer></v-spacer>
                                            <v-icon>mdi-heart-outline</v-icon>
                                        </v-card-actions>
                                    </div>
                                </v-img>
                            </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>

    <!-- Section 2: News Articles -->
    <v-container>
        <v-row>

            <v-col cols="12" md="8">
                <div class="mb-8">
                    <div class="text-h5 mb-4">
                        <v-icon>mdi-newspaper-variant-multiple-outline</v-icon> Terbaru
                    </div>
                    <v-row dense>
                        <v-col v-for="(item, index) in articles.slice(3, 8)" :key="index" cols="12">
                            <v-card v-if="loading" class="mb-4">
                                <v-skeleton-loader type="card" height="200"></v-skeleton-loader>
                            </v-card>
                            <v-hover v-else v-slot:default="{ isHovering }">
                                <v-card class="mb-4 article-card" :class="{ 'on-hover': isHovering }">


                                    <v-row>
                                        <v-col cols="5">
                                            <v-img :src="item.image" cover></v-img>
                                        </v-col>
                                        <v-col cols="7">
                                            <v-card-title class="text-h5 text-wrap">{{ item.title }}</v-card-title>
                                            <v-card-subtitle class="text-wrap">{{ item.subtitle }}</v-card-subtitle>

                                        </v-col>
                                        <v-col cols="12">
                                            <v-card-actions>
                                                <v-btn text>Tanah Papua</v-btn>
                                                <span>1 Jam yang lalu</span>
                                                <v-spacer></v-spacer>
                                                <v-btn icon>{{ item.like }}
                                                    <v-icon v-if="item.isLike" color="red">mdi-heart</v-icon>
                                                    <v-icon v-else>mdi-heart-outline</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-col>
                                    </v-row>





                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </div>
                <div>
                    <div class="text-h5 mb-4">
                        <v-icon>mdi-video-outline</v-icon> Video Terbaru
                    </div>
                    <v-hover v-slot:default="{ isHovering }">
                        <v-card v-if="loading" class="mb-4">
                            <v-skeleton-loader type="card" height="500"></v-skeleton-loader>
                        </v-card>
                        <v-card v-else class="mb-4 article-card" :class="{ 'on-hover': isHovering }">
                            <v-img :src="articles[0].image" cover gradient="to bottom, rgba(1,0,0,0), rgba(0,0,0,.8)"
                                class="align-end position-relative" height="500">
                                <!-- Overlay Play Icon -->
                                <div class="position-absolute d-flex justify-center align-center"
                                    style="top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1; background: rgba(0, 0, 0, 0.5); border-radius: 50%; width: 80px; height: 80px;">
                                    <v-icon class="text-h1" color="white">mdi-play-circle-outline</v-icon>
                                </div>
                                <!-- End Overlay -->

                                <v-card-title class="text-white text-wrap pa-4">
                                    <div class="text-h6 font-weight-bold">{{ articles[0].title }}</div>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-actions class="text-white">
                                    <v-btn text class="text-white">Tanah Papua</v-btn>
                                    <span>1 Jam yang lalu</span>
                                    <v-spacer></v-spacer>
                                    <v-icon>mdi-heart-outline</v-icon>
                                </v-card-actions>
                            </v-img>
                        </v-card>
                    </v-hover>
                    <v-row dense>
                        <v-col v-for="(item, index) in articles.slice(3, 8)" :key="index" cols="6">
                            <v-card v-if="loading" class="mb-4">
                                <v-skeleton-loader type="card" height="200"></v-skeleton-loader>
                            </v-card>
                            <v-hover v-else v-slot:default="{ isHovering }">
                                <v-card class="mb-4 article-card" :class="{ 'on-hover': isHovering }">
                                    <!-- Video Thumbnail with Overlay -->
                                    <v-img :src="item.image" cover max-height="200">
                                        <!-- Overlay Play Icon -->
                                        <div class="position-absolute d-flex justify-center align-center"
                                            style="top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 1; background: rgba(0, 0, 0, 0.5); border-radius: 50%; width: 80px; height: 80px;">
                                            <v-icon class="text-h1" color="white">mdi-play-circle-outline</v-icon>
                                        </div>
                                        <!-- End Overlay -->
                                    </v-img>
                                    <!-- Truncated Title -->
                                    <v-card-title class="text-h5 text-wrap truncated-title">
                                        {{ item.title }}
                                    </v-card-title>
                                    <!-- <v-card-subtitle class="text-wrap">{{ item.subtitle }}</v-card-subtitle> -->
                                    <v-card-actions>
                                        <v-btn text>Tanah Papua</v-btn>
                                        <span>1 Jam yang lalu</span>
                                        <v-spacer></v-spacer>
                                        <v-btn icon>
                                            {{ item.like }}
                                            <v-icon v-if="item.isLike" color="red">mdi-heart</v-icon>
                                            <v-icon v-else>mdi-heart-outline</v-icon>
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </div>

                <!-- <div>
                    <div class="text-h5 mb-4">
                        <v-icon>mdi-video-outline</v-icon> Video Terbaru
                    </div>
                    <v-hover v-slot:default="{ isHovering }">
                        <v-card v-if="loading" class="mb-4">
                            <v-skeleton-loader type="card" height="500"></v-skeleton-loader>
                        </v-card>
                        <v-card v-else class="mb-4 article-card" :class="{ 'on-hover': isHovering }">
                            <v-img :src="articles[0].image" cover gradient="to bottom, rgba(1,0,0,0), rgba(0,0,0,.8)"
                                class="align-end" height="500">
                                <v-card-title class="text-white text-wrap pa-4">
                                    <div class="text-h6 font-weight-bold">{{ articles[0].title }}</div>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-actions class="text-white">
                                    <v-btn text class="text-white">Tanah Papua</v-btn>
                                    <span>1 Jam yang lalu</span>
                                    <v-spacer></v-spacer>
                                    <v-icon>mdi-heart-outline</v-icon>
                                </v-card-actions>
                            </v-img>
                        </v-card>
                    </v-hover>
                    <v-row dense>
                        <v-col v-for="(item, index) in articles.slice(3, 8)" :key="index" cols="12">
                            <v-card v-if="loading" class="mb-4">
                                <v-skeleton-loader type="card" height="200"></v-skeleton-loader>
                            </v-card>
                            <v-hover v-else v-slot:default="{ isHovering }">
                                <v-card class="mb-4 article-card" :class="{ 'on-hover': isHovering }">


                                    <v-row>
                                        <v-col cols="5">
                                            <v-img :src="item.image" cover></v-img>
                                        </v-col>
                                        <v-col cols="7">
                                            <v-card-title class="text-h5 text-wrap">{{ item.title }}</v-card-title>
                                            <v-card-subtitle class="text-wrap">{{ item.subtitle }}</v-card-subtitle>

                                        </v-col>
                                        <v-col cols="12">
                                            <v-card-actions>
                                                <v-btn text>Tanah Papua</v-btn>
                                                <span>1 Jam yang lalu</span>
                                                <v-spacer></v-spacer>
                                                <v-btn icon>{{ item.like }}
                                                    <v-icon v-if="item.isLike" color="red">mdi-heart</v-icon>
                                                    <v-icon v-else>mdi-heart-outline</v-icon>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-col>
                                    </v-row>





                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </div> -->

            </v-col>

            <!-- Section 2: Trending Articles -->
            <v-col cols="12" md="4">
                <div class="mb-4">
                    <v-card class="mx-auto" link>
                        <v-img src="https://metrobalim.net/wp-content/uploads/2025/01/poster1.jpg"></v-img>
                    </v-card>
                </div>
                <div>
                    <div class="text-h5 mb-4">
                        <v-icon>mdi-trending-up</v-icon> Trending
                    </div>
                    <v-row dense>
                        <v-col v-for="(article, index) in articles.slice(0, 5)" :key="index" cols="12">
                            <!-- Content State -->
                            <v-hover v-slot:default="{ isHovering }">
                                <v-card class="mb-4 article-card" :class="{ 'on-hover': isHovering }">
                                    <v-img
                                        :src="article.image || 'https://cdn.freelogovectors.net/wp-content/uploads/2023/01/vuetify-logo-freelogovectors.net_.png'"
                                        cover gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)" class="align-end"
                                        height="200"
                                        :lazy-src="'https://cdn.freelogovectors.net/wp-content/uploads/2023/01/vuetify-logo-freelogovectors.net_.png'">
                                        <!-- Content Overlay -->
                                        <div class="position-absolute bottom-0 start-0 end-0 bg-gradient-bottom pa-2">
                                            <v-card-title class="text-white text-wrap pa-0 pt-2">
                                                <div class="font-weight-bold">
                                                    {{ article.title || 'Untitled Article' }}
                                                </div>
                                            </v-card-title>
                                            <v-divider></v-divider>
                                            <v-card-actions class="text-white pa-0 pt-2">
                                                <v-btn text class="text-white">Tanah Papua</v-btn>
                                                <span>1 Jam yang lalu</span>
                                                <v-spacer></v-spacer>
                                                <v-icon>mdi-heart-outline</v-icon>
                                            </v-card-actions>
                                        </div>
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </div>
                <div>
                    <v-card class="pa-4">
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
                </div>
                <div class="mb-4">
                    <v-card class="mx-auto" link>
                        <v-img src="https://metrobalim.net/wp-content/uploads/2025/01/poster1.jpg"></v-img>
                    </v-card>
                </div>

            </v-col>

        </v-row>
    </v-container>

</template>

<script setup>
import { ref, onMounted } from "vue";

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
                title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
                subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
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
                title: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
                subtitle: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
                image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
                isLike: true,
                like: 5
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
    -webkit-line-clamp: 3;
    line-clamp: 3;
    /* Fallback properti */
    /* Limit to 3 lines */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}
</style>