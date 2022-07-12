<template>
  <NavBar></NavBar>

  <div class="big_img">
    <img src="@/assets/images/about_backImg.jpg" alt="">
  </div>

  <div class="title_box">
    <h2 class="title_font">衝浪客的浪漫<span>About Surfer Man</span></h2>
  </div>

  <div class="introduction">
    <div class="about_box">
        <div class="about_text">
          <p>衝浪客 <span class="no-lp">Surfer Man</span>是一家台灣本土衝浪板品牌，位於台東。由 <span class="no-lp">JW</span>創建，他被認為是世界最好的衝浪板造型師之一，畢生致力於打造高性能衝浪板。作為行業領導者，他不斷為衝浪板品質和性能設定新的標準。</p>
        </div>
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
  }
}
</script>
