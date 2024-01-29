<template>
<div class="site">
  <GlobalNavBar/>
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

.site-content {
  flex: 1;
}
.desktop {
  display: none;
  @media (min-width:480px) {
    display: block;
  }
}
.tablet {
  display: none; 
  @media (min-width: 480px) and (max-width: 960px) {
    display: block;
  }

}
.mobile {
  @media (min-width: 480px) {
    display: none;
  }
}
</style>
