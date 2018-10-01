<template>
  <div>
      <header class="header-area" id="#home"> 
        <header-top/>
        <menu-header/>
    </header>
    <slider-principal/>
    <about/>
    <slider-small/>
    <skill-area/>
    <support-section/>
    <historial-section/>
    <our-team-section/>
    <testimonial/>
    <clients/>
    <licenses/>
    <team-work/>
    <stay-in-touch/>
    <footer/>
  </div>
  
</template>

<script>

import HeaderTop from "./components/HeaderTop.vue"
import MenuHeader from "./components/MenuHeader.vue"
import MenuMobile from "./components/MobileMenu.vue"
import SliderPrincipal from "./components/SliderPrincipal.vue"
import About from "./components/About.vue"
import SliderSmall from "./components/SliderSmall.vue"
import SkillArea from "./components/SkillArea.vue"
import SupportSection from "./components/SupportSection.vue"
import HistorialSection from "./components/HistorialSection.vue"
import OurTeamSection from "./components/OurTeamSection.vue"
import Testimonial from "./components/Testimonials.vue"
import Clients from "./components/Clients.vue"
import Licenses from "./components/Licenses.vue"
import TeamWork from "./components/TeamWork.vue"
import StayInTouch from "./components/StayInTouch.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'app',
  components: {
    HeaderTop,
    MenuHeader,
    MenuMobile,
    SliderPrincipal,
    About,
    SliderSmall,
    SkillArea,
    SupportSection, 
    HistorialSection,
    OurTeamSection, 
    Testimonial,
    Clients, 
    Licenses,
    TeamWork,
    StayInTouch,
    Footer
  }
  
}
</script>
<style lang="css">
@import "./assets/css/index.css";
</style>

