import { ref } from 'vue'
import axios from 'axios'
import Post from '../apis/Post'

const getPosts = () => {
  const posts = ref([])
  const error = ref(null)
  console.log()
  const load = async () => {
    try {
      const response = await Post.all();
      // JSON responses are automatically parsed.
      posts.value = response.data;
    } catch (err) {
    error.value = err.message
    }
  }
  return { posts, error, load }
}

export default getPosts