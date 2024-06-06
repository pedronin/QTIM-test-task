<script setup lang="ts"></script>

<template>
  <header class="header">
    <img
      class="header__log0"
      src="/icons/logo.svg"
      width="84"
      height="25"
      alt="QTIM"
    />

    <div class="header__wrapper">
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">Works</li>
          <li class="header__nav-item">About</li>
        </ul>
      </nav>

      <div class="header__cta">
        <div class="header__uk">
          <img src="/icons/uk.svg" width="24" height="24" alt="UK" />
        </div>

        <button class="header__button">Let’s work</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url("./styles.scss");
</style>
