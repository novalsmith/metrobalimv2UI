<template>
    <v-container>
        <NVCard :config="cardConfig" @action="handleActionClick">
            <!-- Append Slot -->
            <template v-if="cardConfig.title" #title>
                {{ cardConfig.title }}
            </template>

            <template v-if="cardConfig.content" #default>
                {{ cardConfig.content }}
            </template>

            <template v-if="cardConfig.actions.length > 0" #actions>




                <NVButton :config="cardConfig.actions[0]">
                    <!-- Prepend Slot -->
                    <template v-if="cardConfig.actions[0].prependIcon" #prepend>
                        <v-icon>{{ cardConfig.actions[0].prependIcon }}</v-icon>
                    </template>


                </NVButton>

                <NVButton class="pl-15" :config="cardConfig.actions[1]">
                    <!-- Prepend Slot -->
                    <template v-if="cardConfig.actions[1].prependIcon" #prepend>
                        <v-icon>{{ cardConfig.actions[1].prependIcon }}</v-icon>
                    </template>


                </NVButton>




            </template>
        </NVCard>


    </v-container>
</template>

<script setup>
import NVCard from "~/components/demo/nvcard.vue";
import NVButton from "~/components/demo/nvbutton.vue";

const handleActionClick = (action) => {
    console.log("Tombol diklik:", action.text);
};
const cardConfig = {
    title: "Custom Styled Card",
    subtitle:"Here is sample with sub title",
    content: "This card has external styling.",
    prependIcon: "mdi-star",
    appendIcon: "mdi-check-circle",
    elevation: 3,
    variant: 'default',
    loading: true,
    actions: [
        { text: "With Append Icon", variant: "flat", color: "success", appendIcon: "mdi-lock" },
        { text: "Icon Only", color: "primary", icon: true, prependIcon: "mdi-heart" },
    ]
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