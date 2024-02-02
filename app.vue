<template>
<div class="site">
  <GlobalNavBar class="global-nav-component"/>
  <NuxtPage/>
  <GlobalFooter/>
  </div>
</template>

<script setup>

</script>

<style lang="scss">
html, body {
  scroll-padding-top: 10.6rem;
  font-size: 62.5%;
    margin: 0px !important;
    width: 100%;
  
}

.site {
  background-image: url("./public/madrid_sunset.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  min-height: 100vh;
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
