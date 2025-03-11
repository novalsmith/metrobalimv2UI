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
        <CustomCard title="Topik Populer">
            <v-chip-group variant="outlined" selectedClass="text-info">
                <v-chip v-for="tag in tags" :key="tag" class="rounded" :text="tag"></v-chip>
            </v-chip-group>

        </CustomCard>




    </v-container>


    <v-container>
        <CustomCard>
            <!-- headlines -->
            <!-- Tabs untuk Headline dan Video -->
            <v-tabs v-model="tab">
                <v-tab value="headline"><v-icon size="25" class="mr-2">mdi-newspaper-variant-outline</v-icon>
                    Headline</v-tab>
                <v-tab value="video"> <v-icon size="25" class="mr-2">mdi-video</v-icon> Live Update</v-tab>
            </v-tabs>

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
    </v-container>


    <v-container>

        <v-row>
            <v-col cols="12" md="7">
                <CustomCard title="Terbaru">
                    <v-row>
                        <v-col v-for="(item, index) in articles.slice(3, 10)" :key="index" cols="12">
                            <v-row>
                                <v-col cols="12" md="5">
                                    <v-responsive class="flex-grow-1" style="aspect-ratio: 21/9">
                                        <NuxtLink @click.prevent="openArticle(item.category, item.slug)">
                                            <NuxtImg preset="article" :src="item?.image || 'default-image.jpg'"
                                                class="w-100 h-100" placeholder="blur" loading="lazy" format="webp"
                                                fit="cover" style="object-fit: cover;" />
                                        </NuxtLink>
                                    </v-responsive>
                                </v-col>
                                <v-col cols="12" md="7" class="d-flex flex-column justify-space-between">
                                    <v-card-title class="text-h6 text-wrap">
                                        <NuxtLink @click.prevent="openArticle(item.category, item.slug)"
                                            class="article-link">
                                            {{ item.title }}
                                        </NuxtLink>
                                    </v-card-title>
                                    <v-spacer></v-spacer>
                                    <v-card-actions class="d-flex align-center justify-space-between">
                                        <v-btn text small color="inherit">Tanah Papua</v-btn>
                                        <span class="text-subtitle-2">1 Jam yang lalu</span>
                                        <v-spacer></v-spacer>
                                        <v-btn text color="inherit">
                                            <v-icon v-if="articles[index]?.isLike" color="red">mdi-heart</v-icon>
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
            <v-col cols="12" md="5" lg="5">
                <CustomCard title="Trending" class="mb-5">
                    <v-list>
                        <v-list-item class="truncated-title" v-for="(article, index) in articles.slice(0, 5)"
                            :key="index">
                            <NuxtLink to="/" class="article-link">
                                {{ index + 1 }}. {{ articles[index]?.title }}
                            </NuxtLink>
                        </v-list-item>

                    </v-list>


                </CustomCard>


                <CustomCard class="mb-5">
                    <v-row dense justify="center" align="center">
                        <v-btn icon href="https://www.facebook.com/" target="_blank" color="blue darken-4" class="mr-1"
                            title="Follow us on Facebook">
                            <v-icon large>mdi-facebook</v-icon>
                        </v-btn>
                        <v-btn icon href="https://www.instagram.com/" target="_blank" color="pink darken-2" class="mr-1"
                            title="Follow us on Instagram">
                            <v-icon large>mdi-instagram</v-icon>
                        </v-btn>
                        <v-btn icon href="https://www.youtube.com/" target="_blank" color="red darken-4" class="mr-1"
                            title="Subscribe to our YouTube channel">
                            <v-icon large>mdi-youtube</v-icon>
                        </v-btn>
                        <v-btn icon href="https://twitter.com/" target="_blank" color="light-blue darken-1" class="mr-1"
                            title="Follow us on Twitter">
                            <v-icon large>mdi-twitter</v-icon>
                        </v-btn>
                        <v-btn icon href="https://wa.me/your-number" target="_blank" color="green darken-2" class="mr-1"
                            title="Chat with us on WhatsApp">
                            <v-icon large>mdi-whatsapp</v-icon>
                        </v-btn>
                    </v-row>
                </CustomCard>




                <CustomCard class="mb-5">

                    <Ads src="https://metrobalim.net/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-11-at-05.21.46_0b833506-768x922.jpg"
                        alt="Iklan Metro Bali" :modifiers="{ format: 'webp', quality: 80 }"
                        @click="handleImageAdClick" />

                </CustomCard>


            </v-col>
        </v-row>


    </v-container>

    <!-- <v-container>
        <CustomCard title="Live Update" class="mb-5">
            <videoComponent />
        </CustomCard>
    </v-container> -->


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

const openArticle = (category, slug) => {
    router.push(`/article/${category}/${slug}`);
};

const loading = ref(true);
const { data: articles, pending: articlesPending } = await useFetch('/api/mockArticle');


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
    height: auto;
}

.article-title {
    display: -webkit-box;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>