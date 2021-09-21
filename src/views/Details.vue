<template>
  <!-- <div v-if="error">{{ error }}</div> -->
   <!-- ARTICLE BLOG POST -->
   <main v-if="post">
    <section  class="articles articles-blog-post">
        <article  class="articles-blog-post">
            <div class="container">
                <div class="row">
                    <div class="col-lg-10 col-xs-12">

                        <!-- TEXT ARTICLE -->
                        <div class="articles-header">
                            <time datetime="">{{ timestepToRealTime(post.created_at) }}</time>
                            <span v-if="isNew(post.created_at)" class="articles-header-tag-green">New</span>

                            <span class="articles-header-category"><a href="#" :class="nameToColor(post.category)" title=""> {{ post.category }}</a></span>
                        </div>
                        <div class="articles-content">
                            <img :src="post.image" class="img-fluid" />
                            <h1 class="articles-content-blog-post-title">
                             {{ post.title }}
                              </h1>
                              <p v-html="post.body"></p>
                               
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

    </section>
   </main>
     <div v-else>
    <Spinner />
  </div>
    <!-- end ARTICLE BLOG POST -->
</template>

<script>
import getPost from '@/composables/getPost'
import { useRouter, useRoute } from 'vue-router'
import Spinner from '../components/Spinner.vue'
import { projectFirestore } from '../firebase/config'
import { format } from 'timeago.js';



export default {
  props: ['id'],
  components: { Spinner },
  setup(props) {

$("nav").removeClass("mobile-nav-open");
$("body").removeClass("noscroll");
$("#menu-animate-icon").removeClass("open");

    const router = useRouter()
    const route = useRoute()
    
    const { error, post, load } = getPost(route.params.id)
    load()

    const handleclik = async () => {
      await projectFirestore.collection('posts').doc(props.id).delete()
       router.push({ name: 'Home' })
    }
    return { error, post, handleclik }
  }, methods:{

      nameToColor(str){

            if(str == "Tech"){
                return "red"
            }else if(str == "Life"){
                return "green"
            }else if(str == "Coffee"){
                return "yellow"
            }else if(str == "Sport"){
                return "blue"
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

        }, isNew(stemp){
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

<style scoped>

  p{
    text-align: justify;
  }
</style>