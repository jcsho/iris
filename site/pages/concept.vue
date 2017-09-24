<template>

  <div>
    <b-container class="mt-5 mb-5 pt-5 pb-5 concept">

      <b-row align-h="center">
        <b-col cols="10">
          <h2>Character Concept</h2>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mt-5">
        <b-col cols="9">
          <h3>Main Character</h3>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mt-2">
        <b-col cols="9">
          <b-img src="/Character Sketch - Lightroom edit.jpg" alt="Character concept art 1" fluid v-b-tooltip.hover.bottom title="Main Character Concept - Ioana"/>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mt-2">
        <b-col cols="9">
          <p>The main character</p>
        </b-col>
      </b-row>

    </b-container>
  </div>

</template>

<script>
export default {
  layout: 'default'
}
</script>

<style>
.concept {
  color: white;
  background-color: rgba(225, 225, 225, 0.3);
  border-radius: 1rem; 
}

</style>
