import { reactive } from 'vue'

export const store = reactive({
    burgerMenuOpen: false, 
    toggle() {
        
        this.burgerMenuOpen = !this.burgerMenuOpen
    } 
})