<template>


    <v-container>
        <v-row>
            <v-col cols="4" md="4">
                <v-icon size="35" class="mr-2">mdi-cloud-outline</v-icon>
                <span class="text-subtitle-1">Selamat Malam <br> <small>Selasa, 11 Maret 2025</small> </span>

            </v-col>
            <v-col cols="4" md="4" offset="4" align="end">
                <v-icon size="35" class="mr-2">mdi-language</v-icon>
                <span class="text-subtitle-1">Language <br> <small>Selasa, 11 Maret 2025</small> </span>

            </v-col>

        </v-row>



        <!-- ads -->
        <!-- <adsComponent /> -->

        <v-row>
            <v-col cols="8">
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-img
                                src="https://metrobalim.net/wp-content/uploads/2024/10/Blue-Simple-Printing-Services-Etsy-Shop-Cover-1.webp"
                                alt="Iklan Metro Bali" class="article-image" @click="handleImageAdClick" />
                        </v-card>
                    </v-col>
                    <v-col cols="12">
                        <CustomCard>
                            <!-- headlines -->
                            <!-- Tabs untuk Headline dan Video -->
                            <v-tabs v-model="tab" class="mb-3">
                                <v-tab value="headline"><v-icon size="30"
                                        class="mr-2">mdi-newspaper-variant-outline</v-icon>
                                    Headline</v-tab>
                                <v-tab value="video"> <v-icon size="30" class="mr-2">mdi-video-outline</v-icon> Live
                                    Update</v-tab>

                            </v-tabs>
                            <v-divider></v-divider>

                            <v-window v-model="tab">
                                <!-- Tab Headline -->
                                <v-window-item value="headline">
                                    <headlinesComponent />
                                </v-window-item>

                                <!-- Tab Video -->
                                <v-window-item value="video">
                                    <videoComponent />
                                </v-window-item>
                            </v-window>
                        </CustomCard>
                    </v-col>

                </v-row>

            </v-col>
            <v-col cols="4">
                <v-row>
                    <v-col cols="12">
                        <CustomCard title="Trending">
                            <v-chip variant="outlined" :to="tag" v-for="tag in tags" :key="tag"
                                class="rounded my-1 mx-1" :text="tag"></v-chip>
                        </CustomCard>

                    </v-col>
                    <v-col cols="12">

                        <CustomCard>
                            <!-- <v-row dense justify="center" align="center"> -->
                            <v-btn icon href="https://www.facebook.com/" target="_blank" color="blue darken-4"
                                class="mr-1" title="Follow us on Facebook">
                                <v-icon large>mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn icon href="https://www.instagram.com/" target="_blank" color="pink darken-2"
                                class="mr-1" title="Follow us on Instagram">
                                <v-icon large>mdi-instagram</v-icon>
                            </v-btn>
                            <v-btn icon href="https://www.youtube.com/" target="_blank" color="red darken-4"
                                class="mr-1" title="Subscribe to our YouTube channel">
                                <v-icon large>mdi-youtube</v-icon>
                            </v-btn>
                            <v-btn icon href="https://twitter.com/" target="_blank" color="light-blue darken-1"
                                class="mr-1" title="Follow us on Twitter">
                                <v-icon large>mdi-twitter</v-icon>
                            </v-btn>
                            <v-btn icon href="https://wa.me/your-number" target="_blank" color="green darken-2"
                                class="mr-1" title="Chat with us on WhatsApp">
                                <v-icon large>mdi-whatsapp</v-icon>
                            </v-btn>
                            <!-- </v-row> -->
                        </CustomCard>

                    </v-col>
                    <v-col cols="12">

                        <CustomCard title="Topik Populer">
                            <v-list>
                                <v-list-item class="text-wrap mb-1" v-for="(item, index) in articles.slice(0, 5)"
                                    :key="index">
                                    <NuxtLink @click.prevent="$openArticle(item)" class="article-link text-subtitle-2">
                                        <!-- <span class="text-h6">{{ index + 1 }}</span>  -->
                                        <v-chip>
                                            {{ index + 1 }}
                                        </v-chip>
                                        {{ item.title }}
                                    </NuxtLink>
                                    <v-divider></v-divider>
                                </v-list-item>
                            </v-list>
                        </CustomCard>
                    </v-col>

                </v-row>
            </v-col>
            <v-col cols="12">
                <v-card>
                    <CustomCard title="Sorotan"
                        :style="{ background: $vuetify.theme.current.colors.secondaryGradient }">
                        <v-row align="center" no-gutters>
                            <v-col v-for="(item, index) in articles.slice(3, 9)" :key="index" cols="4">
                                <v-row no-gutters>
                                    <v-col cols="5" md="5">
                                        <v-responsive class="flex-grow-1" style="aspect-ratio: 21/9">
                                            <NuxtLink @click.prevent="$openArticle(item)">
                                                <NuxtImg preset="article" :src="item?.image || 'default-image.jpg'"
                                                    class="w-100 h-100" placeholder="blur" loading="eager" format="webp"
                                                    fit="cover" style="object-fit: cover;" />
                                            </NuxtLink>
                                        </v-responsive>
                                    </v-col>
                                    <v-col cols="12" md="7" class="d-flex flex-column justify-space-between">
                                        <v-card-title class="text-subtitle-1 text-wrap">
                                            <NuxtLink @click.prevent="$openArticle(item)" class="article-link">
                                                {{ item.title }}
                                            </NuxtLink>
                                        </v-card-title>

                                    </v-col>
                                </v-row>

                            </v-col>
                        </v-row>
                    </CustomCard>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-card>
                    <v-row>
                        <v-col cols="6">
                            <CustomCard title="Terbaru">
                                <v-row align="center">
                                    <v-col v-for="(item, index) in articles.slice(3, 10)" :key="index" cols="12">
                                        <v-row no-gutters>
                                            <v-col cols="12" md="5">
                                                <v-responsive class="flex-grow-1" style="aspect-ratio: 21/9">
                                                    <NuxtLink @click.prevent="$openArticle(item)">
                                                        <NuxtImg preset="article"
                                                            :src="item?.image || 'default-image.jpg'"
                                                            class="w-100 h-100" placeholder="blur" loading="eager"
                                                            format="webp" fit="cover" style="object-fit: cover;" />
                                                    </NuxtLink>
                                                </v-responsive>
                                            </v-col>
                                            <v-col cols="12" md="7" class="d-flex flex-column justify-space-between">
                                                <v-card-title class="text-subtitle-1 text-wrap">
                                                    <NuxtLink @click.prevent="$openArticle(item)" class="article-link">
                                                        {{ item.title }}
                                                    </NuxtLink>
                                                </v-card-title>
                                                <v-spacer></v-spacer>
                                                <v-card-actions class="d-flex align-center justify-space-between">
                                                    <v-btn text small color="inherit">Tanah Papua</v-btn>
                                                    <span class="text-subtitle-2">1 Jam yang lalu</span>
                                                    <v-spacer></v-spacer>
                                                    <v-btn text color="inherit">
                                                        <v-icon v-if="articles[index]?.isLike"
                                                            color="red">mdi-heart</v-icon>
                                                        <v-icon v-else>mdi-heart-outline</v-icon>
                                                        {{ articles[index]?.like }}
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-col>
                                        </v-row>
                                        <v-divider></v-divider>

                                    </v-col>
                                </v-row>
                            </CustomCard>
                        </v-col>
                        <v-col cols="6">
                            <CustomCard title="Sorotan" color="toolbar">
                                <v-row align="center">
                                    <v-col v-for="(item, index) in articles.slice(3, 10)" :key="index" cols="6">
                                        <v-card>

                                            <v-responsive class="flex-grow-1" style="aspect-ratio: 21/9">
                                                <NuxtLink @click.prevent="$openArticle(item)">
                                                    <NuxtImg preset="article" :src="item?.image || 'default-image.jpg'"
                                                        class="w-100 h-100" placeholder="blur" loading="lazy"
                                                        format="webp" fit="cover" style="object-fit: cover;" />
                                                </NuxtLink>
                                            </v-responsive>

                                            <v-card-title class="text-h7 text-wrap">
                                                <NuxtLink @click.prevent="$openArticle(item)" class="article-link">
                                                    {{ item.title }}
                                                </NuxtLink>
                                            </v-card-title>

                                            <v-card-actions>
                                                <v-btn text small color="inherit">Tanah Papua</v-btn>
                                                <v-btn text class="text-subtitle-2" small color="inherit">1 Jam yang
                                                    lalu</v-btn>


                                                <v-btn text color="inherit">
                                                    <v-icon v-if="articles[index]?.isLike"
                                                        color="red">mdi-heart</v-icon>
                                                    <v-icon v-else>mdi-heart-outline</v-icon>
                                                    {{ articles[index]?.like }}
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>


                                    </v-col>
                                </v-row>
                            </CustomCard>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>

    </v-container>

</template>

<script setup>


import { ref } from "vue";
import videoComponent from "@/components/video.vue";
import Ads from "~/components/Ads.vue";
import headlinesComponent from "@/components/headlines.vue";
import { useRouter } from "vue-router";
import CustomCard from "@/components/CustomCard.vue";

const tab = ref("headline");

const router = useRouter();

// const openArticle = (category, slug) => {
//     router.push(`/article/${category}/${slug}`);
// };

const loading = ref(true);
const { data: articles, pending: articlesPending } = await useFetch('/api/mockArticle');


const tags = ref([
    'Pelantikan Bupati',
    'Sekolah Gratis',
    "Korupsi Pertamina",
    'Banjir Bekasi',
    'Danantara',
    'Makan Bergisi Gratis',
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



</script>

<style scoped>
.article-link {
    cursor: pointer;
    color: inherit;
    /* Menggunakan warna teks dari parent */
    text-decoration: none;
    /* Menghilangkan garis bawah */
}

.article-link:hover {
    color: #1976D2;
    /* Warna biru Vuetify saat hover */
}

.article-card:hover {
    transform: translateY(-3px);
    transition: 0.2s ease-in-out;
}

.truncated-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    line-clamp: 4;
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
    object-fit: cover;
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
    height: auto;
}

.article-title {
    display: -webkit-box;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>