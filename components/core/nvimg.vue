<template>
    <NuxtImg :src="imageSrc" :alt="alt" :width="width" :height="height" :sizes="sizes" :format="format"
        :quality="quality" :fit="fit" v-bind="modifiers" class="nuxt-img-responsive" @load="handleImageLoad"
        @error="handleImageError" decoding="async">

        <template #placeholder>
            <v-skeleton-loader v-if="!imageLoaded && !imageError" type="image" width="100%" height="auto" />
        </template>
    </NuxtImg>

    <div v-if="imageError" class="image-error">Gambar gagal dimuat.</div>
</template>

<script setup>
import { ref, watch, computed, onMounted } from 'vue';

const props = defineProps({
    src: { type: String, required: false, default: "" },
    alt: { type: String, required: false, default: "Gambar" },
    width: { type: [String, Number], required: false, default: "100%" },
    height: { type: [String, Number], required: false, default: "auto" },
    sizes: { type: String, required: false, default: null },
    format: { type: String, required: false, default: "webp" },
    quality: { type: [String, Number], required: false, default: 80 },
    fit: { type: String, required: false, default: "cover" },
    modifiers: { type: Object, required: false, default: () => ({}) }
});

const imageLoaded = ref(false);
const imageError = ref(false);

// Pastikan src selalu ada, gunakan placeholder jika kosong
const imageSrc = computed(() => props.src || "https://via.placeholder.com/300");

const handleImageLoad = () => {
    imageLoaded.value = true;
};

const handleImageError = () => {
    imageError.value = true;
    imageLoaded.value = true;
};

// Reset status hanya jika `src` berubah
watch(() => props.src, (newSrc, oldSrc) => {
    if (newSrc !== oldSrc) {
        imageLoaded.value = false;
        imageError.value = false;
    }
});

const isMounted = ref(false);
onMounted(() => {
    isMounted.value = true;

});
</script>

<style scoped>
.nuxt-img-responsive {
    max-width: 100%;
    height: auto;
}

.image-error {
    color: red;
    text-align: center;
}
</style>
