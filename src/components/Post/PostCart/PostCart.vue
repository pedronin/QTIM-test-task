<script setup lang="ts">
import type { TPostCartProps } from "./types";

const { id, preview, image, title } = defineProps<TPostCartProps>();

const isHoverCart = ref(false);
const hintRef = ref<HTMLElement | null>(null);
</script>

<template>
  <div class="post-cart">
    <div class="post-cart__content">
      <img :src="image" width="280" height="280" :alt="title" />

      <span class="post-cart__preview">
        {{ preview }}
      </span>

      <span ref="hintRef" class="post-cart__hint"> Read more </span>
    </div>
  </div>
</template>

<style scoped>
@import url("./styles.scss");
</style>
