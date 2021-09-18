import { ref } from 'vue'
import axios from 'axios'


const getPosts = () => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const response = await axios.get(
        "http://api.iepes.site/api/posts"
      );
      // JSON responses are automatically parsed.
      posts.value = response.data;
    } catch (err) {
    error.value = err.message
    }
  }
  return { posts, error, load }
}

export default getPosts