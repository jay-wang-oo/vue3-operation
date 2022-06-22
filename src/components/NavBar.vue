<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">

      <a class="navbar-brand" href="#">範例作品</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarText">
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link">產品</router-link>
          <router-link to="/dashboard/order" class="nav-link">訂單</router-link>
          <router-link to="/dashboard/coupons" class="nav-link">優惠卷</router-link>
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      // 以下為 LogIn.vue 登入的 API範例
      // 路徑換成 登出(api/user/check)
      const api = `${process.env.VUE_APP_API}logout`
      this.$http.post(api, this.user)
        .then((res) => {
          if (res.data.success) {
            // console.log(res)
            this.$router.push('/login')
          }
        })
    }
  }
}
// API 起手式
// const api = `${process.env.VUE_APP_API}API路徑`
// this.$http.post(api(API路徑), 資料)
//   .then((res) => {
//     if (res.data.success) {
//     }
//   })

</script>
