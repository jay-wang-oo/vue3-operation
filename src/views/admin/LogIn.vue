<template>
  <Loading :active="isLoading"></Loading>

  <div class="container mt-5">
    <form class="row justify-content-center"
      @submit.prevent="signIn"
      >
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            required
            autofocus
            v-model="user.username"
          />
        </div>
        <div class="mb-2">
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>

        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      // console.log('login')
      const api = `${process.env.VUE_APP_API}admin/signin`
      console.log(api)
      // 前面(api):API路徑, 後方(this.user):夾帶資料
      this.$http.post(api, this.user)
        .then((res) => {
          // 登入狀態的判斷:登入成功就轉到 DashBoard頁面
          if (res.data.success) {
            // 以下 cookies設定
            // token:cookies資料 expired:設定到期日期
            // 範例：
            // const token = response.data.token;
            // const expired = response.data.expired;
            // console.log(token, expired);
            // document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
            const { token, expired } = res.data
            // console.log(token, expired)
            document.cookie = `hexToken=${token}; expired=${new Date(expired)}`

            // 成功轉到 DashBoard頁面
            // this.$router.push('/dashboard')

            // 登入成功，轉址到以下網址
            this.$router.push('/dashboard/products')
          }
        })
    }
    // signIn () {
    //   const api = `${process.env.VUE_APP_API}admin/signin`
    //   this.$http.post(api, this.user)
    //     .then((res) => {
    //       const { token, expired } = res.data
    //       // console.log(token, expired);
    //       document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
    //       console.log(res)
    //     })
    // }
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
