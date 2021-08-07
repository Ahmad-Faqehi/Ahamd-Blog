<template>
  <!-- FOOTER -->
<footer>
    <!--  -->

    <!-- COPYRIGHT -->
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <div class="copyright">
                    <ul>
                        <li><a href="" title="Twitter"><i class="icon-social_twitter_circle"></i></a></li>
                        <li><a href="" title="Github"><i class="icon-social_github_circle"></i></a></li>
                        <li><a href="" title="LinkedIn"><i class="icon-social_linkedin_circle"></i></a></li>
                    </ul>
                    <p class="font-primary">&copy; Theme by <a href="#" title="" class="black">Komon.ski</a> . All
                        Rights Reserved.</p>
                </div>
            </div>
        </div>
    </div>
    <!-- end COPYRIHT -->
</footer>



<!-- end FOOTER -->
</template>

<script>
export default {
data(){
    return {
            fullUrl : window.location.origin + this.$route.path

    }
}
}
</script>

<style>

</style>