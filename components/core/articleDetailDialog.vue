<template>
    <v-dialog v-model="isOpen" fullscreen transition="dialog-bottom-transition">
        <v-card>
            <v-toolbar>
                <v-btn icon="mdi-arrow-left" @click="closeModal"></v-btn>
                <v-toolbar-title>Detail Artikel</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-btn icon @click="toggleLike">
                    <v-icon :color="liked ? 'red' : 'grey'">mdi-heart</v-icon>
                </v-btn>
                <span class="likes-count">{{ likeCount }}</span>
            </v-toolbar>

            <v-container>
                <h1>{{ articleTitle }}</h1>
                <p>Slug: {{ slug }}</p>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const isOpen = ref(false);
const slug = ref("");
const articleTitle = ref("");
const liked = ref(false);
const likeCount = ref(120);
const router = useRouter();

const openModal = (newSlug, title) => {
    slug.value = newSlug;
    articleTitle.value = title;
    isOpen.value = true;
    router.push(`/article/${newSlug}`);
};

const closeModal = () => {
    isOpen.value = false;
    router.replace("/");
};

const toggleLike = () => {
    liked.value = !liked.value;
    likeCount.value += liked.value ? 1 : -1;
};

defineExpose({ openModal });
</script>
