<template>
        <label class="radio-button " :class="{checked:((selectedValue==value || (!selectedValue && value==0 )))}" >
            <span class="menu_slider"></span>
            <input type="radio" :name="name" :value="value" @change="updateActive" v-model="Radio"/>
            {{ label }}
        </label>
</template>

<script>
export default {
    model: {
        prop: 'selectedValue',
        event: 'onUpdate'
    },
    props: {
        "label": { type: String, default: "", required:true },
        "value": { type: Number, default: 0 },
        "name": { type: String, default: "" },
        "selectedValue": { type: Number, default: 0 }
    },

    methods: {
        updateActive() {
            this.$emit('onUpdate', this.value)
        },

    },
    computed: {
        Radio: {
            get() {
                return this.selectedValue;
            },
            set(val) {
                this.$emit("change", val);
            }
        }
    }

}
</script>
<style>
.radio-button input[name='appeal_type']{
    opacity: 0;
    position: absolute;
}
 label.radio-button{
    font-weight:400;
    font-size: 15px;
    margin-right: 20px;
    cursor:pointer;
    width: max-content;
    padding-bottom:5px ;
}
label.checked.radio-button{
    color:#39ae69;
    transition: 0.5s;
}
.radio-button .menu_slider
{
    bottom: 0;
    top: unset;
}
.radio-button.checked .menu_slider
{    width: 100%;
    transition: width 0.8s ease;
}
.radio-button{
    position: relative;
}

</style>
