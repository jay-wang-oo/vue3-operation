<template>
  <NavBar></NavBar>

  <div class="big_img">
    <img src="@/assets/images/BackImg4.jpg" alt="">
  </div>

  <div class="vacation">
    <h2 class="title_font">遊 輪 行 程<span>Cruise Vacation</span></h2>
    <ul>
      <li>
        <a href="">
          <img src="@/assets/images/cruise_3.jpg" alt="">
          <h4>五星夢幻遊輪 ~《維納斯號》</h4>
          <h3>法國/西班牙假期 6天5夜</h3>
          <h5>出團日期：08/5</h5>
          <div class="note">
            <ul>
              <li>客艙數量：1,830間</li>
              <li>載客數量：3,660人</li>
              <li>船員人數：1,346人</li>
            </ul>
            <ul>
              <li>2019 最佳票選遊輪</li>
              <li>2020 世界遊輪大獎</li>
            </ul>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src="@/assets/images/cruise_2.jpg" alt="">
          <h4>五星夢幻遊輪 ~《墨丘利號》</h4>
          <h3>希臘群島/義大利假期 8天7夜</h3>
          <h5>出團日期：08/15, 08/25</h5>
          <div class="note">
            <ul>
              <li>客艙數量：1,830間</li>
              <li>載客數量：3,560人</li>
              <li>船員人數：1,346人</li>
            </ul>
            <ul>
              <li>2017 最佳票選遊輪</li>
              <li>2017 世界遊輪大獎</li>
            </ul>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src="@/assets/images/cruise_1.jpg" alt="">
          <h4>五星夢幻遊輪 ~《密涅瓦號》</h4>
          <h3>挪威/丹麥假期 8天7夜</h3>
          <h5>出團日期：08/10, 08/30</h5>
          <div class="note">
            <ul>
              <li>客艙數量：1,730間</li>
              <li>載客數量：3,460人</li>
              <li>船員人數：1,346人</li>
            </ul>
            <ul>
              <li>2016 最佳票選遊輪</li>
              <li>2018 世界遊輪大獎</li>
            </ul>
          </div>
        </a>
      </li>
    </ul>
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
