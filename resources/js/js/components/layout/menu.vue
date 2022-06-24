<template>
    <ul class="navbar-nav nav">


        <li class="nav-item dropdown" :class="($route.params.id==link.id) ? 'active' : '' "
            v-for="(link,index) in links" :key="index">
            <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" :to="link.url" v-if="link.children && link.children[0]">
                <span class="menu_slider"></span>{{ link.title }}
            </router-link>
            <router-link class="nav-link" :to="link.url" v-else ><span class="menu_slider"></span>{{ link.title }}
            </router-link>
            <ul class="dropdown-menu" v-if="(link.children && link.children[0])">
                <li v-for="(sublink,index) in link.children" :key="index" v-if="sublink ">
                    <router-link :to="sublink.url" class="dropdown-item"> {{ sublink.title }}</router-link>
                    <ul class="submenu dropdown-menu" v-if="(sublink.children && sublink.children[0])">
                        <li v-for="(sublinkchildren,index) in sublink.children" :key="index" v-if="sublinkchildren">
                            <router-link :to="sublinkchildren.url" class="dropdown-item"> {{ sublinkchildren.title }}
                            </router-link>
                            <ul class="submenu dropdown-menu" v-if="(sublinkchildren.children && sublinkchildren.children[0])">
                                <li v-for="(slch,index) in sublinkchildren.children" :key="index + slch.id " v-if="slch">
                                    <router-link :to="slch.url" class="dropdown-item"> {{ slch.title }}
                                    </router-link>

                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>
        </li>
    </ul>
    <!-- navbar-collapse.// -->
    <!--    <ul class="nav navbar-nav" >
            <li class="dropdown submenu " :data-params="$route.params.id" :data-link="link.id" :class="($route.params.id==link.id) ? 'active' : '' " v-for="(link,index) in links" :key="index">

                <router-link :to="link.url" class="dropdown-toggle" data-toggle="dropdown" role="button"
                   aria-haspopup="true" aria-expanded="false" v-if="link.children"><span class="menu_slider"></span>{{link.title}}</router-link>
                <router-link :to="link.url" v-else><span class="menu_slider"></span> {{ link.title }}</router-link>
                <ul class="dropdown-menu" v-if="link.children">
                    <li v-for="(sublink,index) in link.children" :key="index" v-if="sublink" :class="sublink.children ? 'dropdown submenu ':''">
                        <router-link :to="sublink.url" class="dropdown-toggle" data-toggle="dropdown" role="button"
                                     aria-haspopup="true" aria-expanded="false"  >{{sublink.title}}</router-link>
                        <ul class="dropdown-submenu" v-if="sublink.children">
                            <li v-for="(sublinkchildren,index) in sublink.children" :key="index">
                                <router-link :to="sublinkchildren.url" >{{sublinkchildren.title}}</router-link>
                            </li>
                        </ul>
                    </li>

                </ul>
            </li>
        </ul>-->
</template>
<script>
import api from "./../../src/services/apiService";

export default {
    name: 'Topmenu',
    data() {
        return {
            links: []
        }

    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            api.readMenusFront().then((response) => {
                this.links = response.data;
                this.$store.dispatch('SET_MENU',this.links);
            }).catch((error) => {
                console.log(error)
            })
        },
    }
}
document.addEventListener("DOMContentLoaded", function () {
// make it as accordion for smaller screens
    if (window.innerWidth < 992) {

        // close all inner dropdowns when parent is closed
        document.querySelectorAll('.navbar .dropdown').forEach(function (everydropdown) {
            everydropdown.addEventListener('hidden.bs.dropdown', function () {
                // after dropdown is hidden, then find all submenus
                this.querySelectorAll('.submenu').forEach(function (everysubmenu) {
                    // hide every submenu as well
                    everysubmenu.style.display = 'none';
                });
            })
        });

        document.querySelectorAll('.dropdown-menu a').forEach(function (element) {
            element.addEventListener('click', function (e) {
                let nextEl = this.nextElementSibling;
                if (nextEl && nextEl.classList.contains('submenu')) {
                    // prevent opening link if link needs to open dropdown
                    e.preventDefault();
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }

                }
            });
        })
    }
// end if innerWidth
});
// DOMContentLoaded  end
</script>
<style>
/* ============ desktop view ============ */
@media all and (min-width: 992px) {
    .dropdown-menu li {
        position: relative;
    }

    .nav-item .submenu {
        display: none;
        position: absolute;
        left: 100%;
        top: -7px;
    }

    .nav-item .submenu-left {
        right: 100%;
        left: auto;
    }

    .dropdown-menu > li:hover {
        background-color: #f1f1f1
    }

    .dropdown-menu > li:hover > .submenu {
        display: block;
    }
}

/* ============ desktop view .end// ============ */

/* ============ small devices ============ */
@media (max-width: 991px) {
    .dropdown-menu .dropdown-menu {
        margin-left: 0.7rem;
        margin-right: 0.7rem;
        margin-bottom: .5rem;
    }
}

.navbar-nav .dropdown-menu {
    position: absolute;
    max-width: 15vw;
    width: max-content;
}
.navbar-nav .dropdown-menu > li > a{
    white-space: unset;
}

/* ============ small devices .end// ============ */
</style>
