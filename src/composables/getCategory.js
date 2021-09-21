import { ref } from 'vue'
import axios from 'axios'
import Post from '../apis/Post'
const getCategory = () => {

  const category = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const response = await Post.category();

      category.value = response.data;
    } catch (err) {
    error.value = err.message
    }
  }
  return { category, error, load }

}

export default getCategory