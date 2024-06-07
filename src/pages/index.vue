<script setup lang="ts">
import type { IPost } from "~/types";

const envConfigs = useRuntimeConfig().public;
const currentPageNumber = ref(1);
const quantityPage = ref(11);
const {
  data: posts,
  pending,
  error,
} = useLazyFetch<IPost[]>(`${envConfigs?.API_URL}/posts`, {
  query: { limit: 8, page: currentPageNumber },
});

const changeCurrentPageNumber = (pageNumber: number) => {
  currentPageNumber.value = pageNumber;
};
</script>

<template>
  <div class="home">
    <QtimTitle>Articles</QtimTitle>

    <div class="posts">
      <PostList :posts="posts || []" :pending="pending" :error="error" />
      <Pagination
        v-if="quantityPage > 1"
        :quantityPage="quantityPage"
        :currentPageNumber="currentPageNumber"
        @changeCurrentPageNumber="changeCurrentPageNumber"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  margin-top: 120px;
  margin-bottom: 140px;

  display: flex;
  flex-direction: column;
  gap: 60px;

  .posts {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>
