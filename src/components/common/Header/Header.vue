<template>
  <header class="header">
    <NuxtLink to="/">
      <img
        class="header__log0"
        src="/icons/logo.svg"
        width="84"
        height="25"
        alt="QTIM"
      />
    </NuxtLink>

    <div class="header__wrapper">
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <NuxtLink to="#">Works</NuxtLink>
          </li>
          <li class="header__nav-item">
            <NuxtLink to="#">About</NuxtLink>
          </li>
        </ul>
      </nav>

      <div class="header__cta">
        <div class="header__uk">
          <img src="/icons/uk.svg" width="24" height="24" alt="UK" />
        </div>

        <NuxtLink
          target="_blank"
          to="https://qtim.pro/"
          class="header__link-go"
        >
          Let’s work
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url("./styles.scss");
</style>
