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

export default {
  name: 'app',
  components: {
    HeaderTop,
    MenuHeader,
    MenuMobile,
    SliderPrincipal,
    About,
    SliderSmall,
    SkillArea
  }
  
}
</script>
<style lang="css">
@import "./assets/css/index.css";
</style>

