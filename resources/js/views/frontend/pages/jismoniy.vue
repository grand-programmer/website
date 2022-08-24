<template>
    <div class="section">
        <div class="row"><h3 class="text-center section_title mb-0">Жисмоний шахслар учун</h3></div>
        <div class="container-fluid">
            <div class="row pb-8" style="margin: 24px!important; justify-content: center; " >

                <div   class="jismoniy-card col-3" v-for="item in items">
                    <div class="jismoniy-card-header">
                    <div class="jismoniy-card-title">{{item.title}}</div>
                    <div class="jismoniy-card-image"><img src="/img/icons/cardsindirectory.png"/></div>
                    </div>
                    <div class="jismoniy-card-buttons">
                        <v-btn :to="item.url"><v-icon>mdi-book</v-icon> <span>Онлайн ўқиш</span> </v-btn>
                        <v-btn><v-icon>mdi-download</v-icon> <span>Юклаб олиш</span> </v-btn>
                    </div>
                    <div class="jismoniy-card-backgrounds">
                        <div class="position-relative">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    </div>
                </div>

            </div>


        </div>




    </div>
</template>

<script>
import apiService from "../../../src/services/apiService";

export default {
    name: "jismoniy",
    data(){
        return {
            items:[
            ]

        }
    },
    methods:{
        getMenus(){
            const _this=this;

            apiService.readMenus(112).then(function(res){
                _this.items=res.data.data
            })

        }
    },
    created(){
        this.getMenus();
    }
}
</script>

<style lang="scss" scoped>

.jismoniy-card{
    box-shadow: 0px -1px 10px rgb(0 0 0 / 25%), 0px 20px 30px rgb(0 0 0 / 25%);
    position: relative;
    padding-bottom: 35px;
    margin: 25px;
    display: block;
    max-width: 21.5%;
    transition: 0.5s ease;
    &:hover{
        background-color:#D1FAE5;
    }
    .jismoniy-card-header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        .jismoniy-card-title {
            /* padding: 0 20px; */
            text-align: center;
            font-weight: 600;
            color: #595959;
            font-size: 18px;
            margin-top: 23px;
            margin-bottom: -25px;
        }
    }
    .jismoniy-card-buttons {
        display: flex;
        flex-direction: column;
        width: 40%;
        float: right;
        margin-top: 30px;
        margin-right: -13px;
        button.v-btn,a.v-btn{
            margin: 5px 0;
            padding: 0 !important;
            width: 100%;
            height: 26px;
            background-color: #59b1a3 !important;
            cursor: pointer;
            span.v-btn__content {
                font-size: 10px;
                justify-content: flex-start;
                padding: 0;
                margin: 0;
                i.v-icon.notranslate.mdi.theme--light {
                    font-size: 15px;
                    margin: 0 15px 0 16px;

                }
                span{
                    font-size: 11px;
                    margin-right: 15px;
                }
            }
        }
    }
    .jismoniy-card-backgrounds{
        width: 100%;
        /* float: right; */
        height: 48px;
        position: absolute;
        bottom: 0;
        left: 0;
        >div{
            height: 100%;
            width: 100%;
            overflow: hidden;
        }

        span {
            &:nth-of-type(1) {
                width: 100%;
                height: 20px;
                background-color: #0d6356;
                display: block;
                position: absolute;
                bottom: 0;
                overflow: hidden;
                z-index: 20;
                &:before {
                    width: 100%;
                    content: "";
                    height: 25px;
                    background-color: #129a84;
                    display: block;
                    transform: skewY(2deg);
                    z-index: 0;
                    position: absolute;
                    top: -16px;
                    right: -47%;
                }

                &:after {
                    width: 100%;
                    content: "";
                    height: 25px;
                    background-color: #129a84;
                    display: block;
                    transform: skewY(-2deg);
                    z-index: 3;
                    position: absolute;
                    top: -16px;
                    right: 45%;
                }
            }
            &:nth-of-type(2){
                width: 100%;
                content: "";
                height: 25px;
                background-color: #129a84;
                display: block;
                transform: skewY(-2.5deg);
                z-index: 19;
                position: absolute;
                top: 31px;
                &:before{
                    content: "";
                    width: 100%;
                    height: 20px;
                    background-color: #129a84;
                    position: absolute;
                    transform: skewY(6deg);
                }
                &:after{
                    content: "";
                    width: 100%;
                    height: 20px;
                    background-color: #59b1a3;
                    position: absolute;
                    transform: skewY(8deg);
                    top: -3px;
                    z-index: -2;
                }
            }
            &:nth-of-type(3){
                width: 100%;
                height: 20px;
                background-color: #95c8bf;
                position: absolute;
                transform: skewY(7deg);
                right: 38%;
                z-index: 1;
                top: 9px;

            }
        }

    }
}



</style>
