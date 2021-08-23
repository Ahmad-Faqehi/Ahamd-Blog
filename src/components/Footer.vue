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
                        <li><a href="https://twitter.com/A_F775" title="Twitter"><i class="icon-social_twitter_circle"></i></a></li>
                        <li><a href="https://github.com/Ahmad-Faqehi" title="Github"><i class="icon-social_github_circle"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/ahmad-faqehi/" title="LinkedIn"><i class="icon-social_linkedin_circle"></i></a></li>
                    </ul>
                    <p class="font-primary">&copy; All Rights Reserved.</p>
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