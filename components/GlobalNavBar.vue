<template>
    <div class="nav-bar-container">
        <div class="name-container">
            <h2>Dan Becker</h2>
        </div>
        <div class="items-container">
            <div class="nav-bar-item">
                <h3>projects</h3>
            </div>
            <div class="nav-bar-item"></div>
            <div class="nav-bar-item"></div>
            <div class="nav-bar-item"></div>
        </div>
        
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.nav-bar-container{
    display: flex;
    justify-content: space-between;
    .name-container {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .items-container{
        display: flex;
        .nav-bar-item {
            border: 1px solid red;
            height: 50px;
            width: 50px;
        }  
    }
    
}

</style>