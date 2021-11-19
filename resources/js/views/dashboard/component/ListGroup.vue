<template>
    <v-list-group :prepend-icon="(subGroup) ? null : item.icon" :sub-group="subGroup">
        <template v-slot:activator>
            <v-list-item-title>{{ item.text }} + {{subGroup}}</v-list-item-title>
        </template>

        <template v-for="(child, i) in item.children">
            <list-group v-if="isGroupItem(child)" :key="i" :item="child" subGroup></list-group>
            <list-item v-else :key="i" :text="child.text" :icon="child.icon"></list-item>
        </template>
    </v-list-group>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import ListItem from "./ListItem";
export default defineComponent({
    name: "list-group",
    components: {
        ListItem,
    },
    props: {
        item: {
            type: Object,
            default: () => ({
                text: "",
                icon: "",
                children: [],
            }),
        },
        subGroup: {
            type: Boolean,
            default: false
        },
    },
    setup() {
        function isGroupItem(item) {
            return item.children && item.children.length > 0;
        }
        return {
            isGroupItem,
        };
    },
});
</script>

<style></style>
