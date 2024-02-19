<template>
    <div class="about-projects-container" id="about">
        <div class="about-container">
            <p ref="firstTypingAnimation" class="type-writer-effect">
                Functional and beautiful websites.
            </p>
        </div>

        <div class="projects-container">
            <p ref="secondTypingAnimation" >
                currently building at Bean.la
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
        <!-- CONTACT RADIATING BUTTON (REMOVED 2/19/24) -->
        <!-- <div class="contact-container" ref="contactContainer">
            <p @click="handleEmailClick">
                {{ contactText }}</p>
        </div> -->
        <div class="work-section" ref="worksContainer">
            <WorkSection />
        </div>  
    </div>
</template>

<script>

export default {
    setup() {
        const firstTypingAnimation = ref(null);
        const secondTypingAnimation = ref(null);
        const fadeInAnimation = ref(null);
        const stackIcons = ref([]);
        const contactContainer = ref(null)
        const contactText = ref("Contact")
        const worksContainer = ref(null)
        return {
            firstTypingAnimation,
            secondTypingAnimation,
            fadeInAnimation,
            stackIcons,
            contactContainer,
            contactText, 
            worksContainer
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
                icon.style.animationDelay = `${index * 0.3}s`
            })
            this.stackIcons[this.stackIcons.length - 1].addEventListener('animationend', () => {
                this.worksContainer.style.opacity = '1'
            })
        })


    },
    methods: {
        copyToClipboard(callback) {
            navigator.clipboard.writeText('daniel.becker000@gmail.com').then(callback)
        },
        handleEmailClick() {
            this.copyToClipboard(() => {
            console.log('handle email click used')
            this.contactText = 'email copied to clipboard ✓'
            })
        },
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300&family=Protest+Riot&display=swap');

.work-section {
    transition: opacity, 2s;
    opacity: 0;
        #work {
        height: 200px;
        width: 100vw;
        scroll-behavior: smooth;  
        margin-left: -8px;
            .anchor{display: block; position: relative; top: 250px; visibility: hidden;}
}
}

.contact-container {
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
    color: cornsilk;
    font-family: $orbitron;
    position: relative;
    opacity: 0;
    transition: opacity, 2s;
    a {
        text-decoration: none;
        color: cornsilk;
        font-size: 1.6rem;
    }
}
.contact-container::before {
    z-index: -5;
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border: 1px solid white;
    border-radius: 50%;  
    animation: pulse 4s infinite; 
    transform: scale(0.75);
    animation-delay: 2s;
}
.contact-container::after {
    z-index: -5;
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    border: 1px solid white;
    border-radius: 50%;  
    animation: pulse 4s infinite; 
    transform: scale(0.75);
}
@keyframes pulse {
    to {
    transform: scale(2);
    opacity: 0;
  }
}
    .about-projects-container {
        scroll-snap-align: start;
        display: flex;
        flex-direction: column;
        .about-container {
            margin-right: auto;
            padding: 2.8rem 2.8rem 0;
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
            padding: 2.8rem 2.8rem 0;
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
                z-index: -1;
                display: flex;
                width: calc(100vw - 16px);
                justify-content: center;
                margin-bottom: -55px;
                svg {
                    opacity: 0;
                    max-width: 170px;
                }
            }
    }
    .fade-in-animation {
        animation: fadeIn 0.3s ease forwards;
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