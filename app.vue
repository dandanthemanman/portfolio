<template>
<div id="background"></div>
<div class="site">
  <GlobalNavBar class="global-nav-component"/>
  <NuxtPage/>
  <GlobalFooter/>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setVhVariable();
  }, 
  methods: {
    setVhVariable() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
  }
}

</script>

<style lang="scss">
#__nuxt {
  overflow: hidden;
  height: 100%
}

html{scroll-behavior:smooth}
html, body {
  scroll-padding-top: 10.6rem;
  font-size: 62.5%;
    margin: 0px !important;
    width: 100%;
  
}

#background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("./public/madrid_sunset.jpg");
  background-size: cover;
  z-index: -1;
}

.site {
  // background-image: url("./public/madrid_sunset.jpg");
  // background-repeat: no-repeat;
  // background-position: center;
  // background-size: cover;
  // background-attachment: fixed;
  display: flex;
  // VV don't understand why the 1vh is necessary here 
  min-height: calc(var(--vh, 1vh) * 100);
  flex-direction: column;
  margin: 0;
  padding: 8px;
}

.global-nav-component {
    position: sticky;
    top: 0px; 
    margin: -8px;
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
