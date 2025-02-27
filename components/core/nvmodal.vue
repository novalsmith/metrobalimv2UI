<template>
    <v-dialog v-model="isOpen" :fullscreen="fullscreen" :transition="dialogTransition" max-width="500">
        <v-card>
            <!-- Title Slot -->
            <v-card-title v-if="$slots.title">
                <slot name="title"></slot>
            </v-card-title>

            <!-- Text Slot -->
            <v-card-text v-if="$slots.text">
                <slot name="text"></slot>
            </v-card-text>

            <!-- Actions Slot -->
            <v-card-actions v-if="$slots.actions">
                <slot name="actions"></slot>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, computed } from "vue";

const props = defineProps({
    modelValue: Boolean, // v-model binding untuk kontrol modal
    type: {
        type: String,
        default: "default", // Bisa 'default' atau 'bottom-sheet'
        validator: (value) => ["default", "bottom-sheet"].includes(value),
    },
    fullscreen: Boolean, // Apakah modal fullscreen atau tidak
});

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(props.modelValue);

// Sinkronisasi modelValue dengan isOpen
watch(
    () => props.modelValue,
    (newValue) => {
        isOpen.value = newValue;
    }
);

// Watch ketika modal ditutup manual
watch(isOpen, (newValue) => {
    emit("update:modelValue", newValue);
});

// Atur transisi berdasarkan tipe modal
const dialogTransition = computed(() => (props.type === "bottom-sheet" ? "slide-y-reverse-transition" : "dialog-transition"));
</script>
