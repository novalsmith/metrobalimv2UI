<template>
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
  </template>
  
  <script setup>
  import { useGroupedCategories } from '@/composables/categories';
  import { defineAsyncComponent } from 'vue'; // Import defineAsyncComponent
  
  const { groupedCategories } = await useGroupedCategories();
  </script>