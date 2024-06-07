<template>
  <footer class="footer">
    <div class="footer__content container">
      <div class="footer__top">
        <div class="banner">
          <span class="banner__label">Is there a project?</span>
          <h2 class="banner__title">Let’s work<br />together</h2>
        </div>

        <ul class="for-question">
          <div class="for-question__item">
            <span>For all questions</span>
            <span class="for-question__phone"> +7 (920) 278—00—68 </span>
            <span>qtim@agency.com</span>
          </div>

          <div class="for-question__item">
            <span>Office in Russia</span>
            <span class="for-question__address">
              139 Ruben Station Lake Drew, NM 52678
            </span>
            <NuxtLink to="#" class="for-question__link-locate">
              <img src="/icons/location.svg" width="12" height="12" alt="" />
            </NuxtLink>
          </div>

          <div class="for-question__item">
            <span>Office in Dubai</span>
            <span class="for-question__address">
              1312 Ruben Station Lake Drew, NM 52678
            </span>
            <NuxtLink to="#" class="for-question__link-locate">
              <img src="/icons/location.svg" width="12" height="12" alt="" />
            </NuxtLink>
          </div>
        </ul>
      </div>

      <div class="footer__bottom">
        <ul class="footer__links-list">
          <li v-for="social in SOCIAL.slice(0, 3)" :key="social.title">
            <NuxtLink
              class="footer__links-item"
              :to="social.href"
              target="_blank"
            >
              {{ social.title }}
            </NuxtLink>
          </li>
        </ul>

        <NuxtLink
          to="https://qtim.pro/"
          target="_blank"
          class="footer__link-go"
        >
          GO
        </NuxtLink>

        <ul class="footer__links-list">
          <li v-for="social in SOCIAL.slice(3)" :key="social.title">
            <NuxtLink
              class="footer__links-item"
              :to="social.href"
              target="_blank"
            >
              {{ social.title }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink class="footer__links-item" to="/privacy-policy">
              Privacy Policy
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@import url("./styles.scss");
</style>
