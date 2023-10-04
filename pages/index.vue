<template>
    <div class="about-projects-container" id="about">
        <div class="about-container">
            <p>ABOUT <br> <br>Developer with one year's hands-on experience working at a web agency based out of LA</p>
        </div>
        <div class="projects-container">
            <p>PROJECTS <br> <br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum quod voluptate, doloremque adipisci odio maxime ab odit, optio sapiente minus. Fuga excepturi possimus magnam dolorum accusamus, vel ut doloremque!</p>
        </div>
    </div>
    <div id="projects"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .about-projects-container {
        scroll-snap-align: start;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 50vh;
        .about-container {
            
            padding: 1.4rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            p {
                padding: 1rem;
                background-color: greenyellow;
                font-family: $libre-franklin;
            }
        }
        .projects-container {
            padding: 1.4rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            p {
                padding: 1rem;
                background-color: greenyellow;
                font-family: $libre-franklin;
            }
        }
    }
</style>