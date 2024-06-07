<script setup lang="ts">
import type { IPostListProps } from "./types";

const { posts, pending } = defineProps<IPostListProps>();
</script>

<template>
  <div class="post-list">
    <Loader v-if="pending" :isAbsolute="!!posts.length" />
    <span v-else-if="error">{{ error?.message }}</span>

    <PostCart
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :preview="post.preview"
      :image="post.image"
      :title="post.title"
    ></PostCart>
  </div>
</template>

<style scoped>
@import url("./styles.scss");
</style>
