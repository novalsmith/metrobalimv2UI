<template>
    <v-container>
        <h2>Button Demo</h2>
        <v-divider class="mb-4"></v-divider>

        <v-row dense>
            <v-col cols="12" sm="6" md="4" v-for="(btn, index) in buttons" :key="index">
                <NVButton :text="btn.text" :variant="btn.variant" :color="btn.color" />
            </v-col>
        </v-row>

        <h3 class="mt-6">Advanced Buttons</h3>
        <v-divider class="mb-4"></v-divider>

        <v-row dense>
            <v-col cols="12" sm="6" md="4" v-for="(btn, index) in advancedButtons" :key="'adv-' + index">
                <NVButton :text="btn.text" :variant="btn.variant" :color="btn.color" :prependIcon="btn.prependIcon"
                    :appendIcon="btn.appendIcon" :icon="btn.icon" :block="btn.block" :loading="btn.loading"
                    :disabled="btn.disabled" @click="btn.onClick ? btn.onClick() : () => { }">
                    <template v-if="btn.prependIcon" #prepend>
                        <v-icon>{{ btn.prependIcon }}</v-icon>
                    </template>

                    <template v-if="btn.appendIcon" #append>
                        <v-icon>{{ btn.appendIcon }}</v-icon>
                    </template>
                </NVButton>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import NVButton from "~/components/core/nvbutton.vue";

const showAlert = () => {
    alert("Awesome!");
};

const buttons = [
    { text: "Info", variant: "flat", color: "info" },
    { text: "Primary", variant: "flat", color: "primary" },
    { text: "Success", variant: "flat", color: "success" },
    { text: "Warning", variant: "flat", color: "warning" },
    { text: "Error", variant: "flat", color: "error" },
];

const advancedButtons = [
    { text: "Text button", variant: "text", color: "primary" },
    { text: "With Function", variant: "flat", color: "success", onClick: showAlert },
    { text: "With Prepend Icon", variant: "tonal", color: "primary", prependIcon: "mdi-check" },
    { text: "With Append Icon", variant: "flat", color: "success", appendIcon: "mdi-arrow-right" },
    { text: "Icon Only", variant: "text", color: "primary", icon: true, prependIcon: "mdi-heart" },
    { text: "Block Button", variant: "elevated", color: "secondary", block: true },
    { text: "Loading", variant: "elevated", color: "warning", loading: true },
    { text: "Disabled", variant: "outlined", color: "grey", disabled: true },
];

definePageMeta({
    layout: "demo-default",
});
</script>