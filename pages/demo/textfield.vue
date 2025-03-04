<template>
    <v-row>
        <v-col cols="12">
            <h3>Text Field Examples</h3>
            <NVDivider class="mb-4" />
        </v-col>

        <v-col cols="6">
            <h4>Min Length Validation</h4>
            <NVTextField v-model="minLengthValue" label="Username (Min 5 chars)" :min-length="5" @valid="handleValid" />
            <p>Value: {{ minLengthValue }}</p>
        </v-col>

        <v-col cols="6">
            <h4>Numeric Min/Max</h4>
            <NVTextField v-model="numericValue" label="Age (18-60)" type="number" :min="18" :max="60"
                @valid="handleValid" />
            <p>Value: {{ numericValue }}</p>
        </v-col>

        <v-col cols="6">
            <h4>Email Field</h4>
            <NVTextField v-model="emailValue" label="Email" type="email" @valid="handleValid" />
            <p>Value: {{ emailValue }}</p>
        </v-col>

        <v-col cols="6">
            <h4>Password Field</h4>
            <NVTextField v-model="passwordValue" label="Password" type="password"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="togglePasswordVisibility" />
            <p>Value: {{ passwordValue }}</p>
        </v-col>

        <v-col cols="6">
            <h4>Search Field</h4>
            <NVTextField v-model="searchValue" rounded label="Search" prepend-inner-icon="mdi-magnify" clearable
                @clear="handleClear" />
            <p>Value: {{ searchValue }}</p>
        </v-col>

        <v-col cols="6">
            <h4>Plain Text Field</h4>
            <NVTextField v-model="plainTextValue" label="Plain Text" />
            <p>Value: {{ plainTextValue }}</p>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';
import NVTextField from '@/components/core/nvtextfield.vue';
import NVDivider from '@/components/core/nvdivider.vue';

const minLengthValue = ref('');
const numericValue = ref('');
const emailValue = ref('');
const passwordValue = ref('');
const searchValue = ref('');
const plainTextValue = ref('');
const showPassword = ref(false);

const handleValid = (valid) => {
    console.log('Validasi: ', valid);
};

const handleClear = () => {
    searchValue.value = '';
    alert('clear value');
};

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

definePageMeta({
    layout: "demo-default",
});
</script>