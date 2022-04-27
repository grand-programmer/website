<template>
    <v-snackbar
        width="30%"
        light
        v-model="snackbar"
        background-color="pink lighten-3"
        color="pink lighten-1"
        transition="scroll-y-reverse-transition"
        top
        right
        v-bind:style="style"
    >
        <slot></slot>
        <template v-slot:action="{ attrs }">

            <v-icon color="indigo"
                    right
                    v-bind="attrs"
                    @click="snackbar = false"
            >mdi-close
            </v-icon>
        </template>


        <v-progress-linear
            absolute
            bottom
            right
            background-color="pink lighten-3"
            color="pink lighten-1"
            :value="Math.floor(100 * (currentTime / timeout))"
        />
    </v-snackbar>
</template>

<script>
export default {
    props: {
        timeout: {
            default: 5 * 1000,
        },
        color: 'default',

    },

    data() {
        return {
            snackbar:true,
            currentTime: 0,
            timeInterval: null,
            style: ''
        };
    },

    methods: {
        startProgress() {
            this.timeInterval = setInterval(() => {
                this.currentTime += 150;
            }, 150);

            this.$emit("input", false);

        },
        removeSnack(){
            this.$emit("input", false);
        }

    },

    beforeCreate() {
        $('.v-snack').remove();



    },
    computed: {},

    mounted() {
        this.startProgress();
    },

};
</script>

<style>
</style>
