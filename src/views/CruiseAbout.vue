<template>
  <NavBar></NavBar>

  <div class="big_img">
    <img src="@/assets/images/BackImg2.jpg" alt="">
  </div>

  <div class="introduction">
    <h2 class="title_font">CruiseShip 簡介<span>Cruise Ship Introduction</span></h2>
    <div class="about_box">

        <div class="about_text">
          <p>懷抱夢想家的探索精神，更秉承融貫東西的理念，匠心打造洋溢意式情調的精緻海上空間，並薈萃最新的世界級大型舞台表演以及得獎無數的亞洲美食盛宴。</p>
          <p>賓客在盡情發掘異國風情勝地的同時，亦可感受亞洲殷勤好客的摯誠務，夢享賓至如歸的探索旅途。</p>
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
