<template>
    <div id="work" class="work-section-container">
        <button class="accordion">Dublab (Bean.la)</button>
            <div class="panel">
            <p>Lorem ipsum...</p>
            </div>

        <button class="accordion">Jaja Tequila (Bean.la)</button>
            <div class="panel">
            <p>Lorem ipsum...</p>
            </div>

        <button class="accordion">s94 Design (Bean.la)</button>
            <div class="panel">
            <p>Lorem ipsum...</p>
            </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.work-section-container {
}
/* Style the buttons that are used to open and close the accordion panel */
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
  display: none;
  overflow: hidden;
}

</style>