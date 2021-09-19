<template>
  <main>
    <div class="container">
        <div class="row">
          
            <!-- ARTICLES -->
            <div class="col-lg-8 col-xs-12">
                <section class="articles">
                        
                    <div v-for="post in posts" :key="post.id">
                      <Arcicle :post="post" />
                    </div>

                      <div v-if="!posts.length">
                         <Spinner />
                      </div>

                    <!-- PAGINATION -->
                </section>
            </div>

            <!-- AUTHOR -->
            <SideBar   />
            
        </div>
    </div>
</main>
</template>

<script>
import SideBar from '../components/SideBar.vue'
import Arcicle from '../components/Arcicle.vue'
import Spinner from '../components/Spinner.vue'
import getPostsByTag from '../composables/getPostsByTag'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
export default {
  components: { Spinner, SideBar, Arcicle },
  setup() {
    const route = useRoute()
    const { posts, error, load } = getPostsByTag(route.params.tag)
    let postsWithTag = ''
    load()
    
    return { error, posts, postsWithTag }
  }
}
</script>

<style>
  /* .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  } */
</style>