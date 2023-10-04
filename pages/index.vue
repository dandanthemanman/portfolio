<template>
    <div class="about-projects-container" id="about">
        <div class="about-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur atque harum reiciendis ea excepturi voluptas culpa doloribus quasi quisquam in perspiciatis, quod eius velit explicabo ullam labore nesciunt? Tenetur, vitae.</p>
        </div>
        <div class="projects-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo earum quod voluptate, doloremque adipisci odio maxime ab odit, optio sapiente minus. Fuga excepturi possimus magnam dolorum accusamus, vel ut doloremque!</p>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .about-projects-container {
        border: 1px solid red;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        height: 80vh;

        .about-container {
            padding: 1.4rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            p {
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
                background-color: greenyellow;
                font-family: $libre-franklin;
            }
        }
    }
</style>