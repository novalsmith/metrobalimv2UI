<template>
    <v-row>
        <v-col cols="6">
            <h3>Category API</h3>
            <v-card>
                <Suspense>
                    <template #default>
                        <CategoryList />
                    </template>
                    <template #fallback>
                        <v-skeleton-loader type="list-item@5" />
                    </template>
                </Suspense>
            </v-card>
        </v-col>

        <v-col cols="6">
            <h3>Pinia State Management</h3>
            <CategoryListPinia />
            <CategoryDetailPinia />
        </v-col>
    </v-row>



</template>

<script setup lang="ts">
import CategoryList from '@/components/categoryList.vue';
import CategoryListPinia from '@/components/categorieslist';
import CategoryDetailPinia from '~/components/categoriesdetail';

import { useCategoryStore } from '~/stores/categories';
const categoryStore = useCategoryStore();

onMounted(() => {
    const categoriesFromApi = [
        { categoryId: 1, parentId: null, categoryName: 'Electronics' },
        { categoryId: 2, parentId: 1, categoryName: 'Laptops' },
        { categoryId: 3, parentId: 1, categoryName: 'Smartphones' },
    ];
    categoryStore.setCategories(categoriesFromApi);
});


definePageMeta({
    layout: 'demo-default',
});
</script>