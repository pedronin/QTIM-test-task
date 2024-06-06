<script setup lang="ts"></script>

<template>
  <div class="home">
    <h1 class="home__title">Articles</h1>
    <PostList />
  </div>
</template>

<style scoped lang="scss">
.home {
  margin-top: 60px;
  margin-bottom: 140px;

  display: flex;
  flex-direction: column;
  gap: 60px;

  &__title {
    font-size: 84px;
  }
}
</style>
