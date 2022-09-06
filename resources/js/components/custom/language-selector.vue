<template>
    <div>

        <span id="lang_selected"  class="d-none" title="Tilni tanlang">{{ getLanguage(language).title }}</span>

        <div id="lang_selector" class="language-dropdown" :class="languageMenuOpen?'open':''" >
            <label class="lang-flag d-flex align-items-center fw-normal m-0"  @click="languageMenuOpen=!languageMenuOpen"
                   title="Tilni tanlang">
                <span class="flag1111">{{ getLanguage(language).title }}</span>
            </label>
            <ul class="lang-list">
                <li class="lang" :class="lang.code===language?'lang-'+lang.code+' selected':'lang-'+lang.code" :title="lang.title" @click="selectMenu(lang.code)" v-for="lang in languages">
                    <span class="flag111">{{ lang.title }}</span>
                </li>
            </ul>

        </div>


    </div>
</template>
<script>
export default {
    name: "Language-dropdown",
    props:{
        items: {
            type: [Object,Array],
            default: null,
        },

    },
    data(){
      return{
          languageMenuOpen:false,
          language:localStorage.getItem('language') || 'uz',
          languages:[
              {code:'uz',title:'ЎЗБ'},
              {code:'oz',title:'UZB'},
              {code:'ru',title:'РУС'},
              {code:'en',title:'ENG'},
          ],
      }
    },
    mounted(){
       if(typeof this.value!=='undefined' && this.value!==null) this.language=this.value;
    },

    methods:{
        getLanguage(code){
            let language = this.languages.filter((obj)=>{
               if(obj.code===code) return obj;
            });
            if(typeof language[0] !='undefined')
                return language[0];

        },
        selectMenu(el=null){
            this.language=el;
            this.languageMenuOpen=false
            //this.$i18n.locale=el;
            localStorage.setItem('language',el)
            if(typeof this.$route.params.locale !=='undefined')
            {
                let path=(this.$route.fullPath).replace(this.$route.params.locale,el);
                //if(path.includes("/",path.length))
                  ///  path=path.substring(0,path.length-1)
                window.location.href=path;
                /*this.$router.push({
                    path,
                    query:this.$route.query,
                    redirect:true
                });*/
            }
            else {
                window.location.href=this.$route.fullPath;
/*                this.$router.push({
                    path: this.$route.path,
                    query: this.$route.query,
                    redirect: true
                });*/
            }

            console.log(this.$route)
            //console.log(this.$i18n.locale)
            //$(el).closest('.language-dropdown').toggleClass("open");
        }
    }
}

</script>
<style>
.language-dropdown label {
    border: 1px solid var(--mycolor);
    justify-content: center;
}
.language-dropdown ul.lang-list li{
    padding: 4px 6px;
}
</style>
