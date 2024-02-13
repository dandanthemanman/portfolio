<template>
    <div>
        <MenuIcon class="menu-icon"/>
    </div>
</template>

<script setup>
import MenuIcon from '@/components/MenuIcon.vue'
import { store } from "../store/store"
</script>

<style lang="scss" scoped>
    .menu-icon {
        height: 40px;
        width: 40px;
        padding: 2rem;
    }

</style>