<script setup lang="ts">
import type { ILoaderProps } from "./types";

const { isAbsolute } = defineProps<ILoaderProps>();
</script>

<template>
  <div
    :class="
      clsx('loader', {
        '--absolute': isAbsolute,
      })
    "
  >
    <img src="/icons/loader-circle.svg" width="200" height="200" alt="" />
  </div>
</template>

<style scoped lang="scss">
@import url("./styles.scss");
</style>
