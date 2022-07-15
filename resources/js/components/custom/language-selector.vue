<template>
    <div>

        <span id="lang_selected" title="Tilni tanlang">{{ getLanguage(language).title }}</span>

        <div id="lang_selector" class="language-dropdown" :class="languageMenuOpen?'open':''" >
            <label class="lang-flag" :class="'lang-'+ language" @click="languageMenuOpen=!languageMenuOpen"
                   title="Tilni tanlang">
                <span class="flag"></span>
            </label>
            <ul class="lang-list">
                <li class="lang" :class="lang.code===language?'lang-'+lang.code+' selected':'lang-'+lang.code" :title="lang.title" @click="selectMenu(lang.code)" v-for="lang in languages">
                    <span class="flag"></span>
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
          language:'uz',
          languages:[
              {code:'uzk',title:'ЎЗБ'},
              {code:'uz',title:'UZB'},
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
            this.$i18n.locale=el;
            //console.log(this.$i18n.locale)
            //$(el).closest('.language-dropdown').toggleClass("open");
        }
    }
}

</script>
