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
                    <nav aria-label="...">
                        <a title="" href="" class="btn-small-white pagination-back">Back</a>
                        <ul class="pagination">
                            <li class="page-item active">
                                <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item page-item-more"><a class="page-link" href="#">...</a></li>
                            <li class="page-item"><a class="page-link" href="#">25</a></li>
                        </ul>
                        <a title="" href="blog_post.html" class="btn-small-white pagination-next">Next</a>
                    </nav>

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