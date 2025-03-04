<template>
    <v-text-field v-model="inputValue" :label="label" :prepend-inner-icon="prependInnerIcon" :density="density"
        :variant="variant" :rounded="rounded" :hide-details="hideDetails" :error-messages="errorMessages"
        :loading="loading" :color="color" :size="size" @click:clear="handleClear" @input="validateInput"></v-text-field>
</template>

<script setup>
import { defineProps, ref, watch, computed, defineEmits } from 'vue';

const props = defineProps({
    label: { type: String, default: '' },
    prependInnerIcon: { type: String, default: '' },
    density: { type: String, default: 'compact' },
    variant: { type: String, default: 'outlined' },
    rounded: { type: Boolean, default: false },
    hideDetails: { type: Boolean, default: true },
    minLength: { type: Number, required: false },
    modelValue: { type: String, default: '' },
    color: { type: String, default: 'primary' },
    size: { type: String, default: 'default' }
});

const emit = defineEmits(['update:modelValue', 'input', 'blur', 'valid', 'clear']);

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
    if (props.minLength && inputValue.value) {
        const minLengthRule = (value) => value.length >= props.minLength || `Minimal ${props.minLength} karakter`;
        const message = minLengthRule(inputValue.value);
        if (typeof message === 'string') {
            messages.push(message);
        }
    }
    return messages;
});

const handleClear = () => {
    emit('clear');
    emit('valid', true);
    loading.value = false;
};

const validateInput = (value) => {
    loading.value = true;
    if (props.minLength && value) {
        const isValid = value.length >= props.minLength;
        emit('valid', isValid);
    } else {
        emit('valid', true);
    }
    loading.value = false;
};
</script>