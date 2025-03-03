<template>
    <v-container>
        <v-row align="stretch" class="content-container">
            <!-- Artikel Utama -->
            <v-col md="6" sm="12" lg="6" class="content-col">
                <v-skeleton-loader v-if="loading" type="image, card-avatar, article" />
                <v-card v-else class="h-100 d-flex flex-column content-card">
                    <v-responsive class="flex-grow-1" style="aspect-ratio: 21/9;">
                        <NuxtLink @click.prevent="openArticle(articles[0])">
                            <NuxtImg preset="headlineMain" :src="articles[0]?.image || 'default-image.jpg'"
                                class="w-100 h-100" placeholder="blur" loading="lazy" format="webp" fit="cover"
                                style="object-fit: cover; min-height: 100%;" />
                        </NuxtLink>

                    </v-responsive>

                    <NuxtLink @click.prevent="openArticle(articles[0])">
                        <v-card-title class="text-wrap text-h6">
                            {{ articles[0]?.title || 'Judul tidak tersedia' }}
                        </v-card-title>

                    </NuxtLink>


                    <v-card-actions class="d-flex align-center justify-space-between">
                        <v-btn text small color="primary">Tanah Papua</v-btn>
                        <span class="text-caption ml-2">1 Jam yang lalu</span>
                        <v-spacer></v-spacer>
                        <v-btn text>
                            <v-icon v-if="articles[0]?.isLike" color="red">mdi-heart</v-icon>
                            <v-icon v-else>mdi-heart-outline</v-icon>
                            {{ articles[0]?.like || 0 }}
                        </v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>

            <!-- Artikel Sampingan -->
            <v-col md="6" sm="12" lg="6" class="content-col">
                <v-row dense align="stretch">
                    <v-col cols="12" md="12" v-if="loading">
                        <v-row v-for="i in 3">
                            <v-col cols="6">
                                <v-skeleton-loader type="article" />
                            </v-col>
                            <v-col cols="6">
                                <v-skeleton-loader type="image" />
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col v-else v-for="(article, index) in articles.slice(1, 4)" :key="article?.title || index"
                        cols="12">

                        <v-card class="h-100 d-flex flex-column content-card article-card">
                            <v-row no-gutters class="h-100">
                                <!-- Kolom Kiri (Judul) -->
                                <v-col cols="12" md="6" class="d-flex flex-column">
                                    <v-card-title class="truncated-title text-h6">
                                        <NuxtLink @click.prevent="openArticle(articles[index])">
                                            <NuxtLink v-if="article?.title" to="/"
                                                class="text-decoration-none text-primary">
                                                {{ article.title }}
                                            </NuxtLink>
                                        </NuxtLink>

                                    </v-card-title>
                                </v-col>
                                <!-- Kolom Kanan (Gambar) -->
                                <v-col cols="12" md="6" class="d-flex flex-column">
                                    <v-responsive class="flex-grow-1" style="aspect-ratio: 21/9;">
                                        <NuxtLink @click.prevent="openArticle(articles[index])">
                                            <NuxtImg preset="headlineMain" :src="article?.image || 'default-image.jpg'"
                                                class="w-100 h-100" placeholder="blur" loading="lazy" format="webp"
                                                fit="cover" style="object-fit: cover;" />
                                        </NuxtLink>

                                    </v-responsive>
                                </v-col>
                                <!-- Bagian Aksi -->
                                <v-col cols="12">
                                    <v-card-actions class="d-flex align-center justify-space-between">
                                        <v-btn text small color="primary">Tanah Papua</v-btn>
                                        <span class="text-caption">1 Jam yang lalu</span>
                                        <v-spacer></v-spacer>
                                        <v-btn text>
                                            <v-icon v-if="article?.isLike" color="red">mdi-heart</v-icon>
                                            <v-icon v-else>mdi-heart-outline</v-icon>
                                            {{ article?.like || 0 }}
                                        </v-btn>
                                    </v-card-actions>
                                </v-col>
                            </v-row>
                        </v-card>


                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const loading = ref(true);
const articles = ref([]);

const openArticle = (value) => {

    router.push(`/article/${value.category}/${value.slug}`);
};
const fetchArticles = async () => {
    try {
        // Simulasi API call dengan setTimeout
        setTimeout(() => {
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
            ];
            loading.value = false;
        }, 1000); // Simulasi delay API call
    } catch (error) {
        console.error("Error fetching articles:", error);
        loading.value = false;
    }
};

onMounted(fetchArticles);

</script>


<style scoped>
/* Container utama */
.content-container {
    max-height: 600px;
    min-height: 70vh;
    overflow: hidden;
}

/* Menyesuaikan tinggi agar seragam */
.content-col {
    display: flex;
    flex-direction: column;
}

/* Efek hover */
.article-card.on-hover {
    transform: scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Batasi panjang judul */
.truncated-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}
</style>
