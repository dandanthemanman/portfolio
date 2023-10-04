<template>
    <div class="nav-bar-container">
        <div class="name-container">
            <a class="big-name" href="/#intro">Dan Becker</a>
        </div>
        <div class="items-container">
            <div class="nav-bar-item">
                <a href="/#contact">Contact</a>
            </div>
            <div class="nav-bar-item">
                daniel.becker000@gmail.com
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav-bar-container{
    display: flex;
    justify-content: space-between;
    a {
    text-decoration: none;  
    color: unset;
    }
    .name-container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        .big-name{
            color: white;
            font-size: 45px;
        }
    }
    .items-container{
        display: flex;
        .nav-bar-item {
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid red;
            height: 50px;
            width: 25vw;
            text-align: center;
        }  
    }
    
}

</style>