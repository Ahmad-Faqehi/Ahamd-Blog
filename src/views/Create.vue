<template>
<main>
    <div class="container">
        <div class="row">

            <!-- Details informations -->
            <div class="col-xs-12">
                <section class="white-box">
                    <div class="get-in-touch center">
                        <h2>Create Post</h2>
                        <form @submit.prevent="handleSubmit">
                            <label >Title</label>
                            <input class="col-xs-12 form-control" type="text" placeholder="Title of post..." name="name" v-model="title" required>
                            <br>
                          <label >Body</label>
                        <editor v-model="body" api-key="4ivcuypa0mzrpzqdnce9fe9g7c69n5sgkimi5hf3lk1qyjku" :init="{
                                height: 500,
                                menubar: false,
                                plugins: ['advlist autolink lists link image charmap print preview anchor','searchreplace visualblocks code fullscreen','insertdatetime media table paste code help wordcount'],
                                toolbar:'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
                                }"/>
                           <br>
                           <label >category </label>
                            <select class="col-xs-12 form-control"  v-model="cat" required>
                              <option v-for="cat in category" :key="cat.id" :value="cat.name" >{{cat.name}}</option>
                            </select>                            
                            <br>
                            <label >Image</label>
                            <input class="col-xs-12 form-control" type="file" accept="image/*" @change="uploadImage" id="file-input" >
                            <br>
                            <div class="center">
                            <button type="submit" id="btnsub" class="btn"> Create Post </button>
                            </div>
                            <div v-if="showSpiner" >
                               <Spinner />
                            </div>

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
import { projectFirestore, timestamp } from '../firebase/config'
import Editor from '@tinymce/tinymce-vue'
import getCategory from '../composables/getCategory'
import Spinner from '../components/Spinner.vue'

export default {
   components: {
     'editor': Editor,
     Spinner
   },
  setup() {
    const title = ref('')
    const body = ref('')
    const cat = ref('')
    const image = ref('')
    const base64img = ref('')
    const router = useRouter()
    const showSpiner = ref(false)

$("nav").removeClass("mobile-nav-open");
$("body").removeClass("noscroll");
$("#menu-animate-icon").removeClass("open");

const { category, error, load } = getCategory()
load()


    const handleSubmit = async () => {
      showSpiner.value = true
      $('#btnsub').prop('disabled', true);

      const post = {
        title: title.value,
        body: body.value,
        category: cat.value,
        image: image.value,
        createAt: timestamp()
      }
  
     const res = await projectFirestore.collection('posts').add(post)
      router.push({ name: 'Home' })

    }
      const uploadImage = async (e) => {
        const ximage = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(ximage);
        reader.onload = e => {
        image.value = e.target.result
        console.log(image.value)
        }


      }
    return { body, title, cat, handleSubmit, uploadImage, category, showSpiner }
  },
}
</script>

<style scoped>
select{
  padding: inherit;
}
#btnsub{
      color: #fff;
    background-color: #5bc0de;
    border-color: #5bc0de;
}
.center{
  text-align: center;
}
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
  } */
</style>