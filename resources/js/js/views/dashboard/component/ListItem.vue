<template>
    <v-list-item>
        <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ text }}</v-list-item-title>
    </v-list-item>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
export default defineComponent({
    props: {
        text: {
            type: String,
            value: "",
        },
        icon: {
            type: String,
            value: "",
        },
    },
    setup() {
        return {};
    },
});
</script>

<style></style>
