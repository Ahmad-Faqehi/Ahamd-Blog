import { ref } from 'vue'
import axios from 'axios'
import Post from '../apis/Post'

const getPostsByTag = (cat) => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const response = await Post.postTag(cat);
      // JSON responses are automatically parsed.
      posts.value = response.data;
    } catch (err) {
    error.value = err.message
    }
  }
  return { posts, error, load }
}

export default getPostsByTag