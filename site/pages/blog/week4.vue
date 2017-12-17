<template>
    <b-container class="mt-5 mb-5 pt-5 pb-5">
        <b-row align-h="center" class="my-4">
            <b-col xl="10">
                <!-- <b-button to="/">Back</b-button>-->
                <!-- <b-breadcrumb :items="items" /> -->
            </b-col>
        </b-row>
        
        <b-row align-h="center" class="my-3">
            <b-col xl="10">
                <h1>Week 4 - Character Design</h1>
            </b-col>
        </b-row>

        <b-row align-h="center" class="my-3">
            <b-col xl="9">
                <h2>Iris</h2>
            </b-col>
        </b-row>

        <b-row align-h="center">
            <b-col xl="8">
                <figure>
                    <b-img src="/img/ideation/frozen-young-anna.png" 
                        alt="Character concept inspiration" 
                        fluid 
                        v-b-tooltip.hover title="Character inspiration"
                        />
                    <figcaption>Figure 1 - Young Anna from Frozen(2013), Disney</figcaption>
                </figure>
            </b-col>
        </b-row>

        <b-row align-h="center" class="my-3">
            <b-col xl="8">
                <p>
                    For the character design, we wanted to create a curious little girl with lots of energy. Images of Anna from Frozen immediately came to our minds. Curious and happy like our character, we took a lot of inspiration from her. Elements like her big eyes, button nose, and short pigtails are seen within our own design. However, since our character is older than the young Anna, her cheeks are less full and her body proportions are more spread out. Another inspiration for the character was Grace Vanderwaal. The young singer has a petite and lanky frame which was used as reference for our character’s. Due to the character’s young age, her body shape is quite thin and child-like. The inspiration for the character’s clothes came from wanting to show a femininity to our character but also enabling her to run and play freely; therefore, a delicate peter pan collared shirt was paired with loose jean shorts and sneakers.
                </p>
            </b-col>
        </b-row>

        <b-row align-h="center">
            <b-col xl="8">
                <figure>
                    <b-img src="/img/concept/Character Sheet Sketch Colored.jpg" 
                        alt="Character Sketches Colored" 
                        fluid 
                        v-b-tooltip.hover title="Character Sketches Colored"
                        />
                    <figcaption>Figure 2 - Character Sketch Colored</figcaption>
                </figure>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
export default {
  layout: 'navbar',

  data: function () {
    return {
      items: [{
        text: 'Home',
        href: '/'
      }, {
        text: 'Week 4',
        active: true
      }]
    }
  }
}
</script>

<style>

</style>
