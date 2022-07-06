<template>

  <AdminNav></AdminNav>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>

</template>

<script>
import emitter from '@/methods/emitter'
import ToastMessages from '@/components/ToastMessages.vue'
// 載入 NavBar.vue，到此頁面
import AdminNav from '../components/AdminNav.vue'

export default {
  // 區域註冊 AdminNav
  components: {
    AdminNav,
    ToastMessages
  },

  // 讓內層元件可以使用外層功能
  provide () {
    return {
      emitter
    }
  },

  created () {
    // https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
    // 範例: var myCookie = document.cookie.replace(/(?:(?:^|.*;\s*)test2\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    // 主控台呈現 cookie
    // console.log(token)

    // Global axios defaults : https://github.com/axios/axios#global-axios-defaults
    // 範例: axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    this.$http.defaults.headers.common.Authorization = token

    // 以下為 LogIn.vue 登入的 API範例
    // 路徑換成 檢查用戶是否仍持續登入(api/user/check)
    const api = `${process.env.VUE_APP_API}api/user/check`
    this.$http.post(api, this.user)
      .then((res) => {
        // console.log(res)
        // 登入失敗就轉到 LogIn頁面
        if (!res.data.success) {
          this.$router.push('/login')
        }
      })
  }
}
// API 起手式
// const api = `${process.env.VUE_APP_API}API路徑`
// this.$http.post(api(API路徑), 資料)
//   .then((res) => {
//     if (res.data.success) {
//       console.log(res.data)
//     }
//   })
</script>
