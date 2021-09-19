<template>
  <!-- MAIN -->
  
<main>
    <div class="container">
        <div class="row">

            <!-- ARTICLES -->
            <div class="col-lg-8 col-xs-12">
                <section class="articles">
                    
                    <div v-for="post in posts" :key="post.id">
                        <div v-if="!post">
                            
                        </div>
                    <Arcicle :post="post" />
                    </div>
                    <!-- PAGINATION -->

                </section>
            </div>

            <!-- AUTHOR -->
            <SideBar :posts="posts" />
            
        </div>
    </div>
</main>
<!-- end MAIN -->
</template>

<script>
import SideBar from './SideBar.vue'
import Arcicle from './Arcicle.vue'

export default {
    props: ['posts'],
    components: { SideBar, Arcicle }
}
</script>

<style>

</style>