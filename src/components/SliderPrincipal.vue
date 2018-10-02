<template>
  <!-- SLIDER AREA START HERE -->
    <section class="slider-area">
        <div class="slider-wrapper">
            <div id="slider" class="nivoSlider">
                <img src="./../assets/images/home.jpg" alt="" title="#htmlcaption1" />
                <img src="./../assets/images/slide1.jpg" alt="" title="#htmlcaption2" />
            </div>
            <!-- CAPTION 1 -->
            <div id="htmlcaption1" class="nivo-html-caption slider-caption-1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="slider-content">
                                <!-- Direction 1 -->
                                <div class="wow bounceInRight" data-wow-duration="1.5" data-wow-delay=".5s ">
                                    <h4 class="title1 text-center">SOUTH FLORIDA’S LEADING BUILDING INSPECTION COMPANY</h4>
                                </div>
                                <!-- Direction 2 -->
                                <!-- <div class="wow bounceInRight" data-wow-duration="2" data-wow-delay=".7s ">
                                    <p class="title2 text-center">We are Design & Marketing Agency</p>
                                </div> -->
                                <!-- Direction 3 -->
                                <div class="wow bounceInUp text-center" data-wow-duration="1.5" data-wow-delay=".9s ">
                                    <a href="#" class="ready-btn">REQUEST A QUOTE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CAPTION 1 END -->

            <!-- CAPTION 2 START -->
            <div id="htmlcaption2" class="nivo-html-caption slider-caption-1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="slider-content">
                                <!-- Direction 1 -->
                                <div class="wow slideInLeft" data-wow-duration="1.5" data-wow-delay=".5s ">
                                   <h4 class="title1 text-center">SOUTH FLORIDA’S LEADING BUILDING INSPECTION COMPANY</h4>
                                </div>
                                <!-- Direction 2 -->
                                <!-- <div class="wow slideInLeft" data-wow-duration="2" data-wow-delay=".7s ">
                                    <p class="title2">we are ready to lessen your work </p>
                                </div> -->
                                <!-- Direction 3 -->
                                <div class="wow bounceInUp text-center" data-wow-duration="1.5" data-wow-delay=".9s ">
                                    <a href="#" class="ready-btn">REQUEST A QUOTE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- CAPTION 2 END -->
        </div>
    </section>
    <!-- SLIDER AREA END HERE -->

</template>
<script>
  export default {
    name: "SliderPrincipal"
  }
</script>