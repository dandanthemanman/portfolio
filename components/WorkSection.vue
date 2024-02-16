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
export default {
    setup() {
        const accordionDrawers = ref(null)
        

        return {
            accordionDrawers
        }
    },
    data() {
        return {
            activeDrawerIndex: null, 
            workDrawers: [
                {
                    title: "Dublab (Bean.la)",
                    description: "lorem ipsum", 
                },
                {
                    title: "Jaja Tequila (Bean.la)",
                    description: "lorem ipsum2", 
                },
                {
                    title: "s94 Design (Bean.la)",
                    description: "lorem ipsum3", 
                }
            ]
        }
    },
    methods: {
        setActiveDrawerIndex(index) {
            this.activeDrawerIndex =
            index === this.activeDrawerIndex ? null : index
        }
    }
}
</script>

<style lang="scss" scoped>
*{
    z-index: 5;
}

</style>