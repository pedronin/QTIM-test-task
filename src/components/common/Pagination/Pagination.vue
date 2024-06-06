<script setup lang="ts">
import type { IPaginationProps } from "./types";
const { quantityPage, currentPageNumber } = defineProps<IPaginationProps>();
</script>

<template>
  <ul class="paginate">
    <li
      v-for="n in quantityPage"
      :key="n"
      :class="
        clsx('paginate__item', {
          '--active': currentPageNumber === n,
        })
      "
    >
      {{ n }}
    </li>

    <li v-if="quantityPage > 3" class="paginate__item paginate__more-button">
      <img src="/icons/chevron-right.svg" width="24" height="24" alt=">" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import url("./styles.scss");
</style>
