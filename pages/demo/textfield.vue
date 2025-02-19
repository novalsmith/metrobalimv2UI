<template>
    <v-row>
        <v-col cols="6">
            <h3>Text Field with Validation</h3>
            <NVDivider class="mb-10" />
            <NVTextField v-model="searchTextWithMinValue" :config="textFieldConfig" :min-length="3" @valid="handleValid"
                @clear="handleClear" />
            <div class="mt-5">
                <p>Value: {{ searchTextWithMinValue }}</p>
            </div>
        </v-col>
        <v-col cols="6">
            <h3>Text Field without Validation</h3>
            <NVDivider class="mb-10" />
            <NVTextField v-model="searchTextWithoutMinValue" :config="textFieldConfig" @valid="handleValid"
                @clear="handleClear2" />
            <div class="mt-5">
                <p>Value: {{ searchTextWithoutMinValue }}</p>
            </div>
        </v-col>
    </v-row>
</template>


<script setup>
import { ref } from 'vue';
import NVTextField from '@/components/demo/nvtextfield.vue';
import NVDivider from '@/components/demo/nvdivider.vue';

const searchTextWithMinValue = ref('');
const searchTextWithoutMinValue = ref('');
const isValid = ref(true);

const handleValid = (valid) => {
    isValid.value = valid;
    console.log('Validasi: ', valid);
};

const handleClear = () => {
    searchTextWithMinValue.value = "";
    alert('clear value');
};

const handleClear2 = () => {
    searchTextWithoutMinValue.value = "";
    alert('clear value');
};

const textFieldConfig = {
    label: 'Search',
    prependInnerIcon: 'mdi-magnify',
    rounded: true,
    density: 'compact',
    variant: 'solo-filled',
    clearable: true,
    hideDetails: true,
};

definePageMeta({
    layout: "demo-default",
});
</script>