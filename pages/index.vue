<template>
    <div class="about-projects-container" id="about">
        <div class="about-container type-writer-effect ">
            <p>Developer with 1 year's hands-on experience building sites at LA based web agency </p>
        </div>
        <div class="projects-container type-writer-effect ">
            <p>Projects</p>
        </div>
    </div>
    <div id="projects"></div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    .about-projects-container {
        scroll-snap-align: start;
        // display: grid;
        // grid-template-columns: repeat(2, 1fr);
        height: 50vh;
        display: flex;
        flex-direction: column;
        .about-container {
            margin-right: auto;
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
            margin-left: auto;
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
    .type-writer-effect p {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid black; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            delay-typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
    }

    @keyframes typing {
    from { width: 0 }
    to { width: 100% }
    }   

    @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: black; }
    }

    @keyframes delay-typing {
        0% {
            width: 0%;
            opacity: 0%;
            
        }
        30% {
            width: 0%;
            // display: block;
        }
        100% {
            width: 100%;
            // display: block;
        }
    }


</style>