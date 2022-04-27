<template>
    <div class="map">
        <v-card class="sidebar">
            <div class="cars">
                <div class="car_item" v-for="car_item in cars">
                    <v-row>
                        <v-col cols="6">
                            <p>Давлат рақами: <b>{{car_item.number}}</b></p>
                            <p>Ўқлар сони: <b>{{car_item.os}}</b></p>
                            <p>Вазни: <b>{{car_item.weight}} кг</b></p>

                        </v-col>
                        <v-col cols="6">
                            <img :src="car.image"/>
                        </v-col>
                    </v-row>
                </div>
            </div>
            <div><canvas id="canvas"></canvas></div>
        </v-card>
        <yandex-map
            ref="map"
            :zoom="6.4"
            :coords="center"
            :settings="settings"
            style="height:100vh;"
            :center="center"
            :scroll-zoom="false"
            cluster-name="1"
            :controls="[]"
            @map-was-initialized="mapLoaded"
        >
            <ymap-marker
                v-for="n in markers"
                :key="n.id"
                :marker-id="n.id"
                :coords="n.coord" ,
                :icon="n.icon"
                :init-without-markers="true"
                :balloon-template="mapBalloon(n)"
            ></ymap-marker>
        </yandex-map>

    </div>
</template>
<script>
import JSMpeg from 'jsmpeg';
//let ws =new WebSocket("ws://192.168.214.88:9001");
let player = new JSMpeg("wss://new.customs.uz:9000", {
    canvas: document.getElementById('canvas'),
    autoplay:true,audio:false,loop: true// Canvas should be a canvas DOM element
})
//rtsp://admin:yallama27001@172.31.27.74:554/Streaming/Channels/101/
import {yandexMap} from 'vue-yandex-maps';

export default {
    data: () => ({
        car: {
            id: 1,
            number: "01 957 GEA",
            os: 5,
            weight: 15000,
            image: "img/map/man_number.jpg"
        },
        cars:[],
        markers: [
            {
                coord: [40.573002, 72.759525],
                icon: {color: 'red',},
                text: 'hello, world!!',
                name: 'dostlik'
            },
            {
                coord: [40.967901, 68.727624],
                icon: {color: 'blue',},
                text: 'text',
                name: 'yallama'
            },
            {
                coord: [40.283859, 71.995964],
                icon: {color: 'red',},
                text: 'text',
                name: 'ozbekiston'
            },
            {
                coord: [41.558218, 60.991251],
                icon: {color: 'blue',},
                text: 'text',
                name: 'tortkol'
            },
        ].map((n, i) => ({
            ...n,
            id: i + 1,
            icon: {
                color: n.icon.color,
                layout: 'default#imageWithContent',
                imageSize: [43, 43],
                imageOffset: [-15, -38],
                imageHref: '/img/map/point.png',
                /*imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
                imageOffset: [5, 5],
                content: '123 v12',*/
                contentLayout: '<div class="marker-center ' + (n.name) + '"></div>',
            }
        })),
        myMap: {},
        ballonInDiv: 0,
        balloonTemplate: `
              <div class="ballon-content row">
                  <div class="col-6 ballon-text">
                      <p>Давлат рақами: <b>01 957 GEA</b></p>
                      <p>Ўқлар сони: <b>5</b></p>
                      <p>Вазни: <b>15 тонна</b></p>
                  </div>
                  <div class="col-6">
                    <img src="img/map/man_number.jpg"/>
                  </div>
              </div>`,
        center: [41.540033, 62.138441],
        settings: {
            apiKey: '93d7f434-85aa-4368-88cb-2c42a146472d',
            lang: 'ru_RU',
            enterprise: true,
            version: '2.1'
        },
        /*        clusterOptions: {
                    "1": {
                        clusterDisableClickZoom: false,
                        clusterOpenBalloonOnClick: false,
                        clusterBalloonLayout: [
                            '<ul class=list>',
                            '{% for geoObject in properties.geoObjects %}',
                            '<li><a href=# class="list_item">{{ geoObject.properties.balloonContentHeader|raw }}</a></li>',
                            '{% endfor %}',
                            '</ul>',
                        ].join(''),
                    },
                },*/

    }),
    mounted() {
        this.cars.push(this.car,this.car,this.car);
        setTimeout(() => {
            this.ballonAnimate()

        }, 1000);
    },
    methods: {
        showBalloon: function () {
            //this.myMap.setCenter(this.center);
            this.myMap.balloon.open(this.markers[1].coord, this.mapBalloon(this.markers[1]));

        },
        ballonAnimate() {
            var app=this;
            let elem = $(".ballon-content.row.yallama");
            //console.log(elem)
            let position = elem[0].getBoundingClientRect();
            //let position = $(".marker-center.2").closest('ymaps')[0].getBoundingClientRect().left;
            //let position = this.$refs['marker1'].getBoundingClientRect().x
            //console.log(position)
            $(".ymaps-2-1-79-balloon__tail").css('display', "none");
            $(".ymaps-2-1-79-balloon__close").css('display', "none");
            $(".ymaps-2-1-79-balloon__content").css('margin', "0");
            elem.css('padding-left', "30px")
            elem.find('.col-6.ballon-text').css('display', 'none');
            elem.closest('.ymaps-2-1-79-balloon').css('width', 230).animate({
                top: "-" + (position.y - 150),
                left: "-" + position.x,
            }, {
                duration: 3000,
                specialEasing: {
                    width: "linear",
                    height: "easeOutBounce"
                },
                complete: function () {
                    app.ballonIdDiv(1)
                }
            })
        },
        ballonIdDiv: function (ballon_id) {
            this.ballonInDiv = ballon_id;
            this.cars.push(this.car);
            $(".cars .car_item:nth-of-type(1)").animate({
                margin:'-140px 0 0 0'
            },1000)

        },
        mapLoaded: function (myMap) {
            this.myMap = myMap;
            this.showBalloon();

        },
        mapBalloon: function (billboard) {

            return `
              <div class="ballon-content row ` + billboard.name + `">
                  <div class="col-6 ballon-text">
                      <p>Давлат рақами: <b>01 957 GEA</b></p>
                      <p>Ўқлар сони: <b>5</b></p>
                      <p>Вазни: <b>15 тонна</b></p>
                  </div>
                  <div class="col-6">
                    <img src="img/map/man_number.jpg"/>
                  </div>
              </div>
      `;
        }
    },
    components: {
        yandexMap
    }
};
</script>
