<template>
  <div class="page-wrapper">
    <!-- start of page-header -->
    <the-main-header></the-main-header>
    <!-- end of page-header -->
    <the-mobile-header></the-mobile-header>
    <!-- start of page-content -->
    <main class="page-content">
      <div class="container">
        <slot></slot>
      </div>
      <!-- end of quick-view-modal -->
    </main>
    <!-- end of page-content -->
    <the-footer></the-footer>
  </div>
</template>

<script setup lang="ts">
// import TheFooter from '../components/TheFooter.vue';
// import TheMainHeader from '../components/TheMainHeader.vue';
// import TheMobileHeader from '../components/TheMobileHeader.vue';
useHead({
  link:[
    {href:"../css/dependencies.css", rel:"stylesheet"},
    {href:"../css/theme.css", rel:"stylesheet"},
    {href:"../css/custom.css", rel:"stylesheet"},
    {rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"}
  ],
  script:[
    {src:"../js/dependencies/bootstrap-slider.min.js"},
    {src:"../js/dependencies/bootstrap.bundle.min.js"},
    {src:"../js/dependencies/fancybox.umd.js"},
    {src:"../js/dependencies/iziToast.min.js"},
    {src:"../js/dependencies/jquery-3.6.0.min.js"},
    {src:"../js/dependencies/jquery.countdown.min.js"},
    {src:"../js/dependencies/jquery.simple.timer.min.js"},
    {src:"../js/dependencies/nouislider.min.js"},
    {src:"../js/dependencies/remodal.min.js"},
    {src:"../js/dependencies/select2.min.js"},
    {src:"../js/dependencies/simplebar.min.js"},
    {src:"../js/dependencies/swiper-bundle.min.js"},
    {src:"../js/dependencies/wNumb.js"},
    {src:"../js/dependencies/zoomsl.min.js"},
    {src:"../js/custom.js"},
    {src:"../js/theme.js"},

  ]
})
</script>

<style></style>