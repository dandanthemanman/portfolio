<template>
    <div class="about-projects-container" id="about">
        <div class="about-container">
            <p ref="firstTypingAnimation" class="type-writer-effect">
                Functional and efficient websites
            </p>
        </div>

        <div class="projects-container">
            <p ref="secondTypingAnimation" >
                Fluent in Javascript, HTML, and CSS
            </p>
            
        </div>
        <div id="stack-container" ref="fadeInAnimation">
                <VueIcon/>
                <ReactIcon/>
                <JsIcon/>
                <NetlifyIcon/>
                <SassIcon/>
                <CssIcon/>
            </div>
    </div>
    <div id="projects"></div>
</template>

<script>

export default {
    setup() {
        const firstTypingAnimation = ref(null);
        const secondTypingAnimation = ref(null);
        const fadeInAnimation = ref(null);
        const stackIcons = ref([])
        return {
            firstTypingAnimation, 
            secondTypingAnimation, 
            fadeInAnimation, 
            stackIcons,
        }
    },
    mounted() {
        this.firstTypingAnimation.addEventListener('animationend', () => {
            this.secondTypingAnimation.classList.add('type-writer-effect')
        });

        this.stackIcons = Array.from(this.fadeInAnimation.getElementsByTagName('svg'))

        this.secondTypingAnimation.addEventListener('animationend', () => {
                this.stackIcons.forEach((icon, index) => {
                    icon.classList.add('fade-in-animation');
                    icon.style.animationDelay = `${index * 0.5}s`
            })
        })
        
  }
}
</script>

<style lang="scss" scoped>
    .about-projects-container {
        scroll-snap-align: start;
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
                margin-left: auto;
                padding: 1rem;
                background-color: greenyellow;
                font-family: $libre-franklin;
                opacity: 0;
            }
            
        }
        #stack-container {
                display: flex;
                max-width: 100vw;
                svg {
                    opacity: 0;
                }
            }
    }
    .fade-in-animation {
        animation: fadeIn 0.5s ease forwards;
    }
    @keyframes fadeIn {
        0% {
            opacity: 0; transform: scale(0.5)
        }
        80% {
            transform: scale(1.1)
        }
        100% {
            opacity: 1; transform: scale(1)
        }
    }

    .type-writer-effect  {
        opacity: 1 !important;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid black; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            delay-typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;

        @media (min-width:960px) {
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid black; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        letter-spacing: .15em; /* Adjust as needed */
        animation: 
            delay-typing 3.5s steps(40, end),
            blink-caret .75s step-end infinite;
        }
    }

    @keyframes typing {
    from { width: 0; visibility: visible; }
    to { width: 100%;  }
    }   

    @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: black; }
    }

    @keyframes delay-typing {
        0% {
            max-width: 0%;
            opacity: 1;
            
        }
        30% {
            max-width: 0%;
        }
        100% {
            max-width: 100%;
            opacity: 1;
        }
    }


</style>