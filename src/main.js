import { createApp } from 'vue'

// ======== axios ========
import axios from 'axios'
// ======== vue-axios ========
import VueAxios from 'vue-axios'
// ======== vue3-loading-overlay ========
// 安裝此套件會有錯誤，需修改以下方式
// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
// ======== Bootstrap Icons ========
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.vue'
import router from './router'

// 千分號方法
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'

// app.component: 註冊全域組件
// app.use: 安裝插件
const app = createApp(App)

// 全域屬性:app.config.globalProperties.自定義屬性名稱，$+跟區域元件的變數不會產生衝突
// 加入'純值'效益不高，加入'方法'使用度就會比較高
// 千分號
app.config.globalProperties.$filters = {
  date,
  currency
}

// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
// 正常來說不建議太多方法掛 Global，這裡可以使用 provide 來處理
app.config.globalProperties.$httpMessageState = $httpMessageState

app.use(VueAxios, axios)
app.use(router)
// vue3-loading-overlay 使用全域註冊，因為大部分都會使用
app.component('LoadIng', Loading)
app.mount('#app')
