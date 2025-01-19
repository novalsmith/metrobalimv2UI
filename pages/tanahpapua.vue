<template>
    <v-container>
        <!-- Featured Article -->
        <v-row>
            <v-col cols="8">
                <v-card>
                    <v-img :src="articles[0].image" cover class="align-end"
                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                        <v-card-title class="text-white">
                            <v-subheading class="headline">{{ articles[0].title }}</v-subheading>
                        </v-card-title>
                        <v-divider></v-divider>
                        <!-- <v-card-subtitle>{{ articles[0].subtitle }}</v-card-subtitle> -->
                        <v-card-actions>
                            <v-btn color="primary" text>Baca Selengkapnya</v-btn>
                        </v-card-actions>
                    </v-img>

                </v-card>
            </v-col>
            <v-col cols="4">
                <v-col v-for="(item, index) in articles.slice(1,3)" :key="index">
                    <v-card>
                        <v-img :src="item.image" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px" cover>
                            <v-card-title class="text-white" v-text="item.title"></v-card-title>
                        </v-img>
                    </v-card>
                   
                </v-col>

            </v-col>
        </v-row>

        <v-row>
 
                <v-col v-for="(item, index) in articles.slice(1,3)" :key="index" cols="6">
                    <v-card>
                        <v-img :src="item.image" class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px" cover>
                            <v-card-title class="text-white" v-text="item.title"></v-card-title>
                        </v-img>
                    </v-card>
                   
                </v-col>
        </v-row>

        <!-- List of Articles -->
        <v-row>
            <v-col v-for="(item, index) in articles.slice(1,3)" :key="index" cols="12" md="6">
                <v-card class="article-card hoverable">
                    <v-img :src="item.image" height="300px" cover></v-img>
                    <v-card-text>
                        <v-card-title>
                            <v-caption class="font-weight-bold">{{ item.title }}</v-caption>
                        </v-card-title>
                        <v-card-subtitle class="text-truncate">
                            {{ item.subtitle }}
                        </v-card-subtitle>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="secondary" text>Baca</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
             
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from "vue";

// Articles data
const articles = ref([
    {
        title: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua",
        subtitle: "Refleksi Perjalanan Tahun 2024 : Membangun Fondasi dan Identitas Pegunungan Papua.",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/1-1-1024x576.png",
    },
    {
        title: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
        subtitle: "Sidang Paripurna DPD RI Nelson Wenda Laporkan Persoalan dan Isu Strategis Di Provinsi Papua Pegunungan",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/IMG-20250114-WA0051.jpg",
    },
    {
        title: "Polda papua disoroti ? Keadilan untuk Tobias Silak",
        subtitle: "Polda papua disoroti ? Keadilan untuk Tobias Silak",
        image: "https://metrobalim.net/wp-content/uploads/2025/01/Blue-and-Yellow-Gradient-Meditation-Youtube-Thumbnail-12.png",
    },
]);
</script>

<style scoped>
 
.article-card:hover {
    transform: translateY(-2px);
    transition: 0.3s ease-in-out;
}
</style>
