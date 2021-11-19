<div class="whitebreadcrumb breadcrumb-site">
<v-container>
    <v-breadcrumbs :items="breadcrumb_items">
        <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
        </template>
        <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                :to="item.href"
                :disabled="item.disabled"
            >
                {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>
</v-container>
</div>
