import { ref } from 'vue'
import axios from 'axios'

const getCategory = () => {

  const category = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const response = await axios.get(
        "http://api.iepes.site/api/categories"
      );
      // JSON responses are automatically parsed.
      category.value = response.data;
    } catch (err) {
    error.value = err.message
    }
  }

  return { category, error, load }
}

export default getCategory