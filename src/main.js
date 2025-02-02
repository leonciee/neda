import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app= createApp(App)
app.use(router)
app.mount('#app')
