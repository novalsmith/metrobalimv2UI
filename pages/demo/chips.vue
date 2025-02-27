<template>
    <v-container>
        <h2>Chips Example</h2>
        <v-row>
            <v-col cols="12">
                <v-card class="pa-4">
                    <h3>Default Chip</h3>
                    <NVChips />

                    <h3 class="mt-4">Custom Chip</h3>
                    <NVChips text="Custom Tag" color="success" variant="outlined" pill />

                    <h3 class="mt-4">Closable Chip</h3>
                    <NVChips text="Removable" color="error" closable @close="onChipClose" />

                    <h3 class="mt-4">Chip with Icons</h3>
                    <NVChips text="With Icon" prependIcon="mdi-star" appendIcon="mdi-check" color="info" />

                    <h3>Default Chip Group</h3>
                    <NcChipsGroup />

                    <h3 class="mt-4">Multiple Selection</h3>
                    <NcChipsGroup :multiple="true" />

                    <h3 class="mt-4">Mandatory Selection</h3>
                    <NcChipsGroup :mandatory="true" />

                    <h3 class="mt-4">Closable Chip Group</h3>
                    <NcChipsGroup :closable="true" @close="onChipClose" />

                    <h3 class="mt-4">Filter Chips</h3>
                    <NcChipsGroup :filter="true" />

                    <h3 class="mt-4">Custom Chips</h3>
                    <NcChipsGroup :items="customChips" variant="outlined" />


                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import NVChips from "@/components/core/nvchips.vue";
import NcChipsGroup from "@/components/core/nvchipsgroup.vue";

// Data custom untuk chip group
const customChips = ref([
    { text: "Vue.js", color: "blue" },
    { text: "Nuxt.js", color: "green" },
    { text: "Vuetify", color: "orange" }, { text: "Vue.js", color: "blue" },
    { text: "Nuxt.js", color: "green" },
    { text: "Vuetify", color: "orange" }, { text: "Vue.js", color: "blue" },
    { text: "Nuxt.js", color: "green" },
    { text: "Vuetify", color: "orange" }, { text: "Vue.js", color: "blue" },
    { text: "Nuxt.js", color: "green" },
    { text: "Vuetify", color: "orange" }, { text: "Vue.js", color: "blue" },
    { text: "Nuxt.js", color: "green" },
    { text: "Vuetify", color: "orange" }, { text: "Vue.js", color: "blue" },
    { text: "Nuxt.js", color: "green" },
    { text: "Vuetify", color: "orange" },
    { text: "Tailwind", color: "purple" }
]);

definePageMeta({
    layout: "demo-default",
});

const onChipClose = () => {
    console.log("Chip removed!");
};
</script>
