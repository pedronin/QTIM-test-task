<script setup lang="ts">
import type { IPost } from "~/types";

const envConfigs = useRuntimeConfig().public;
const { id } = useRoute().params;

const { data: postData, pending } = useLazyFetch<IPost>(
  `${envConfigs?.API_URL}/posts/${id}`
);
</script>

<template>
  <div class="post">
    <Loader v-if="pending" />

    <template v-else>
      <QtimTitle :style="{ marginBottom: '73px' }">
        {{ postData?.title }}
      </QtimTitle>

      <img class="post__img" src="/img/example.png" width="" height="" alt="" />

      <div class="about">
        <span class="about__label">About</span>
        <span class="about__descr">
          {{ postData?.description }}
        </span>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.post {
  margin-top: 120px;
  margin-bottom: 80px;

  display: flex;
  flex-direction: column;

  &__img {
    max-height: 700px;
    display: block;
    margin-bottom: 80px;
  }

  .about {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 695px;

    &__descr {
      font-size: 36px;
      line-height: 45px;
    }
  }
}
</style>
