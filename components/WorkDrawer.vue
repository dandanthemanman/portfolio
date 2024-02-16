<template>
        <button @click="handleToggle" class="accordion">{{ drawerContent.title }}</button>
            <div class="panel" :style="activeStyling">
            <p>{{ drawerContent.description }}</p>
            <div class="image-container" v-for="image in drawerContent.images" :key="index">
                <p class="image-caption">{{ image.caption }}</p>
                <img :src="image.url" alt="">
            </div>
            
            </div>
</template>

<script>
export default {
    props: {
        activeDrawerIndex: {
            type: Number,
            default: null
        },
        drawerContent: {
            type: Object,
            default: {}
        },
        index: {
            type: Number,
            default: null
        }
    },
    emits: ['emitActiveDrawerIndex'],
    setup() {
        return {

        }
    },
    methods: {
        handleToggle() {
            console.log(`${this.$.vnode.key}`);
            this.$emit('emitActiveDrawerIndex', this.$.vnode.key)
        }
    },
    computed: {
        activeStyling() {
            return {
                "max-height": this.activeDrawerIndex == this.$.vnode.key ? "" : "0px"
            }
        }
    }
}
</script>

<style lang="scss" scoped>

.accordion {
    font-size: 2rem;
    font-family: $dot-gothic;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
  border-bottom: 1px solid white;
}

.accordion:hover {
    background-color: rgb(59, 108, 173);
    color: beige;
}

.panel {
    transition: max-height 0.25s ease;
    transition: height 0.25s ease;
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
}
.image-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        width: 100%;
        margin-bottom: 2rem;
}

}
p {
    font-size: 1.4rem;
    font-family: $libre-franklin;
    .image-caption {
        font-style: italic;
    }
}
</style>