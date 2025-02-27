<template>
    <v-card class="pa-4 mb-4">
        <v-tabs v-model="activeTab" background-color="primary">
            <v-tab value="vuetify">Vuetify</v-tab>
            <v-tab v-if="scriptCode" value="script">Script</v-tab>
        </v-tabs>

        <v-window v-model="activeTab">
            <!-- Tab Vuetify -->
            <v-window-item value="vuetify">
                <v-sheet class="pa-3 overflow-auto code-block">
                    <code>{{ code }}</code>
                </v-sheet>
            </v-window-item>

            <!-- Tab Script (Hanya jika scriptCode ada) -->
            <v-window-item v-if="scriptCode" value="script">
                <v-sheet class="pa-3 overflow-auto code-block">
                    <code>{{ scriptCode }}</code>
                </v-sheet>
            </v-window-item>
        </v-window>

        <v-card-actions>
            <v-spacer />
            <v-btn icon @click="copyCode">
                <v-icon v-if="copied">mdi-check</v-icon>
                <v-icon v-else>mdi-content-copy</v-icon>
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useClipboard } from "@vueuse/core";

const props = defineProps({
    code: String,
    scriptCode: String, // Opsional, hanya untuk tab script
});

const { copy, copied } = useClipboard();
const activeTab = ref("vuetify");

const copyCode = () => {
    const textToCopy = activeTab.value === "vuetify" ? props.code : props.scriptCode;
    copy(textToCopy);
};
</script>

<style scoped>
.code-block {
    background-color: #1e1e1e;
    color: #fff;
    font-family: monospace;
    white-space: pre-wrap;
    max-height: 300px;
    overflow-y: auto;
    padding: 10px;
    border-radius: 8px;
}
</style>
