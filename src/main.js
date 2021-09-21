import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../public/css/bootstrap.css'
import '../public/css/Pe-icon-7-stroke.css'
import '../public/css/font-awesome.min.css'
import '../public/css/social-icons.css'
import '../public/css/owl.carousel.css'
import '../public/css/owl.theme.css'
import '../public/css/main.css'
import '../public/css/placeholder-loading.min.css'




let app = createApp(App)

// 2. Assign the global variable before mounting
app.config.globalProperties.api_url = 'http://api.iepes.site/'

// 3. Use router and mount app
app.use(router).mount('#app')

