<template>
    <v-app>
        <v-layout>
            <v-navigation-drawer app>
                <v-list>
                    <v-list-item title="Dashboard" to="/admin"></v-list-item>
                    <v-list-item title="Kelola Berita" to="/admin/berita"></v-list-item>
                    <v-list-item title="Keluar" @click="logout"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-app-bar title="Admin Panel"></v-app-bar>

            <v-main>
                <slot />
            </v-main>
        </v-layout>
    </v-app>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
};
</script>``