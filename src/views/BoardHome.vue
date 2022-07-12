<template>
  <NavBar></NavBar>

  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/images/carousel-2.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-3">跳躍飛魚</h2>
          <h5>耀眼的大海，閃亮最新新星</h5>
          <a href="">立即了解</a>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/carousel-3.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-3">衝刺鯊魚</h2>
          <h5>浪花的飛跳，進入未知領域</h5>
          <a href="">我想購買</a>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/images/carousel-1.jpg" class="d-block w-100" alt="...">
        <div class="carousel-caption d-none d-md-block">
          <h2 class="display-3">衝浪客的店鋪</h2>
          <h5>融合各自獨有生產工藝和板材技術生產衝浪板。</h5>
          <a href="">了解衝浪板</a>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- <div class="big_img">
    <h2>與真實事物的相遇和興奮<br>我想成為一個傳達的人</h2>
    <img src="@/assets/images/carousel-1.jpg" alt="">
  </div> -->

  <!-- <div class="BrandMission_img">
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
  </div> -->

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
