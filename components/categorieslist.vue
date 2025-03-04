<template>
    <div>
        <h2>Category List</h2>
        <v-select v-model="selectedCategory" :items="categoryStore.categories" item-title="categoryName"
            item-value="categoryId" return-object label="Select a category"></v-select>
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '~/stores/categories';
import { storeToRefs } from 'pinia';

const categoryStore = useCategoryStore();
const { selectedCategory } = storeToRefs(categoryStore);
</script>