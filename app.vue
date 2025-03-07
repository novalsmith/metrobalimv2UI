<template>
  <!-- <v-app> -->
    <v-layout>
      <!-- Layout utama Nuxt -->
      <NuxtLayout>
        <KeepAlive>
          <NuxtPage />
        </KeepAlive>
      </NuxtLayout>
    </v-layout>
  <!-- </v-app> -->
</template>

<script setup>
import { KeepAlive } from 'vue';

</script>