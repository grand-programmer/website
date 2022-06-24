<!--<template>
    <v-snackbar :value="value" light>
    <span>
      <slot></slot>
    </span>

        <v-progress-linear
            absolute
            bottom
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
        value: {
            default: true,
        },
    },
    data() {
        return {
            currentTime: 0,
        };
    },
    methods: {
        syncPbar() {
            //Create a timeout every 100 miliseconds
            setTimeout(() => {
                //Increment the time counter by 100
                this.currentTime += 100;

                //If our current time is larger than the timeout
                if (this.timeout <= this.currentTime) {
                    //Wait 500 miliseconds for the dom to catch up, then reset the snackbar
                    setTimeout(() => {
                        this.$emit("input", false); //Update the v-model to false
                        this.currentTime = 0; // reset the current time
                    }, 500);
                } else {
                    //Recursivly update the progress bar
                    this.syncPbar();
                }
            }, 100);
        },
    },
    computed: {
        value(v) {
            console.log(v);
            if (v) this.syncPbar();
        },
    },
};
</script>

<style>
</style>-->

<template>
        <!--    v-model="snackbar.showing"-->
        <v-snackbar
                    :key="snackbar.text + Math.random()"
                    :model="snackbar"
                    :value="snackbar.showing"
                    :timeout="snackbar.timeout"
                    top
                    width="30%"
                    right
                    persistent
                    light
                    :color="snackbar.color"
                    transition="scroll-y-reverse-transition"
                    :style="`top: ${(index*60)+8}px`"
        >
            <template v-slot:action="{ attrs }">

                <v-icon color="indigo"
                        right
                        v-bind="attrs"
                        @click="snackbar.showing = false"
                >mdi-close
                </v-icon>
            </template>
            {{ snackbar.text }}
            <my-progress-bar :snackbar="snackbar" ></my-progress-bar>
            <!--        <v-progress-linear :value="Math.floor(100 * (currentTime / snackbar.timeout ) )" bottom absolute/>-->
        </v-snackbar>

</template>

<script>
import {mapState} from 'vuex';

export default {
    name: 'MySnackbar',
    props:{
        snackbar:[]
    },

    components: {
        MyProgressBar: () => import('./MyProgressBar'),

    },
}
</script>
