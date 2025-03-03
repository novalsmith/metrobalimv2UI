<template>
    <v-card max-width="300">
        <Suspense>
            <template #default>
                <CategoryList />
            </template>
            <template #fallback>
                <v-skeleton-loader type="list-item@5" />
            </template>
        </Suspense>
    </v-card>
</template>

<script setup>
import CategoryList from '@/components/categoryList.vue'; // Import CategoryList

definePageMeta({
    layout: "demo-default",
});
</script>