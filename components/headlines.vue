<template>

    <v-row no-gutters>
        <v-col md="6" sm="12" lg="6" class="content-col">
            <v-responsive class="flex-grow-1" style="aspect-ratio: 21/9;">
                <NuxtLink @click.prevent="$openArticle(articles[0])" class="article-link">
                    <NuxtImg preset="headlineMain" :src="articles[0]?.image || 'default-image.jpg'" class="w-100 h-100"
                        placeholder="blur" loading="eager" format="webp" fit="cover"
                        style="object-fit: cover; min-height: 100%;" />
                </NuxtLink>
            </v-responsive>
            <NuxtLink @click.prevent="$openArticle(articles[0])" class="article-link">
                <v-card-title class="text-wrap text-h6">
                    {{ articles[0]?.title || 'Judul tidak tersedia' }}
                </v-card-title>
            </NuxtLink>
            <v-card-actions class="d-flex align-center justify-space-between">
                <v-btn text small>Tanah Papua</v-btn>
                <span class="text-caption ml-2">1 Jam yang lalu</span>
                <v-spacer></v-spacer>
                <v-btn text>
                    <v-icon v-if="articles[0]?.isLike" color="red">mdi-heart</v-icon>
                    <v-icon v-else>mdi-heart-outline</v-icon>
                    {{ articles[0]?.like || 0 }}
                </v-btn>
            </v-card-actions>
        </v-col>

        <v-col md="6" sm="12" lg="6" class="content-col">
            <v-row dense align="stretch">
                <v-col v-for="(article, index) in articles.slice(1, 4)" :key="article?.title || index" cols="12">
                    <v-row no-gutters class="h-100">
                        <v-col cols="12" md="6" class="d-flex flex-column">
                            <v-card-title class="truncated-title text-h6">
                                <NuxtLink @click.prevent="$openArticle(article)" class="article-link">
                                    {{ article.title }}
                                </NuxtLink>
                            </v-card-title>
                        </v-col>
                        <v-col cols="12" md="6" class="d-flex flex-column">
                            <v-responsive class="flex-grow-1" style="aspect-ratio: 21/9;">
                                <NuxtLink @click.prevent="$openArticle(article)" class="article-link">
                                    <NuxtImg preset="headlineMain" :src="article?.image || 'default-image.jpg'"
                                        class="w-100 h-100" placeholder="blur" loading="eager" format="webp" fit="cover"
                                        style="object-fit: cover;" />
                                </NuxtLink>
                            </v-responsive>
                        </v-col>
                        <v-col cols="12">
                            <v-card-actions class="d-flex align-center justify-space-between">
                                <v-btn text small>Tanah Papua</v-btn>
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
                    <v-divider></v-divider>
                </v-col>
            </v-row>
        </v-col>
    </v-row>

</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CustomCard from "@/components/CustomCard.vue";

const router = useRouter();
const loading = ref(true);

const { data: articles, pending: articlesPending } = await useFetch('/api/mockArticle');
if (articlesPending) {
    loading.value = false;
}

// const openArticle = (article) => {
//     router.push(`${article.category.parentId}/${article.category.categoryId}/${article.slug}`);
// };
</script>

<style scoped>
.content-col {
    display: flex;
    flex-direction: column;
}

.article-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.article-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.truncated-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    line-clamp: 3;
    -webkit-line-clamp: 3;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
}

.article-link {
    cursor: pointer;
    color: inherit;
    text-decoration: none;
}

.article-link:hover {
    color: #1976D2;
}
</style>