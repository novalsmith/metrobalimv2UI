<template>
    <v-container>
        <v-card theme="dark">
            <!-- button uses dark theme -->
            <v-btn>foo</v-btn>
        </v-card>

        <v-theme-provider theme="high-contrast">
            <!-- uses the high-contrast theme -->
            <v-card>...</v-card>
            <v-btn>...</v-btn>
        </v-theme-provider>


    </v-container>
</template>