<template>
  <NavBar></NavBar>

  <div class="big_img">
    <img src="@/assets/images/BackImg3.jpg" alt="">
  </div>

  <div class="starfleet">
    <h2 class="title_font">六 星 艦 隊<span>Star Fleet</span></h2>
    <h2 class="fleet_title">五星夢幻遊輪 ~《維納斯號》</h2>
    <img src="@/assets/images/fleet_img.jpg" alt="">

    <ul class="fleetItem">
      <li>
        <font-awesome-icon icon="fa-solid fa-crown" />
        2019 最佳票選遊輪<br/>
        2020 世界遊輪大獎
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-ship" />
        客艙數量：1,830間<br/>
        載客數量：3,660人<br/>
        船員人數：1,346人
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-ruler-combined" />
        船身長度：324.9公尺<br/>
        船身寬度：65.1公尺<br/>
        甲板樓層：19層
      </li>
      <li>
        <font-awesome-icon icon="fa-solid fa-anchor" />
        遊輪噸位：141,000噸<br/>
        遊輪船速：24節<br/>
        首航日期：2018
      </li>
    </ul>

    <div class="fleet_tabs">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
            艙房介紹<br>Cruise Room
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
            餐廳介紹<br>Restaurants
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
            設施介紹<br>Facility
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <h3>艙房介紹<span class="small">Cruise Room</span></h3>
          <ul class="fleetRoom">
            <li>
              <img src="@/assets/images/room-1.jpg" alt="">
              <h4>豪華陽台艙</h4>
              <h5>Deluxe Room</h5>
              <p>豪華陽台艙為您帶來比標準陽台艙更為舒適美妙的享受：面積達 233 平方英呎（6.6坪）的寬敞艙房，並特別配有 41 平方英呎（1.2坪）的豪華私人陽台。艙房內外兼修，裝修精美，內部設施一應俱全，還特別設有一張柔軟的沙發床－不僅令您的休憩住宿擁有更多舒心選擇，還可充分滿足三人同行的入住需求。</p>
            </li>
            <li>
              <img src="@/assets/images/room-2.jpg" alt="">
              <h4>迷你套房艙</h4>
              <h5>Double Room</h5>
              <p>豪華的迷你套房艙面積可達 323 平方英呎（9 坪），不僅寬敞舒適，更精心設有帶柔軟沙發床的獨立起居空間——不僅令您的休憩住宿擁有更多舒心選擇，還可充分滿足三人同行的入住需求。奢華愜意的私人陽台面積達 61 平方英呎（1.7 坪）。溫馨雅緻的浴室內配有淋浴設備和浴缸。享受比陽台艙更奢華的禮遇*。</p>
            </li>
            <li>
              <img src="@/assets/images/room-3.jpg" alt="">
              <h4>標準套房艙</h4>
              <h5>Standard Room</h5>
              <p>面積達 468 至 1,314 平方英呎（13 至 37 坪）的標準套房艙豪華舒適，裝修精美奢華，內部高端設施一應俱全。除寬敞的艙房外，您還擁有面積達 114 至 450 平方英呎（3 至 12 坪）的私人陽台，更可尊享一系列套房專屬禮遇*。入住標準套房艙，您將獨享帶柔軟沙發床的獨立起居空間、步入式衣帽間、獨立的淋浴設備及浴缸等多種高端設施帶來的奢華享受。</p>
            </li>
          </ul>
        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <h3>餐廳介紹<span class="small">Restaurants</span></h3>
          <ul class="fleetRestaurants">
            <li>
              <img src="@/assets/images/DiningRooms_1.jpg" alt="">
              <h4>雷諾的法式餐酒館</h4>
              <h5>Bistro Sur La Mer by Emmanuel Renaut</h5>
              <p>艾曼紐爾‧雷諾(Emmanuel Renaut)其位於阿爾卑斯山餐廳「Flocons de Sel」曾獲米其林三星殊榮，主廚將現代手法融入他為公主遊輪特製及研發的創意法國餐點。</p>
            </li>
            <li>
              <img src="@/assets/images/DiningRooms_2.jpg" alt="">
              <h4>夜光主廚檯餐</h4>
              <h5>Chef's Table Lumiere</h5>
              <p>每晚僅接待12位嘉賓享用的精美佳餚，由行政總廚親自烹飪。與親朋就坐於光幕環繞的中央宴會桌，巧妙利用燈光幕簾裝飾，盡情享受美味與優雅的獨特氛圍，為賓客打造引人入勝的難忘用餐體驗。</p>
            </li>
            <li>
              <img src="@/assets/images/DiningRooms_3.jpg" alt="">
              <h4>環球美食自助餐廳</h4>
              <h5>World Fresh Marketplace</h5>
              <p>來自世界各地的美味，餐檯上從傳統中式料理到地中海菜式，多樣佳餚隨時變換菜色，中島區域的烘焙坊更專為各式經典麵包、西點等。</p>
            </li>
          </ul>
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
          <h3>設施介紹<span class="small">Facility</span></h3>
          <ul class="fleetFacility">
            <li><span>泳 池</span><img src="@/assets/images/Facility_1.jpg" alt="泳池"></li>
            <li><span>劇 院</span><img src="@/assets/images/Facility_2.jpg" alt="劇院"></li>
            <li><span>賭 場</span><img src="@/assets/images/Facility_3.jpg" alt="賭場"></li>
            <li><span>室外表演廳</span><img src="@/assets/images/Facility_4.jpg" alt="室外表演廳"></li>
            <li><span>奢華酒吧</span><img src="@/assets/images/Facility_5.jpg" alt="奢華酒吧"></li>
            <li><span>兒童探索中心</span><img src="@/assets/images/Facility_6.jpg" alt="兒童探索中心"></li>
            <li><span>健身中心</span><img src="@/assets/images/Facility_7.jpg" alt="健身中心"></li>
            <li><span>SPA療癒中心</span><img src="@/assets/images/Facility_8.jpg" alt="SPA療癒中心"></li>
            <li><span>寧靜休息區</span><img src="@/assets/images/Facility_9.jpg" alt="寧靜休息區"></li>
          </ul>
        </div>
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
