<template>
  <!-- <div v-if="error">{{ error }}</div> -->
   <!-- ARTICLE BLOG POST -->
   <main>
    <section  class="articles articles-blog-post">
        <article v-if="post" class="articles-blog-post">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-xs-12">

                        <!-- TEXT ARTICLE -->
                        <div class="articles-header">
                            <time datetime="2016-10-11">12 hours ago</time>
                            <span class="articles-header-tag-green">New</span>
                            <span class="articles-header-category"><a href="#" class="green" title="">Graphic</a></span>
                        </div>
                        <div class="articles-content">
                            <h1 class="articles-content-blog-post-title">
                             {{ post.title }}
                              </h1>
                             <p>
                               {{post.body}}
                               </p> 
                        </div>
                    </div>


                    <!-- SHARE THIS BLOCK -->
                    <div class="col-lg-2 col-xs-12">
                        <div class="articles-blog-post-share">
                            <h3>Share this</h3>
                            <div>
                                <ul>
                                    <li><a href="#" title="Facebook"><i class="fa fa-facebook"></i>Facebook</a></li>
                                    <li><a href="#" title="Twitter"><i class="fa fa-twitter"></i>Twitter</a></li>
                                    <li><a href="#" title="Google+"><i class="fa fa-google-plus"></i>Google+</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </article>
  <div v-else>
    <Spinner />
  </div>
    </section>
   </main>
    <!-- end ARTICLE BLOG POST -->
</template>

<script>
import getPost from '@/composables/getPost'
import { useRouter, useRoute } from 'vue-router'
import Spinner from '../components/Spinner.vue'
import { projectFirestore } from '../firebase/config'


export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {

    const router = useRouter()
    const route = useRoute()
    
    const { error, post, load } = getPost(route.params.id)
    load()

    const handleclik = async () => {
      await projectFirestore.collection('posts').doc(props.id).delete()
       router.push({ name: 'Home' })
    }
    return { error, post, handleclik }
  },
}
</script>

<style scoped>

  p{
    text-align: justify;
  }
</style>