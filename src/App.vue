<template>
<Navbar />
  <router-view/>
<Footer />
</template>

<script>

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  components: { Navbar, Footer },
  mounted(){
    console.log(process.env.VUE_APP_AHA)
  }
  
}
</script>
<style scoped>

/* #app { Loving can heard sometimes
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

</style>
