<template>
    <v-progress-linear :key="snackbar.index" :value="Math.floor(100 * (currentTime / timeout ) )" bottom absolute/>
</template>
<script>
export default {
    name: 'MyProgressbar',
    props: {
        timeout: {
            default: 5 * 1000,
        },
        value: {
            default: false,
        },
        time:{
            default:0
        },
        snackbar:{
            default:[]
        }
    },
    data() {
        return {
            currentTime: 0,
        };
    },
    methods: {
        syncPbar() {
            //this.currentTime=this.snackbar.timeout;
            //Create a timeout every 100 miliseconds
            setTimeout(() => {
                //Increment the time counter by 100
                this.currentTime += 50;

                //If our current time is larger than the timeout
                if (this.timeout <= this.currentTime) {
                    //Wait 500 miliseconds for the dom to catch up, then reset the snackbar
                    setTimeout(() => {
                        this.$emit("input", false); //Update the v-model to false
                        //this.value=true; //Update the v-model to false
                        this.currentTime = 0; // reset the current time
                    }, 50);
                } else {
                    //Recursivly update the progress bar
                    this.syncPbar();
                }
            }, 50);
        },
    },
    created(){
        this.timeout=this.snackbar.timeout;
            this.syncPbar();

    },
/*    watch: {
        value(v) {
            if (v) {
                this.syncPbar();
            }
        },
    },*/
}
</script>
