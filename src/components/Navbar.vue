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
                        <li>
                            <router-link :to="{ name: 'Home'}">Home</router-link>
                        </li>
                        <li v-if="!isLogin">
                            <router-link :to="{ name: 'Singup'}">Singup</router-link>
                        </li>
                        <li v-if="!isLogin">
                            <router-link :to="{ name: 'Login'}">Login</router-link>
                        </li>
                        <li v-if="isLogin" ><router-link :to="{ name: 'Create'}">Create Post</router-link></li>
                         <li v-if="isLogin" ><a href="#" @click="logout">Logout</a></li>

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
                        <li>
                            <router-link :to="{ name: 'Home'}">Home</router-link>
                        </li>
                        <li v-if="!isLogin">
                            <router-link :to="{ name: 'Singup'}">Singup</router-link>
                        </li>
                        <li v-if="!isLogin">
                            <router-link :to="{ name: 'Login'}">Login</router-link>
                        </li>
                        <li v-if="isLogin" ><router-link :to="{ name: 'Create'}">Create Post</router-link></li>
                        <li v-if="isLogin" ><a href="#" @click="logout">Logout</a></li>                    
                        </ul>
            </div>
        </div>
    </div>
</nav>

</template>

<script>
import { ref } from '@vue/reactivity';
import useLogin from '../composables/useLogin'
import { projectAuth } from '../firebase/config';

export default {
    setup(props, context) {

       const isLogin = ref(false);
 projectAuth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
     isLogin.value = true
  } else {
      isLogin.value = false
  }

});
return {isLogin}
    },methods:{

        logout(){

            projectAuth.signOut().then(function() {
            // Sign-out successful.
            }, function(error) {
            console.log(error)
            });

        }
    }
}
</script>

<style >


</style>