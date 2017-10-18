<template>
  <div>

    <b-container class="my-5 py-5">
      <b-row align-h="center">
        <b-col cols="10">
          <h1 class="heading">Iris</h1>
        </b-col>
      </b-row>

      <b-row align-h="center" class="mt-4">
        <b-col cols="9">
          <h4>Meet the Team</h4>
        </b-col>
      </b-row>

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

      <b-row align-h="center" class="mt-4">
        <b-col cols="9">
          <h4>Blog</h4>
        </b-col>
      </b-row>

      <b-row align-h="center">
        <b-col cols="10">

          <ul class="list-unstyled">
            <nuxt-link to="/blog/week5">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/storyboard/3.5.png" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 5 - Storyboard</h5>
                <p>The storyboard </p>
              </b-media>
            </nuxt-link>

            <nuxt-link to="/blog/week4">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/concept/Character Sheet Sketch Colored.jpg" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 4 - Character Design</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, lacus et vehicula eleifend, nulla nunc malesuada ligula, id aliquam augue erat at elit. Mauris augue nisl, egestas in nunc vitae, eleifend vulputate eros. Curabitur at mauris interdum, molestie quam in, cursus velit.</p>
              </b-media>
            </nuxt-link>

            <nuxt-link to="/blog/week3">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/ideation/over-the-garden-wall.jpg" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 3 - Environment Design</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, lacus et vehicula eleifend, nulla nunc malesuada ligula, id aliquam augue erat at elit. Mauris augue nisl, egestas in nunc vitae, eleifend vulputate eros. Curabitur at mauris interdum, molestie quam in, cursus velit.</p>
              </b-media>
            </nuxt-link>

            <nuxt-link to="/blog/week2">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/script-blank.png" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 2 - Script</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, lacus et vehicula eleifend, nulla nunc malesuada ligula, id aliquam augue erat at elit. Mauris augue nisl, egestas in nunc vitae, eleifend vulputate eros. Curabitur at mauris interdum, molestie quam in, cursus velit.</p>
              </b-media>
            </nuxt-link>

            <nuxt-link to="/blog/week1">
              <b-media tag="li" class="px-5 pt-4 pb-4 blog">
                <b-img slot="aside" src="/img/ideation/steven-universe-starry-sky.png" width="240" height="150" />
                <h5 class="mt-0 mb-1">Week 1 - Ideation</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt, lacus et vehicula eleifend, nulla nunc malesuada ligula, id aliquam augue erat at elit. Mauris augue nisl, egestas in nunc vitae, eleifend vulputate eros. Curabitur at mauris interdum, molestie quam in, cursus velit.</p>
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
