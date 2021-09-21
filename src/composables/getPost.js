import { ref } from 'vue'
import axios from 'axios'
import Post from '../apis/Post'
const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const response = await Post.post(id) ;
      // JSON responses are automatically parsed.
      post.value = response.data;
    } catch (err) {
    error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getPost