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
html {
  font-size: 62.5%;
}
.site {
  background-image: url("./public/madrid_sunset.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  margin: 0;
}

.site-content {
  flex: 1;
}
</style>
