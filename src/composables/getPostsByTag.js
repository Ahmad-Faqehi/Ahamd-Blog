import { ref } from 'vue'
import axios from 'axios'


const getPostsByTag = (cat) => {

  const posts = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const response = await axios.get(
        "http://api.iepes.site/api/category/"+cat
      );
      // JSON responses are automatically parsed.
      posts.value = response.data;
    } catch (err) {
    error.value = err.message
    }
  }
  return { posts, error, load }
}

export default getPostsByTag