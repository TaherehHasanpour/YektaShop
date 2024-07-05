<template>
  <div>
    <p>
      {{ res }}
    </p>
  </div>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";
import {FetchApi} from "@/utilitis/CustomApiFech";

const res = ref({})
onMounted(async () => {
  res.value = await FetchApi("/banner");
  console.log(res.value);
})
</script>

<style scoped>

</style>