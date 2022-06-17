import { createApp } from 'vue'

// ======== axios ========
import axios from 'axios'
// ======== vue-axios ========
import VueAxios from 'vue-axios'
// ======== vue3-loading-overlay ========
// 安裝此套件會有錯誤，需修改以下方式
// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
// import Loading from 'vue3-loading-overlay'
// import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

import App from './App.vue'
import router from './router'

// app.component: 註冊全域組件
// app.use: 安裝插件
const app = createApp(App)
app.use(VueAxios, axios)
app.use(router)
// vue3-loading-overlay 使用全域註冊，因為大部分都會使用
// eslint-disable-next-line vue/multi-word-component-names
// app.component('Loading', Loading)
app.mount('#app')
