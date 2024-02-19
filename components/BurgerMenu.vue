<template>
    <div style="position: relative; height: 100px">
         <aside class="mobile-menu" :style="menuPosition">
            <CloseIcon @click="toggleMenu" class="close-icon" />
            <a href="https://github.com/dandanthemanman" target="_blank">github</a>
            <a href="https://www.linkedin.com/in/dan-becker-2abb01107/" target="_blank">linkedIn</a>
            <a href="">Resume (PDF)</a>
            <p @click="handleEmailClick" >{{ contactText }}</p>

        </aside>
        <MenuIcon class="menu-icon" @click="toggleMenu"/>
    </div>
</template>

<script setup>
import MenuIcon from '@/components/MenuIcon.vue'
import CloseIcon from '@/components/CloseIcon.vue'
import { computed, ref } from 'vue'

const menuOpen = ref(false)
const contactText = ref("Contact")

const toggleMenu = () => {
    menuOpen.value = !menuOpen.value
}

const copyToClipboard = (callback) => {
            navigator.clipboard.writeText('daniel.becker000@gmail.com').then(callback)
        }

const handleEmailClick = () => {
    copyToClipboard(() => {
            console.log('handle email click used')
            contactText.value = 'email copied to clipboard ✓'
            })
}

const menuPosition = computed(() => {
    return {
        "transform": menuOpen.value ? "translateX(-100vw)" : "translateX(8px)"
    }
})

</script>

<style lang="scss" scoped>
.mobile-menu {
    width: 100vw;
    @media (min-width: $breakpoint-md) {
        width: 50vw;
  }
    padding: 1.8rem;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 80px;
    height: 100vh;
    margin-top: -2rem;
    z-index: 10;
    background-color: rgb(59, 108, 173);
    transition: transform ease 0.5s;
    a, p {
        text-decoration: none;
        color: white;
        font-size: 2.5rem;
        padding: 20px;
        margin: unset;
    }
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
        @media (min-width: $breakpoint-md) {
            width: 60px;
            height: 60px;
  }
    }
    .close-icon {
        height: 40px;
        width: 40px;
        padding: 2rem; 
        @media (min-width: $breakpoint-md) {
            width: 60px;
            height: 60px;
  } 
    }

</style>