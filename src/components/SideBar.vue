<template>
              <div class="aside-blocks col-lg-4 col-xs-12">
                <aside class="categories">
                    <h2 class="aside-title">Categories </h2>
                    <ul>
                        <li v-for="cat in category" :key="cat.id" :class="nameToColor(cat.name)">
                            <a :href="'/tags/'+cat.name"  :title="cat.name">{{cat.name}}</a>
                        </li>
                    </ul>
                </aside>
                
            </div>
</template>

<script>
import getCategory from '../composables/getCategory'


export default {
    props: ['posts'],
    setup(){
        const { category, error, load } = getCategory()
        load()
        return { category, error }
    },methods:{

        nameToColor(str){

            if(str == "Tech"){
                return "nav-elipse-red"
            }else if(str == "Life"){
                return "nav-elipse-green"
            }else if(str == "Coffee"){
                return "nav-elipse-yellow"
            }else if(str == "Sport"){
                return "nav-elipse-blue"
            }else{
                return "nav-elipse-un"
            }
        }
    }
    
}
</script>

<style>

</style>