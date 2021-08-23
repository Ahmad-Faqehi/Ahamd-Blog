import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCategory = () => {

  const category = ref([])
  const error = ref(null)

  const load = async () => {
    try {
      const res = await projectFirestore.collection('category').onSnapshot((snap) => {
        category.value = snap.docs.map(doc => {
          return { ...doc.data(), id: doc.id}
        })
      })

      
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { category, error, load }
}

export default getCategory