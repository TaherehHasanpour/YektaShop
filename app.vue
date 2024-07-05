<template>
  <div>
    <nuxt-layout>
      <nuxt-page></nuxt-page>
    </nuxt-layout>
  </div>
</template>
<script setup lang="ts">
useHead({
  link: [
    { rel: "stylesheet", href: "/css/dependencies.css" },
    {href:"../css/theme.css", rel:"stylesheet"},
    {href:"../css/custom.css", rel:"stylesheet"},
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
    },
  ],
});
</script>
<style>

.page-enter-active {
  transition: all 0.3s ease-out;
}
.page-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}



.layout-enter-active {
  transition: all 0.3s ease-out;
}

.layout-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.layout-enter-from,
.layout-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>