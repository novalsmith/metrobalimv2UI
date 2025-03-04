<template>
    <v-container>
        <NVCard :title="cardConfig.title" :content="cardConfig.content" :elevation="cardConfig.elevation"
            @action="handleActionClick">
            <template #actions>
                <NVButton :text="cardConfig.actions[0].text" :variant="cardConfig.actions[0].variant"
                    :color="cardConfig.actions[0].color" :appendIcon="cardConfig.actions[0].appendIcon">
                    <template v-if="cardConfig.actions[0].prependIcon" #prepend>
                        <v-icon>{{ cardConfig.actions[0].prependIcon }}</v-icon>
                    </template>
                </NVButton>

                <NVButton class="pl-15" :text="cardConfig.actions[1].text" :color="cardConfig.actions[1].color"
                    :icon="cardConfig.actions[1].icon" :prependIcon="cardConfig.actions[1].prependIcon">
                    <template v-if="cardConfig.actions[1].prependIcon" #prepend>
                        <v-icon>{{ cardConfig.actions[1].prependIcon }}</v-icon>
                    </template>
                </NVButton>
            </template>
        </NVCard>
    </v-container>
</template>

<script setup>
import NVCard from "~/components/core/nvcard.vue";
import NVButton from "~/components/core/nvbutton.vue";

const handleActionClick = (action) => {
    console.log("Tombol diklik:", action.text);
};

const cardConfig = {
    title: "Custom Styled Card",
    subtitle: "Here is sample with sub title",
    content: "This card has external styling.",
    prependIcon: "mdi-star",
    appendIcon: "mdi-check-circle",
    elevation: 3,
    variant: "default",
    loading: true,
    actions: [
        { text: "With Append Icon", variant: "flat", color: "success", appendIcon: "mdi-lock" },
        { text: "Icon Only", color: "primary", icon: true, prependIcon: "mdi-heart" },
    ],
};

definePageMeta({
    layout: "demo-default",
});
</script>

<style scoped>
.custom-actions-test {
    background-color: #15ff00;
    color: white;
    padding: 16px;
    border-top: 1px solid #062499;
    display: flex;
    justify-content: space-between;
}
</style>