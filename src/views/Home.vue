<template>

    <div v-if="error">{{ error }}</div>
     <div v-if="posts.length" >
    <Main :posts="posts" />
     </div>
    <div v-else>
<ContentLoader viewBox="0 0 250 110" primaryColor="#e3e3e3" secondaryColor="#cccccc" class="p-2">
  <rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
  <rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
  <rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
  <rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
  <rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
</ContentLoader>


    </div>

</template>

<script>
import { ref } from 'vue'
import getPosts from '../composables/getPosts'
import { ContentLoader } from 'vue-content-loader'
// component imports

import Main from '../components/Main.vue'
export default {
  name: 'Home',
  components: { Main, ContentLoader },
  setup() { 
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