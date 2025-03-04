<template>
    <v-navigation-drawer :model-value="sideMenu" temporary location="left" color="blue"
        @update:model-value="updateSideMenu">
        <v-container>
            <v-list>
                <v-list-item v-for="(menu, i) in menus" :key="i" @click="navigate(menu)">
                    <v-list-item-title>{{ menu.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-container>
    </v-navigation-drawer>
</template>

<script setup>
const props = defineProps({
    sideMenu: { type: Boolean, required: true },
    menus: { type: Array, required: true },
    navigate: { type: Function, required: true },
});

const emit = defineEmits(['update:sideMenu']);

const updateSideMenu = (newValue) => {
    emit('update:sideMenu', newValue);
};
</script>