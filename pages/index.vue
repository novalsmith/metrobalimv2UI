<template>

    <!-- ads -->
    <!-- <adsComponent /> -->

    <v-container>
        <v-row>
            <v-col cols="12">
                <Ads src="https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp"
                    alt="Iklan Metro Bali" width="100%" height="200" format="webp" quality="80" fit="cover"
                    :modifiers="{ format: 'webp', quality: 80, height: 200 }" maxHeight="300"
                    @click="handleImageAdClick" />
            </v-col>
        </v-row>
    </v-container>

    <!-- ads -->

    <!-- Topik Populer -->
    <v-container>
        <v-skeleton-loader :loading="loading" type="text">
            <v-row>
                <v-col cols="2">
                    <div class="text-h6 mb-4">
                        <v-icon>mdi-fire</v-icon> Topik Populer
                    </div>
                </v-col>
                <v-col cols="10">
                    <v-chip-group v-if="!loading" variant="outlined" selectedClass="text-info">
                        <v-chip v-for="tag in tags" :key="tag" class="rounded" :text="tag"></v-chip>
                    </v-chip-group>
                    <v-chip-group v-else>
                        <v-chip class="rounded">Loading...</v-chip>
                    </v-chip-group>

                </v-col>
            </v-row>
        </v-skeleton-loader>
    </v-container>

    <!-- headlines -->

    <headlinesComponent />
    <!-- headlines -->

    <!-- ads -->
    <!-- <adsComponent /> -->

    <!-- ads -->

    <!-- article Terbaru -->
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
                                            <v-responsive class="flex-grow-1" style="aspect-ratio: 21/9;">
                                                <NuxtLink @click.prevent="openArticle(item.category, item.slug)">
                                                    <NuxtImg preset="article" :src="item?.image || 'default-image.jpg'"
                                                        class="w-100 h-100" placeholder="blur" loading="lazy"
                                                        format="webp" fit="cover" style="object-fit: cover;" />
                                                </NuxtLink>

                                            </v-responsive>
                                            <!-- <NuxtLink @click.prevent="openArticle(item.category, item.slug)">
                                                 <v-img class="article-image" max-height="150" :lazy-src="item.image">  
                                            <NuxtImg preset="article" placeholder="blur" loading="lazy"
                                                v-if="item.image" :src="item.image" />
                                       
                                            </NuxtLink>   -->
                                        </v-col>
                                        <v-col cols="12" md="7" class="d-flex flex-column justify-space-between">
                                            <v-card-title class="text-h6 text-wrap">
                                                <NuxtLink @click.prevent="openArticle(item.category, item.slug)"
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
                    <v-card>
                        <Ads src="https://metrobalim.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-05.21.46_0b833506-768x922.jpg"
                            alt="Iklan Metro Bali" :modifiers="{ format: 'webp', quality: 80 }"
                            @click="handleImageAdClick" />

                    </v-card>
                </v-container>






            </v-col>
        </v-row>
    </v-container>
    <v-container fluid class="bg-primary">
        <videoComponent />
    </v-container>
</template>

<script setup>


import { ref } from "vue";
import videoComponent from "@/components/video.vue";
import Ads from "@/components/ads.vue";
import headlinesComponent from "@/components/headlines.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const openArticle = (category, slug) => {
    router.push(`/article/${category}/${slug}`);
};

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

const imageAdConfig = {
    imageProps: {
        src: "https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp",
        alt: "Iklan Metro Bali",
        modifiers: { format: 'webp', quality: 80, height: 200 },
        presets: "ads"
    },
    class: 'my-image-ad',
    style: 'margin-bottom: 20px;',
};


// Konfigurasi Iklan Teks
const textAdConfig = {
    src: "https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp",
    alt: "Iklan Metro Bali",
    modifiers: { format: 'webp', quality: 80 },
    text: "Promo Spesial!",
};

// Konfigurasi Iklan dengan Slot
const slotAdConfig = {
    src: "https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp",
    alt: "Iklan Metro Bali",
    modifiers: { format: 'webp', quality: 80 },
    text: "Promo Spesial!",
};

// Fungsi Penanganan Klik Iklan
const handleImageAdClick = () => {
    console.log("Iklan gambar diklik!");
};

const handleTextAdClick = () => {
    console.log("Iklan teks diklik!");
};

const handleSlotAdClick = () => {
    console.log("Iklan slot diklik!");
};
loading.value = false;
articles.value = [
    {
        title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
        subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
        image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
        isLike: true,
        like: 200,
        slug: "ole-naturalisasi-indonesia",
        category: "sastra"
    },
    {
        title: "Velixs Wangai Pemprov Papua Pegunungan Usulkan Penyesuaian Passing Grade CPNS ke Kemen PANRB.",
        subtitle: "Velixs Wangai Pemprov Papua Pegunungan Usulkan Penyesuaian Passing Grade CPNS ke Kemen PANRB.",
        image: "https://metrobalim.net/wp-content/uploads/2025/02/metrobalim.jpg",
        isLike: true,
        like: 5,
        slug: "veliks-wangai-pemprov",
        category: "tanah-papua"
    },
    {
        title: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
        subtitle: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
        isLike: true,
        like: 5,
        slug: "polda-papua",
        category: "regional"
    },

    {
        title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
        isLike: true,
        like: 200,
        slug: "warga-indonesia",
        category: "bisnis"
    },

    {
        title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "podcast"
    },
    {
        title: "ULMWP Salurkan Bantuan untuk Pengungsi di Nduga, Papua Pegunungan",
        subtitle: "ULMWP Salurkan Bantuan untuk Pengungsi di Nduga, Papua Pegunungan",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/1.png",
        isLike: true,
        like: 50,
        slug: "natalius",
        category: "tanah-papua"
    },
    {
        title: "Pemberhentian Pegawai Honorer di Papua Pegunungan Picu Protes",
        subtitle: "Pemberhentian Pegawai Honorer di Papua Pegunungan Picu Protes",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250113-WA0039.jpg",
        isLike: false,
        like: 0,
        slug: "natalius",
        category: "tanah-papua"
    },
    {
        title: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua",
        subtitle: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua.",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/1-1-1024x576.png",
        isLike: false,
        like: 0,
        slug: "natalius",
        category: "tanah-papua"
    },
    {
        title: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
        subtitle: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250114-WA0051.jpg",
        isLike: false,
        like: 0,
        slug: "natalius",
        category: "tanah-papua"
    },

    {
        title: "DOA di Getsemani",
        image: "https://answeredfaith.com/wp-content/uploads/2024/11/examples-of-jesus-praying-in-the-bible-1.jpg",
        like: 30,
        slug: "natalius",
        category: "tanah-papua"
    },
    {
        title: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
        subtitle: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
        isLike: true,
        like: 5,
        slug: "natalius",
        category: "tanah-papua"
    },
    {
        title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
        subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
        image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua"
    },
    {
        title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua"
    },

    {
        title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua"
    },
    {
        title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
        subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
        image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua"
    },
    {
        title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua"
    },

    {
        title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
        isLike: true,
        like: 200,
        slug: "natalius",
        category: "tanah-papua"
    },
];


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