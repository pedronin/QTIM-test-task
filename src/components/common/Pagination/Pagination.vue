<script setup lang="ts">
import type { IPaginationProps } from "./types";
const defaultQuantityVisiblePage = 5;
const quantityVisiblePage = 4;

const { quantityPage, currentPageNumber } = defineProps<IPaginationProps>();
const emit = defineEmits(["changeCurrentPageNumber"]);

const diffQuantityPage = ref(0);

const decrementDiffQuantityPage = () => {
  diffQuantityPage.value =
    diffQuantityPage.value - 2 >= 0 ? diffQuantityPage.value - 2 : 0;
};
const incrementDiffQuantityPage = () => {
  diffQuantityPage.value += 2;
  if (diffQuantityPage.value + quantityVisiblePage >= quantityPage) {
    diffQuantityPage.value = quantityPage - quantityVisiblePage;
  }
};
</script>

<template>
  <ul class="paginate">
    <li
      v-if="diffQuantityPage > 0"
      @click="decrementDiffQuantityPage"
      class="paginate__item paginate__more-button --left"
    >
      <img src="/icons/chevron-right.svg" width="24" height="24" alt=">" />
    </li>

    <li
      v-for="n in diffQuantityPage
        ? quantityVisiblePage
        : defaultQuantityVisiblePage"
      :key="n + diffQuantityPage"
      :class="
        clsx('paginate__item', {
          '--active': currentPageNumber === n + diffQuantityPage,
        })
      "
      @click="() => emit('changeCurrentPageNumber', n + diffQuantityPage)"
    >
      {{ n + diffQuantityPage }}
    </li>

    <li
      v-if="
        quantityPage > 5 &&
        diffQuantityPage + quantityVisiblePage < quantityPage
      "
      @click="incrementDiffQuantityPage"
      class="paginate__item paginate__more-button"
    >
      <img src="/icons/chevron-right.svg" width="24" height="24" alt=">" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
@import url("./styles.scss");
</style>
