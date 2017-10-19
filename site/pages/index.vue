<template>
  <div>

    <!-- heading -->
    <b-container class="my-5 py-5">
      <b-row align-h="center">
        <b-col cols="10">
          <h1 class="heading">Iris</h1>
        </b-col>
      </b-row>

      <!-- Team member names heading -->
      <b-row align-h="center" class="mt-4">
        <b-col cols="9">
          <h4>Meet the Team</h4>
        </b-col>
      </b-row>

      <!-- Team member names (alphabetical) -->
      <b-row align-h="center">
        <b-col cols="9">
          <ul>
            <li>Abe Gupta</li>
            <li>Ioana Sandor</li>
            <li>Justin Ho</li>
            <li>Lucy Huang</li>
            <li>Sammy Yoo</li>
          </ul>
        </b-col>
      </b-row>

      <!-- Blog Heading-->
      <b-row align-h="center" class="mt-4">
        <b-col cols="9">
          <h4>Blog</h4>
        </b-col>
      </b-row>

      <!-- Blogs -->
      <b-row align-h="center">
        <b-col cols="10">

          <!-- Blog Week 5-->
          <ul class="list-unstyled">
            <nuxt-link to="/blog/week5">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/storyboard/3.5.png" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 5 - Storyboard</h5>
                <p>The storyboard is a culmination of the script and concept art combined to visualize important shots. An animatic is also created to explain the plot at which the shot is showing as well as the mood of the story.</p>
              </b-media>
            </nuxt-link>

            <!-- Blog Week 4-->
            <nuxt-link to="/blog/week4">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/concept/Character Sheet Sketch Colored.jpg" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 4 - Character Concept</h5>
                <p>Iris is portrayed as an innocent girl with a cheerful appearance. These character traits are materialized into Iris' concept with puffy cheeks and petite figure. Inspiration is drawn from similar fairytales to enhance Iris' childish features.</p>
              </b-media>
            </nuxt-link>

            <!-- Blog Week 3-->
            <nuxt-link to="/blog/week3">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/ideation/over-the-garden-wall.jpg" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 3 - Environment Concept</h5>
                <p>The environment concepts are critical in order to convey the correct mood and setting to the audience. Iris will only have two different environments; the two environment concepts are starkly contrasted between a murky and gloomy setting to the dazzling cosmic radiance.</p>
              </b-media>
            </nuxt-link>

            <!-- Blog Week 2-->
            <nuxt-link to="/blog/week2">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/script-blank.png" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 2 - Script</h5>
                <p>The script takes the ideas of the inspirations further by refining the several key moments from the ideation phase. The transition between reality and fantasy, the supernatural cosmic explosions, as well as the peripeteia ending are the key visuals we want to create in the animation.</p>
              </b-media>
            </nuxt-link>

            <!-- Blog Week 1-->
            <nuxt-link to="/blog/week1">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/ideation/steven-universe-starry-sky.png" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 1 - Ideation</h5>
                <p>All good projects begin the creative process by researching background material as well as establishing a general direction to go in. This animation is founded upon the themes of celestial bodies and homonymic use of the word iris. From there we look for reference materials which we can use to create concept artwork.</p>
              </b-media>
            </nuxt-link>
          </ul>

          <!--<ul>
                <li>2017-09-27: updated script with quotes, long and short version</li>
                <li>2017-09-26: new concept art for characters and the setting</li>
                <li>2017-09-23: basic script outline</li>
              </ul>-->
              
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default {
  layouts: 'default'
}
</script>

<style lang="scss">
.blog {
  border-radius:1em;
  &:hover {
    background-color:rgba(255, 193, 159, 0.5);
  }
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0 1em;
}

.heading {
  font-family: 'League Script', cursive;
  font-size: 10rem;
}
</style>
