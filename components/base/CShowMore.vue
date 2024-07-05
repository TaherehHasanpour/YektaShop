<template>
  <div  class="expandable-text pt-1" :class="{ 'active': isShow }" style="height: 100px;">
    <div class="expandable-text_text fa-num">
      <slot />
    </div>
    <div class="expandable-text-expand-btn justify-content-start text-sm">
            <span class="show-more" :class="{ 'active d-none': isShow }"  @click="isShow = !isShow">
                {{ showText }}<i class="ri-arrow-down-s-line ms-2"></i>
            </span>
      <span class="show-less" :class="{ 'd-none': !isShow }"  @click="isShow = !isShow">
                {{ clearText }} <i class="ri-arrow-up-s-line ms-2"></i>
            </span>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  showText: {
    type: String,
    default: 'مشاده بیشتر'
  },
  clearText: {
    type: String,
    default: 'مشاده کمتر'
  }
});
const isShow = ref(true);
</script>
<style></style>
