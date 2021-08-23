<template>
<main>
    <div class="container">
        <div class="row">

            <!-- Details informations -->
            <div class="col-xs-12">
                <section class="white-box">
              <div v-if="error" class="alert alert-danger" role="alert">
                 {{error}}
              </div>
                    <div class="get-in-touch center">
                        <h2>Singup Page</h2>
                        <form @submit.prevent="handleSubmit">
                          <br>

                            <label>First Name</label>
                            <input class="col-xs-12 form-control" type="text" placeholder="Your First Name" name="name" v-model="name">
                            <br>

                            <label>Email</label>
                            <input class="col-xs-12 form-control" type="email" placeholder="Your Email" name="email" v-model="email">
                            <br>

                            <label>Password</label>
                            <input class="col-xs-12 form-control" type="password" placeholder="Your Password" name="password" v-model="password">
                            <br>
                          
                            <button type="submit" class="btn"><i class="pe-7s-paper-plane"></i> Create Account </button>
                        </form>




                    </div>

                </section>  
            </div>

        </div>
    </div>
</main>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useSignup from '../composables/useSignup'


export default {
  setup(props, context) {
    const email = ref('')
    const password = ref('')
    const name = ref('')
    const success = ref(false)
    const router = useRouter()

    const { error, signup } = useSignup()

$("nav").removeClass("mobile-nav-open");
$("body").removeClass("noscroll");
$("#menu-animate-icon").removeClass("open");

    const handleSubmit = async () => {
     await signup(email.value, password.value, name.value)
      if (!error.value) {
        context.emit('signup')
        success.value = true
        router.push({ name: 'Home' })
      }      

    
    
      
    }
    return { password, email, name, handleSubmit, error, success }
  },
}
</script>

<style>
  /* form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
  .alert{
    color: rgb(12, 197, 58);
    background: #ddd;
    width: 50%;
    text-align: center;
    display: inline-block;
  }
  .error{
    color: red;
  } */
</style>