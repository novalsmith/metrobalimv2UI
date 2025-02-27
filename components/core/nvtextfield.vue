<template>
    <v-text-field v-model="inputValue" v-bind="config" :error-messages="errorMessages" :loading="loading"
        @click:clear="handleClear" @input="validateInput"></v-text-field>
</template>


<script setup>
import { defineProps, ref, watch, computed, defineEmits } from 'vue';

const props = defineProps({
    config: {
        type: Object,
        default: () => ({
            label: '',
            prependInnerIcon: '',
            density: 'compact',
            variant: 'solo-filled',
            rounded: true,
            hideDetails: true,
        }),
        description: 'Konfigurasi text field',
    },
    minLength: { // Menerima minLength sebagai prop
        type: Number,
        required: false,
        description: 'Minimal karakter'
    },
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue', 'input', 'blur', 'valid']);

const inputValue = ref(props.modelValue);
const loading = ref(false);

watch(
    () => props.modelValue,
    (newValue) => {
        inputValue.value = newValue;
    }
);

watch(inputValue, (newValue) => {
    emit('update:modelValue', newValue);
    emit('input', newValue);
    validateInput(newValue);
});

const emitBlur = (event) => {
    emit('blur', event);
};
const errorMessages = computed(() => {
    let messages = [];
    if (props.minLength && inputValue.value) { // Periksa inputValue.value
        const minLengthRule = (value) => value.length >= props.minLength || `Minimal ${props.minLength} karakter`;
        const message = minLengthRule(inputValue.value);
        if (typeof message === 'string') {
            messages.push(message);
        }
    }
    return messages;
});

const handleClear = () => {
    // inputValue.value = "";
    emit('clear');
    emit('valid', true); // Emit valid true setelah clear
    loading.value = false; // Reset loading
};

const validateInput = (value) => {
    loading.value = true;
    if (props.minLength && value) { // Periksa value di sini juga
        const isValid = value.length >= props.minLength;
        emit('valid', isValid);
    } else {
        emit('valid', true);
    }
    loading.value = false;
};

</script>