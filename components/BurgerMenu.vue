<template>
    <div @click="toggleMenu" style="position: relative; height: 100px">
         <div class="mobile-menu" :style="menuPosition">
            <CloseIcon class="close-icon" />
        </div>
        <MenuIcon class="menu-icon"/>
    </div>
</template>

<script setup>
import MenuIcon from '@/components/MenuIcon.vue'
import CloseIcon from '@/components/CloseIcon.vue'
import { store } from "../store/store"
import { FocusTrap } from 'focus-trap-vue'
import { computed, ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const menuPosition = computed(() => {
    return {
        "transform": menuOpen.value ? "translateX(-400px)" : ""
    }
})

</script>

<style lang="scss" scoped>
.mobile-menu {
    position: absolute;
    left: 80px;
    height: 100vh;
    width: 100vw;
    z-index: 10;
    background-color: red;
    transition: mobile-menu-slide 4s;
    .enter {
        animation-duration: 0.5s;
        animation-name: mobile-menu-slide;
        animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
    }
    .leave {
        animation-direction: reverse;
        animation-duration: 0.45s;
        animation-fill-mode: both;
        animation-name: mobile-menu-slide;
        animation-timing-function: cubic-bezier(0.37, 0, 0.63, 1);
    }
}

@keyframes mobile-menu-slide {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
    .menu-icon {
        height: 40px;
        width: 40px;
        padding: 2rem;
    }
    .close-icon {
        height: 40px;
        width: 40px;
        padding: 2rem;  
    }

</style>