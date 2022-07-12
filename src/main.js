import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

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
// ======== Bootstrap ========
import 'bootstrap' // Bootstrap JS
import 'bootstrap-icons/font/bootstrap-icons.css'
// ======== VeeValidate 表單驗證 ========
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import AllRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// ============ svg-sprite-loader ============
// import SvgIcon from '@/components/common/SvgIcon'

// ============ 千分號方法 ============
import { currency, date } from './methods/filters'
import $httpMessageState from './methods/pushMessageState'

// ============ fontawesome ============
// fas：Solid  far：Regular  fal：Light  fab：Brands
/* import the fontawesome core 導入 fontawesome 核心 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
/* import font awesome icon component 導入字體真棒圖標組件 */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* add icons to the library 將圖標添加到庫 */
library.add(fas, fab)

// app.component: 註冊全域組件
// app.use: 安裝插件
const app = createApp(App)

// ============ svg-sprite-loader ============
// const requireAll = requireContext => requireContext.keys().map(requireContext)
// const req = require.context('@/src/assets/images/icon', true, /\.svg$/)
// requireAll(req)

// 全域屬性:app.config.globalProperties.自定義屬性名稱，$+跟區域元件的變數不會產生衝突
// 加入'純值'效益不高，加入'方法'使用度就會比較高
// ============ 千分號 ============
app.config.globalProperties.$filters = {
  date,
  currency
}

// ============ httpMessageState ============
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
// 正常來說不建議太多方法掛 Global，這裡可以使用 provide 來處理
app.config.globalProperties.$httpMessageState = $httpMessageState

// ============ VeeValidate ============
// 加入 VeeValidate 全部規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule])
})
// VeeValidate i18n 多國語系套件
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 當輸入任何內容直接進行驗證
})
// 設定預設語系
setLocale('zh_TW')

app.use(VueAxios, axios)
app.use(router)

// ============ vue3-loading-overlay 使用全域註冊，因為大部分都會使用
app.component('LoadIng', Loading)

// ============ VeeValidate 註冊元件
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

// ============ fontawesome 註冊元件
app.component('font-awesome-icon', FontAwesomeIcon)

// ============ svg-sprite-loader
// eslint-disable-next-line vue/multi-word-component-names
// app.component('icon', SvgIcon)

app.mount('#app')
