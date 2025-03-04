<template>
    <div>
        <h2>Category Detail</h2>
        <p v-if="categoryStore.selectedCategory">
            Selected Category: {{ categoryStore.selectedCategory.categoryName }}
        </p>
        <p v-else>
            No category selected.
        </p>
    </div>
</template>

<script setup lang="ts">
import { useCategoryStore } from '@/stores/categories';

const categoryStore = useCategoryStore();
</script>