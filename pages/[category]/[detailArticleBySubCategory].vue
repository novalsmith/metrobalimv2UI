<template>
    <v-container class="article-container">
        <v-row justify="center">
            <v-col cols="12" md="10">
                <v-card elevation="0">
                    <!-- Gambar Header -->
                    <!-- <h1>section Article Detail under sub category</h1> -->
                    <v-img v-if="filteredArticle?.image" :src="filteredArticle.image" max-height="500" cover></v-img>

                    <v-card-title class="article-title text-wrap">
                        {{ filteredArticle?.title || "Artikel Tidak Ditemukan" }}
                    </v-card-title>

                    <v-card-subtitle>
                        Oleh <strong>Anonim</strong> - {{ formatDate(new Date()) }}
                    </v-card-subtitle>

                    <v-divider></v-divider>

                    <!-- Konten Artikel -->
                    <v-card-text class="article-content">
                        {{ filteredArticle?.subtitle || "Konten tidak tersedia" }}
                    </v-card-text>

                    <v-divider></v-divider>

                    <!-- Action Buttons -->
                    <v-card-actions>
                        <v-btn icon @click="toggleLike">
                            <v-icon :color="filteredArticle?.isLike ? 'red' : 'grey'">mdi-heart</v-icon>
                        </v-btn>
                        <span class="likes-count">{{ filteredArticle?.like }}</span>

                        <v-btn icon @click="shareArticle">
                            <v-icon>mdi-share-variant</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
// import { articles } from "@/data/articles"; // Asumsikan data statis dari `articles.js`
const route = useRoute();
const loading = ref(true);

// const articles = ref([]);
// articles.value = [

//     {
//         title: "Velixs Wangai Pemprov Papua Pegunungan Usulkan Penyesuaian Passing Grade CPNS ke Kemen PANRB.",
//         subtitle: "Velixs Wangai Pemprov Papua Pegunungan Usulkan Penyesuaian Passing Grade CPNS ke Kemen PANRB.",
//         image: "https://metrobalim.net/wp-content/uploads/2025/02/metrobalim.jpg",
//         isLike: true,
//         like: 5,
//         slug: "veliks-wangai-pemprov"
//     },
//     {
//         title: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
//         subtitle: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
//         isLike: true,
//         like: 5,
//         slug: "polda-papua"
//     },
//     {
//         title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
//         subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
//         image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
//         isLike: true,
//         like: 200,
//         slug: "ole-naturalisasi-indonesia"
//     },
//     {
//         title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
//         subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
//         isLike: true,
//         like: 200,
//         slug: "warga-indonesia"
//     },

//     {
//         title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
//         subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
//         isLike: true,
//         like: 200,
//         slug: "natalius"
//     },
//     {
//         title: "ULMWP Salurkan Bantuan untuk Pengungsi di Nduga, Papua Pegunungan",
//         subtitle: "ULMWP Salurkan Bantuan untuk Pengungsi di Nduga, Papua Pegunungan",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/1.png",
//         isLike: true,
//         like: 50,
//         slug: "natalius"
//     },
//     {
//         title: "Pemberhentian Pegawai Honorer di Papua Pegunungan Picu Protes",
//         subtitle: "Pemberhentian Pegawai Honorer di Papua Pegunungan Picu Protes",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250113-WA0039.jpg",
//         isLike: false,
//         like: 0,
//         slug: "natalius"
//     },
//     {
//         title: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua",
//         subtitle: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua.",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/1-1-1024x576.png",
//         isLike: false,
//         like: 0,
//         slug: "natalius"
//     },
//     {
//         title: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
//         subtitle: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250114-WA0051.jpg",
//         isLike: false,
//         like: 0,
//         slug: "natalius"
//     },

//     {
//         title: "DOA di Getsemani",
//         image: "https://answeredfaith.com/wp-content/uploads/2024/11/examples-of-jesus-praying-in-the-bible-1.jpg",
//         like: 30,
//         slug: "natalius"
//     },
//     {
//         title: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
//         subtitle: "Polda Papua Disoroti? Keadilan untuk Tobias Silak",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
//         isLike: true,
//         like: 5,
//         slug: "natalius"
//     },
//     {
//         title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
//         subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
//         image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
//         isLike: true,
//         like: 200,
//         slug: "natalius"
//     },
//     {
//         title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
//         subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
//         isLike: true,
//         like: 200,
//         slug: "natalius"
//     },

//     {
//         title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
//         subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
//         isLike: true,
//         like: 200,
//         slug: "natalius"
//     },
//     {
//         title: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia. Lini serang Timnas indonesia semakin tajam dan diharapkan bisa mendapat poin maksimal",
//         subtitle: "Resmi, Ole Romeny Menjadi Warga Negara Indonesia",
//         image: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1yEwXw.img?w=750&h=500&m=6&x=120&y=120&s=280&d=280",
//         isLike: true,
//         like: 200,
//         slug: "natalius"
//     },
//     {
//         title: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
//         subtitle: "Warga Distrik Kroptak Nduga Minta Penarikan TNI Non-Organik dari Wilayah Mereka.",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-14-1024x576.png",
//         isLike: true,
//         like: 200,
//         slug: "natalius"
//     },

//     {
//         title: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
//         subtitle: "Natalius Pigai: Konversi Lahan Tinggi, Masa Depan Ketahanan Pangan Terancam",
//         image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-18-1024x576.png",
//         isLike: true,
//         like: 200,
//         slug: "natalius"
//     },
// ];
// Ambil parameter slug dari URL

const { data: articles, pending: articlesPending } = await useFetch('/api/mockArticle');
if (articlesPending) {
    loading.value = false;
    console.log(route.params);
}

const filteredArticle = computed(() => {

    return articles.value.find(
        article => article.slug.toLowerCase() === route.params.detailArticleBySubCategory.toLowerCase()
    ) || null; // Fallback jika tidak ditemukan
});


// Toggle Like
const toggleLike = () => {
    if (filteredArticle.value) {
        filteredArticle.value.isLike = !filteredArticle.value.isLike;
        filteredArticle.value.like += filteredArticle.value.isLike ? 1 : -1;
    }
};

// Share Artikel
const shareArticle = () => {
    if (navigator.share && filteredArticle.value) {
        navigator.share({
            title: filteredArticle.value.title,
            url: window.location.href,
        });
    } else {
        alert("Fitur share tidak didukung di browser ini.");
    }
};

// Format Tanggal
const formatDate = (date) => {
    return date.toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
};
</script>

<style scoped>
.article-container {
    padding-top: 20px;
}

.article-title {
    font-size: 24px;
    font-weight: bold;
}

.article-content {
    font-size: 16px;
    line-height: 1.6;
    color: #444;
}

.likes-count {
    margin-left: 5px;
    font-size: 16px;
    color: #555;
}
</style>
