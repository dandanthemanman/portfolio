<template>
<div class="site">
  <GlobalNavBar class="global-nav-component"/>
  <NuxtPage :style="blurStyling"/>
  <GlobalFooter :style="blurStyling"/>
  </div>
</template>

<script>
import { store } from "../store/store"
export default {
  data() {
    return {
      store
    }
  },
  mounted() {
    this.setVhVariable();
  }, 
  methods: {
    setVhVariable() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }, 
  computed: {
    blurStyling() {
      return {
        "filter": store.siteBlur ? "blur(4px)" : ""
      }
    }
  }
}

</script>

<style lang="scss">
#__nuxt {
  contain: paint;
}

html{scroll-behavior:smooth}
html, body {
  scroll-padding-top: 10.6rem;
  font-size: 62.5%;
    margin: 0px !important;
    width: 100%;
    background-image: url("./public/madrid_sunset.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
}
.site {
  display: flex;
  min-height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
  margin: 0;
  padding: 8px;
}

.global-nav-component {
    position: sticky;
    top: 0px; 
    margin-left: -8px;
    margin-right: -8px;
    box-shadow: 0 -1px inset red;
}

.site-content {
  flex: 1;
}
.mobile {
  @media (min-width: 480px) {
    display: none !important;
  }
}
.tablet {
  @media (max-width:480px) {
    display: none !important;
  }
  @media (min-width:960px) {
    display: none !important;
  }
}
.desktop {
  @media (max-width:480px) {
    display: none !important;
  }
}
</style>
