import { reactive } from 'vue'

export const store = reactive({
    siteBlur: false,
    burgerMenuOpen: false, 
    toggle() {
        this.burgerMenuOpen = !this.burgerMenuOpen
    },
    blurSiteToggle() {
        this.siteBlur = !this.siteBlur
        console.log('blurSiteToggle')
    }
})