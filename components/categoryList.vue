<template>
  <div v-if="error">
    <p>Terjadi kesalahan: {{ error.message }}</p>
  </div>
  <div v-else-if="groupedCategories">
    <v-list>
      <v-list-group v-for="category in groupedCategories" :key="category.categoryId" :value="category.categoryId"
        :prepend-icon="(category.subcategories && category.subcategories.length) ? 'mdi-folder' : 'mdi-file'">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" :title="category.categoryName"></v-list-item>
        </template>

        <v-list-item v-for="subcategory in category.subcategories" :key="subcategory.categoryId"
          :title="subcategory.categoryName" :prepend-icon="'mdi-file-document'"></v-list-item>
      </v-list-group>
    </v-list>
  </div>
  <div v-else>
    <p v-if="loading">Loading...</p>
    <p v-else>Tidak ada data kategori.</p>
  </div>
</template>

<script setup lang="ts">
import { useCategoriesDexie } from '@/composables/Categories';

const { groupedCategories, error, loading } = useCategoriesDexie();
</script>