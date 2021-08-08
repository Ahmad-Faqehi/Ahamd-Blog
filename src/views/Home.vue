<template>

    <div v-if="error">{{ error }}</div>
     <div v-if="posts.length" >
    <Main :posts="posts" />
     </div>
    <div v-else>
        <div class="container">

<div class="ph-item">
    <div class="ph-col-12">
        <div class="ph-picture"></div>
        <div class="ph-row">
            <div class="ph-col-6 big"></div>
            <div class="ph-col-4 empty big"></div>
            <div class="ph-col-2 big"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
        </div>
    </div>
</div>
<div class="ph-item">
    <div class="ph-col-12">
        <div class="ph-picture"></div>
        <div class="ph-row">
            <div class="ph-col-6 big"></div>
            <div class="ph-col-4 empty big"></div>
            <div class="ph-col-2 big"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
        </div>
    </div>
</div>
<div class="ph-item">
    <div class="ph-col-12">
        <div class="ph-picture"></div>
        <div class="ph-row">
            <div class="ph-col-6 big"></div>
            <div class="ph-col-4 empty big"></div>
            <div class="ph-col-2 big"></div>
            <div class="ph-col-4"></div>
            <div class="ph-col-8 empty"></div>
            <div class="ph-col-6"></div>
            <div class="ph-col-6 empty"></div>
            <div class="ph-col-12"></div>
        </div>
    </div>
</div>

        </div>
        </div>


</template>

<script>
import { ref } from 'vue'
import getPosts from '../composables/getPosts'
// component imports
import Main from '../components/Main.vue'
export default {
  name: 'Home',
  components: { Main },
  setup() { 
$("nav").removeClass("mobile-nav-open");
$("body").removeClass("noscroll");
$("#menu-animate-icon").removeClass("open");
    const { posts, error, load } = getPosts()
    load()
    
    return { posts, error }
  },
}
</script>

<style>
  /* .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  } */
</style>