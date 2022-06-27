<template>
    <v-navigation-drawer app>
        <v-list>
            <template v-for="(navItem, index) in navigationItems">
                <list-group v-if="isGroupItem(navItem)" :key="index" :item="navItem"></list-group>
                <list-item v-else :key="index" :text="navItem.text" :icon="navItem.icon"></list-item>
            </template>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import ListItem from "./ListItem";
import ListGroup from "./ListGroup";
export default defineComponent({
    components: { ListItem, ListGroup },
    setup() {
        const navigationItems = [
            {
                text: "Nested Item1",
                icon: "mdi-account",
                children: [
                    {
                        text: "AChild1",
                        icon: "mdi-account",
                        children: [{ text: "AAChild1" }, { text: "AAChild2" }],
                    },
                    { text: "AChild2" },
                    { text: "AChild3" },
                ],
            },
            {
                text: "Nested Item2",
                icon: "mdi-account",
                children: [{ text: "BChild1" }, { text: "BChild2" }],
            },
            { text: "Root Item" },
        ];
        function isGroupItem(navItem) {
            return navItem.children && navItem.children.length > 0;
        }
        return {
            navigationItems,
            isGroupItem,
        };
    },
});
</script>

<style></style>
