<template>
        <button @click="handleToggle" class="accordion">{{ drawerContent.title }}</button>
            <div class="panel">
            <p>{{ drawerContent.description }}</p>
            <p>{{ `${activeDrawerIndex}` }}</p>
            </div>
</template>

<script>
export default {
    props: {
        activeDrawerIndex:  {
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
    setup () {
        return {}
    }, 
    methods: {
        handleToggle() {
            console.log(`${this.$.vnode.key}`);
            this.$emit('emitActiveDrawerIndex', this.$.vnode.key)
    }
    }, 
    computed: {
        isActive() {
            return Boolean(activeDrawerIndex)
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

/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
.accordion:hover {
    background-color: rgb(59, 108, 173);
    color: beige;
}

/* Style the accordion panel. Note: hidden by default */
.panel {
  padding: 0 18px;
  background-color: white;
  overflow: hidden;
}
</style>