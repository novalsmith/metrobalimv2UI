<template>
    <v-container>
        <h2>Modal Component</h2>

        <!-- Tombol untuk membuka berbagai modal -->
        <v-btn color="success" @click="openModal = true">Open Default Modal</v-btn>
        <v-btn color="orange" class="ml-2" @click="openBottomSheet = true">Open Bottom Sheet</v-btn>
        <v-btn color="red" class="ml-2" @click="openFullscreen = true">Open Fullscreen Modal</v-btn>

        <!-- Default Modal -->
        <NVModal v-model="openModal">
            <template #title>
                <v-icon left>mdi-alert-circle</v-icon>
                <span class="font-weight-bold">Default Modal</span>
            </template>
            <template #text>
                <p>This is a fully customizable modal.</p>
            </template>
            <template #actions>
                <v-btn color="grey" variant="flat" @click="openModal = false">Cancel</v-btn>
                <v-btn color="blue" variant="flat" @click="handleConfirm">Confirm</v-btn>
            </template>
        </NVModal>

        <!-- Bottom Sheet Modal -->
        <NVModal v-model="openBottomSheet" type="bottom-sheet">
            <template #title>
                <v-icon left>mdi-chevron-up</v-icon>
                <span class="font-weight-bold">Bottom Sheet Modal</span>
            </template>
            <template #text>
                <p>This modal slides up from the bottom.</p>
            </template>
            <template #actions>
                <v-btn color="grey" variant="flat" @click="openBottomSheet = false">Close</v-btn>
            </template>
        </NVModal>

        <!-- Fullscreen Modal -->
        <NVModal v-model="openFullscreen" fullscreen>
            <template #title>
                <v-icon left>mdi-fullscreen</v-icon>
                <span class="font-weight-bold">Fullscreen Modal</span>
            </template>
            <template #text>
                <p>This modal takes up the full screen.</p>
            </template>
            <template #actions>
                <v-btn color="red" variant="flat" @click="openFullscreen = false">Exit</v-btn>
            </template>
        </NVModal>
    </v-container>
</template>

<script setup>
import { ref } from "vue";
import NVModal from "~/components/demo/nvmodal.vue";

const openModal = ref(false);
const openBottomSheet = ref(false);
const openFullscreen = ref(false);

const handleConfirm = () => {
    console.log("Confirmed!");
    openModal.value = false;
};

definePageMeta({
    layout: "demo-default",
});
</script>
