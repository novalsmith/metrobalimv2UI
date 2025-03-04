<template>
    <v-app>
        <AppBar :imgLogo="imgLogo" :isLoading="isLoading" :menus="menus" :toggleMenu="toggleMenu" />
        <MenuDrawer :sideMenu="sideMenu" :menus="menus" :navigate="navigate" @update:sideMenu="updateSideMenu" />
        <v-main>
            <keep-alive>
                <NuxtPage />
            </keep-alive>
        </v-main>
        <ArticleDetailDialog ref="articleDialog" />
        <Footer />
    </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import AppBar from '@/components/AppBar.vue';
import MenuDrawer from '@/components/MenuDrawer.vue';
import Footer from '@/components/Footer.vue';
import ArticleDetailDialog from "@/components/core/articleDetailDialog.vue";

const articleDialog = ref(null);

defineExpose({ articleDialog });

const isLoading = ref(true);
const sideMenu = ref(false);
const imgLogo = "/images/metrobalimlogo.webp";

const menus = ref([
    { title: "Home", icon: "mdi-map-marker", categoryId: "/" },
    { title: "Tanah Papua", icon: "mdi-map-marker", categoryId: "/article/tanah-papua" },
    { title: "Regional", icon: "mdi-earth", categoryId: "/article/regional" },
    { title: "Internasional", icon: "mdi-web", categoryId: "/article/internasional", badge: "NEW" },
    { title: "Podcast", icon: "mdi-podcast", categoryId: "/article/podcast" },
    { title: "Jurnal", icon: "mdi-newspaper", categoryId: "/article/jurnal" },
    { title: "Sastra", icon: "mdi-book-open-page-variant", categoryId: "/article/sastra" },
    { title: "Bisnis", icon: "mdi-chart-bar", categoryId: "/article/bisnis", badge: "HOT" },
    { title: "HIV-AIDS", icon: "mdi-ribbon", categoryId: "/article/hiv-aids" },
    { title: "Insight", icon: "mdi-lightbulb-on", categoryId: "/article/insight" },
    { title: "Peristiwa", icon: "mdi-alert-circle", categoryId: "/article/peristiwa", badge: "UPDATE" },
    { title: "Video", icon: "mdi-video", categoryId: "/article/video" }
]);

onMounted(() => {
    isLoading.value = false;
});

const toggleMenu = () => {
    sideMenu.value = !sideMenu.value;
};

const navigate = (menu) => {
    console.log(`Navigating to ${menu.link}`);
    sideMenu.value = false;
};

const updateSideMenu = (newValue) => {
    sideMenu.value = newValue;
};
</script>

<style scoped>
.v-app-bar {
    display: block !important;
    visibility: visible !important;
}

.v-navigation-drawer {
    width: 250px;
}

.v-btn {
    font-size: 14px;
    padding: 10px;
}

.text-right {
    text-align: right;
}

.article-image img {
    object-fit: contain;
    width: 100%;
}
</style>