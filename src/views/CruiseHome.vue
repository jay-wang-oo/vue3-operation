<template>
  <NavBar></NavBar>

  <div class="big_img">
    <h2>與真實事物的相遇和興奮<br>我想成為一個傳達的人</h2>
    <img src="@/assets/images/BackImg1.jpg" alt="">
  </div>

  <div class="BrandMission_img">
    <div class="imgBox">
      <img src="@/assets/images/index_1.jpg" alt="">
      <img src="@/assets/images/index_2.jpg" alt="">
      <img src="@/assets/images/index_3.jpg" alt="">
    </div>
    <div class="textBox">
      <h2 class="title_font">品 牌 使 命<span>Brand Mission</span></h2>
      <p>「創造郵輪文化的未來」<br>是因為，<br>我們繼續挑戰。</p>
    </div>
    <div class="imgBox">
      <img src="@/assets/images/index_4.jpg" alt="">
      <img src="@/assets/images/index_5.jpg" alt="">
      <img src="@/assets/images/index_6.jpg" alt="">
    </div>
  </div>

  <div class="FeaturedRecommended">
    <h2 class="title_font">推 薦 精 選<span>Featured Recommended</span></h2>
    <ul>
      <li>
        <a href="">
          <img src="@/assets/images/cruise_3.jpg" alt="">
          <p>五星夢幻遊輪 ~《維納斯號》</p>
          <h3>法國/西班牙假期6天5夜</h3>
          <p class="small">出團日期:08/05</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="@/assets/images/cruise_2.jpg" alt="">
          <p>五星夢幻遊輪 ~《墨丘利號》</p>
          <h3>挪威/丹麥假期8天7夜</h3>
          <p class="small">出團日期：08/15, 08/25</p>
        </a>
      </li>
      <li>
        <a href="">
          <img src="@/assets/images/cruise_1.jpg" alt="">
          <p>五星夢幻遊輪 ~《密涅瓦號》</p>
          <h3>希臘群島/義大利假期8天7夜</h3>
          <p class="small">出團日期：08/10, 08/30</p>
        </a>
      </li>
    </ul>
  </div>

  <div class="Box_Code">
    <div class="form">
      <input type="text" class="form-control" placeholder="訂閱我們獲得本月優惠碼">
      <button type="button" class="btn" >訂閱</button>
    </div>
  </div>

  <Footer></Footer>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/FooterWeb.vue'

export default {
  components: {
    NavBar,
    Footer
  },
  created () {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH)
  }
}
</script>
