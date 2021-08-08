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
                          
                            <!-- <h1><a href="blog_post.html" title="">{{ post.title }}</a></h1> -->
                            <h1><router-link :to="{ name: 'Details', params: { id: post.id }}">{{ post.title }}</router-link></h1>
                            {{ snippet }}
                        </div>
                        <div class="articles-footer">
                            <ul>
                                <li><a href="#" title=""><i class="pe-7s-comment"></i> 7 Response</a></li>
                                <li><a href="#" title=""><i class="pe-7s-like"></i> 1221</a></li>
                            </ul>
                            <a title="" class="btn" href="">Read more</a>

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
  }

}
</script>

<style>

</style>