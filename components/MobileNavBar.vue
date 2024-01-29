<template>
    <div class="nav-bar-container">
        <div class="name-container">
            <a class="big-name" href="/#intro">Dan Becker</a>
            <a class="little-name" href="/#intro">web developer</a>
        </div>
        <div class="items-container">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emailText = ref("Email me")

const copyToClipboard = (callback) => {
    navigator.clipboard.writeText('daniel.becker000@gmail.com').then(callback)
}

const handleEmailClick = () => {
        copyToClipboard(() => {
        console.log('handle email click used    ')
        emailText.value = 'email copied to clipboard ✓'
    })
}

</script>

<style lang="scss" scoped>
.nav-bar-container{ 
    margin: -8px;
    border-bottom: 1px solid red;
    position: sticky;
    top: 0px;
    backdrop-filter: blur(3px);
    font-family: $dot-gothic;
    display: flex;
    justify-content: space-between;
    align-items: center;
        a {
            text-decoration: none;  
            color: unset;
        }
    
    .name-container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
       margin: 2rem;
        .big-name{
            color: white;
            font-size: 4.5rem;
            // margin: 2rem 2rem 0px;
            &:hover {
            color: greenyellow;
        }
        }
        .little-name {
            color: white;
            font-size: 2rem;
            // margin: 2rem;
            &:hover {
            color: greenyellow;
        }
     }
    }
    .items-container{
        display: flex; 
        
        .nav-bar-item {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            text-align: center;
            font-size: 1.6rem;
            overflow: hidden;
            &:hover {
                color: yellow;
            }

           
            &.email-link {
                display: flex;
                flex-direction: column;
                .copy-to-clipboard-text {
                    transform: translateY(calc(200%));  
                }
                &:hover {
                    span {
                        transform: translateY(calc(-200% - 0.5rem));  
                        transition: transform 0.3s cubic-bezier(0.45, 0, 0.55, 1);
                    }
                }     
            }
        }  
    }
    
}

</style>