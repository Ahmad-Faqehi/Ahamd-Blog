<template>
  <div class="create">
      <h3>Login</h3>
      <div v-if="success" class="alert">
        Login done successed
      </div>
    <form @submit.prevent="handleSubmit">
    
      <label>Email:</label>
      <input v-model="email" type="email" required>
      <label>Password:</label>
      <input v-model="password" type="text" required>
      <div class="error">{{ error }}</div>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useLogin from '../composables/useLogin'
import { projectAuth } from '../firebase/config';


projectAuth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log("1")
  } else {
     console.log("0")
  }
});

export default {
  setup(props, context) {
    const email = ref('')
    const password = ref('')
    const name = ref('')
    const success = ref(false)
    const router = useRouter()

    const { error, login  } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)
      if (!error.value) {
        context.emit('login')
        success.value = true
      }
    }

    return { password, email, handleSubmit, error, success }
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