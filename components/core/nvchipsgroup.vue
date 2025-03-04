<template>
    <v-chip-group
      v-if="Array.isArray(items) && items.length"
      v-model="selected"
      :selected-class="selectedClass"
      :column="column"
      :multiple="multiple"
      :filter="filter"
      :mandatory="mandatory"
      :disabled="disabled"
    >
      <v-chip
        v-for="(item, index) in items"
        :key="index"
        :text="item.text"
        :color="item.color || color"
        :variant="variant"
        :size="size"
        :pill="pill"
        :closable="closable"
        :prepend-icon="item.prependIcon || prependIcon"
        :append-icon="item.appendIcon || appendIcon"
        :ripple="ripple"
        :disabled="disabled"
        :class="customClass"
        @click="handleClick(item, index)"
        @click:close="handleClose(item, index)"
      />
    </v-chip-group>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    items: {
      type: Array,
      required: false,
      default: () => [
        { text: "Tag 1", color: "primary" },
        { text: "Tag 2", color: "success" },
        { text: "Tag 3", color: "error" },
      ]
    },
    selectedClass: { type: String, required: false, default: "bg-blue-lighten-4" },
    column: { type: Boolean, required: false, default: false },
    multiple: { type: Boolean, required: false, default: false },
    filter: { type: Boolean, required: false, default: false },
    mandatory: { type: Boolean, required: false, default: false },
    color: { type: String, required: false, default: "primary" },
    variant: { type: String, required: false, default: "outlined" },
    size: { type: [String, Number], required: false, default: "default" },
    pill: { type: Boolean, required: false, default: false },
    closable: { type: Boolean, required: false, default: false },
    prependIcon: { type: String, required: false, default: null },
    appendIcon: { type: String, required: false, default: null },
    ripple: { type: Boolean, required: false, default: true },
    disabled: { type: Boolean, required: false, default: false },
    customClass: { type: String, required: false, default: "" },
  });
  
  const emit = defineEmits(["click", "close", "update:selected"]);
  const selected = ref([]);
  
  const handleClick = (item, index) => {
    emit("click", { item, index });
  };
  
  const handleClose = (item, index) => {
    emit("close", { item, index });
  };
  </script>
  
  <style scoped>
  /* Tambahkan styling tambahan jika diperlukan */
  </style>