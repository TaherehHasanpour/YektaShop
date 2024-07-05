<template>
  <button :class="['btn', { 'btn-sm': size === 'sm' }, { 'btn-lg': size == 'lg' }, { 'w-100': wFull },
    outline ? `btn-outline-${color}` : `btn-${color}`
  ]" type="submit" >
    <span v-if="loding">
      <div class="spinner-border " role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </span>
    <span v-else>
      <slot />
    </span>
    <slot name="icon" />
  </button>
</template>

<script setup lang="ts">
defineProps({
  size: {
    default: 'normal',
    type: String
  },
  wFull: {
    default: false,
    type: Boolean
  },
  outline: {
    default: false,
    type: Boolean
  },
  color: {
    default: 'primary',
    type: String
  },
  loding: {
    default: false,
    type: Boolean
  },
});
</script>

<style scoped></style>