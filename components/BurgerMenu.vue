<template>
    <div @click="store.toggle">
        <CloseIcon class="close-icon" v-if="store.burgerMenuOpen" @click="store.toggle"/>
        <MenuIcon class="menu-icon" v-else/>
        <h2 >{{ store.burgerMenuOpen }}</h2>
    </div>
</template>

<script setup>
import MenuIcon from '@/components/MenuIcon.vue'
import CloseIcon from '@/components/CloseIcon.vue'
import { store } from "../store/store"
</script>

<style lang="scss" scoped>
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