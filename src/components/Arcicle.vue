<template>

                      <!-- IMAGE ARTICLE -->
                    <article  :class="nameToColor(post.category)">
                      <router-link :to="{ name: 'Details', params: { id: post.id }}">
                        <img class="articles-preview-img" :src="image" :alt="post.title"  data-rjs="2">
                        </router-link>
                        <div class="articles-header">
                            <time datetime="2016-10-11">{{ timestepToRealTime(post.created_at) }}</time>
                            <span v-if="isNew(post.created_at)" class="articles-header-tag">New</span>
                            <span class="articles-header-category"><a href="#" title="">{{ post.category }}</a></span>
                        </div>
                        <div class="articles-content">
                        <h1><router-link :to="{ name: 'Details', params: { id: post.id }}">{{ post.title }}</router-link></h1>
                            {{ removeTags(snippet) }}
                        </div>
                        <div class="articles-footer">
                           
                            <router-link :to="{ name: 'Details', params: { id: post.id }}" class="btn">Read more</router-link>
                        </div>
                    </article>
</template>

<script>
import { computed, ref } from 'vue'
import { format } from 'timeago.js';

export default {
props: ['post'],
  setup(props) {
    const image = ref('')
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })
    
    if(props.post.image){
      image.value = props.post.image
    }else{
      image.value = "img/placeholder.png"
    }

    return { snippet, image }
  }, methods:{
    
    removeTags(str) {
      if ((str===null) || (str===''))
      return false;
      else
      str = str.toString();
      return str.replace( /(<([^>]+)>)/ig, '');
   },

      nameToColor(str){

            if(str == "Tech"){
                return "red-article"
            }else if(str == "Life"){
                return "green-article"
            }else if(str == "Coffee"){
                return "yellow-article"
            }else if(str == "Sport"){
                return "blue-article"
            }else{
                return "un-article"
            }
        },

        timestepToRealTime(stemp){
          let date = new Date(stemp)
          let day = date.getDate();
          let month = date.getMonth();
          let year = date.getFullYear();
          return day+"-"+month+"-"+year;
        },
        
        isNew(stemp){
          let date = new Date(stemp)
          const timeFutcher =Math.floor(date.getTime()/1000) + (24*60*60)

          var ndate = new Date();
          const timeNow = Math.floor(ndate.getTime()/1000)

          if(timeFutcher > timeNow){
            return true
          }
            return false
         
        }

   
  }

}
</script>

<style>

</style>