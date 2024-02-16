<template>
    <div ref="accordionDrawers" id="work" class="work-section-container">
        <WorkDrawer v-for="(workDrawer, index) in workDrawers"
        :key="index"
        :drawerContent = "workDrawer"
        :active-drawer-index="activeDrawerIndex"
        @emit-active-drawer-index="setActiveDrawerIndex"/>
    </div>
</template>

<script>
import workDrawers from "../assets/workDrawers"
export default {
    setup() {
        const accordionDrawers = ref(null)
        return {
            accordionDrawers, 
        }
    },
    data() {
        return {
            activeDrawerIndex: null,
            workDrawers: workDrawers 
        }
    },
    methods: {
        setActiveDrawerIndex(index) {
            this.activeDrawerIndex =
            index === this.activeDrawerIndex ? null : index
        }
    }, 
    computed: {
        workDrawers() {
            return this.workDrawers
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    z-index: 5;
}

</style>