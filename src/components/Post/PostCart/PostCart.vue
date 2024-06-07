<script setup lang="ts">
import type { TPostCartProps } from "./types";

const { id, preview, image, title } = defineProps<TPostCartProps>();

const hintRef = ref<HTMLElement | null>(null);
</script>

<template>
  <div class="post-cart">
    <NuxtLink :to="`post/${id}`" class="post-cart__content">
      <img src="/img/example-small.png" :alt="title" />

      <span class="post-cart__preview">
        {{ preview }}
      </span>

      <span ref="hintRef" class="post-cart__hint">Read more</span>
    </NuxtLink>
  </div>
</template>

<style scoped>
@import url("./styles.scss");
</style>
