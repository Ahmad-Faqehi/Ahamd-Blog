import { ref } from 'vue'
import axios from 'axios'

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const response = await axios.get(
        "http://api.iepes.site/api/post/"+id
      );
      // JSON responses are automatically parsed.
      post.value = response.data;
    } catch (err) {
    error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getPost