<template>

                      <!-- IMAGE ARTICLE -->
                    <article  class="green-article">
                      <router-link :to="{ name: 'Details', params: { id: post.id }}">
                        <img class="articles-preview-img" src="img/article-image.jpg" alt="{{ post.title }}"  data-rjs="2">
                        </router-link>
                        <div class="articles-header">
                            <time datetime="2016-10-11">12 hours ago</time>
                            <span class="articles-header-tag">New</span>
                            <span class="articles-header-category"><a href="#" title="">TEST</a></span>
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
import { computed } from 'vue'

export default {
props: ['post'],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 100) + '...'
    })
    
    return { snippet }
  }, methods:{
    
    removeTags(str) {
      if ((str===null) || (str===''))
      return false;
      else
      str = str.toString();
      return str.replace( /(<([^>]+)>)/ig, '');
   }
  }

}
</script>

<style>

</style>