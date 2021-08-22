<template>
<!-- HEADER -->
<header class="navbar-fixed-top">
    <div class="container">
        <div class="row">

            <!-- HEADER TOP -->
            <div class="col-lg-12">
                <div class="header-top">
                    <div class="header-top-logo">
                        <router-link :to="{ name: 'Home'}">
                            <img src="https://i.imgur.com/YXOciuo.png" alt="Dblog Logo" data-rjs="2">
                        </router-link>
                    </div>
                    <div class="header-top-text">
                       <router-link :to="{ name: 'Home'}"> <p>Ahmad Blog</p> </router-link>
                    </div>
                    <nav class="header-top-nav">
                        <ul>
                            <li class="header-top-nav-search">
                                <a href="#" class="light-link" title="Search"><i class="pe-7s-search"></i></a>
                                <form action="#" method="get">
                                    <input type="text" class="form-control" placeholder="Search...">
                                    <button type="submit"><i class="pe-7s-search"></i></button>
                                </form>
                            </li>
                            <li><a href="#" class="light-link" title="Menu">
                                <div id="menu-animate-icon" class="header-top-nav-menu-icon">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <!-- end HEADER TOP -->

            <!-- HEADER NAVIGATION -->
            <div class="col-lg-12">
                <nav class="header-nav">
                    <ul>
                            <router-link :to="{ name: 'Home'}">Home</router-link>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" title="Blog articles">Blog articles</a>
                            <ul class="dropdown-menu">
                                <li class="nav-elipse-blue"><a href="blog_list.html" title="Blog CSS articles">CSS</a>
                                </li>
                                <li class="nav-elipse-red"><a href="blog_list.html" title="Blog HTML articles">HTML</a>
                                </li>
                                <li class="nav-elipse-yellow"><a href="blog_list.html" title="Blog Javascript articles">Javascript</a>
                                </li>
                                <li class="nav-elipse-green"><a href="blog_list.html" title="Blog raphic articles">Graphic</a>
                                </li>
                                <li><a href="blog_post.html" title="Blog Post">Blog Post</a></li>
                            </ul>
                        </li>
                        <li><a href="about_me.html" title="About me">About me</a></li>
                        <li><a href="portfolio.html" title="My projects">My projects</a></li>
                        <li><router-link :to="{ name: 'Create'}">Create</router-link></li>
                    </ul>
                </nav>
            </div>
        </div>
        <!-- end HEADER NAVIGATION -->

    </div>
</header>

<nav class="mobile-nav header-nav">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <!-- Auto Copy Header Navigation -->
                                    <ul>
                        <li class="active">
                            <!-- <a href="index.html" title="Start page">Start page</a> -->
                            <router-link :to="{ name: 'Home'}">Home</router-link>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" title="Blog articles">Blog articles</a>
                            <ul class="dropdown-menu">
                                <li class="nav-elipse-blue"><a href="blog_list.html" title="Blog CSS articles">CSS</a>
                                </li>
                                <li class="nav-elipse-red"><a href="blog_list.html" title="Blog HTML articles">HTML</a>
                                </li>
                                <li class="nav-elipse-yellow"><a href="blog_list.html" title="Blog Javascript articles">Javascript</a>
                                </li>
                                <li class="nav-elipse-green"><a href="blog_list.html" title="Blog raphic articles">Graphic</a>
                                </li>
                                <li><a href="blog_post.html" title="Blog Post">Blog Post</a></li>
                            </ul>
                        </li>
                        <li><a href="about_me.html" title="About me">About me</a></li>
                        <li><a href="portfolio.html" title="My projects">My projects</a></li>
                        <li><router-link :to="{ name: 'Create'}">Create</router-link></li>
                    </ul>
            </div>
        </div>
    </div>
</nav>

</template>

<script>
export default {
}
</script>

<style >


</style>