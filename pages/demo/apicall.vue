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

<script setup lang="ts">
import CategoryList from '@/components/categoryList.vue';

definePageMeta({
    layout: 'demo-default',
});
</script>