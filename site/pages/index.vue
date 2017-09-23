<template>
  <div>
    <div class="background"/>

    <b-container class="mt-5 pt-5 pb-5 main">
      <b-row align-h="center">
        <b-col cols="10">
          <h1>Iris</h1>
        </b-col>
      </b-row>

      <b-row align-h="center">
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

    </b-container>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data () {
    return {
      title: 'Iris'
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>

<style>
body {
  font-family: 'Raleway', sans-serif;
}

.main {
  color: white;
  background-color: rgba(225, 225, 225, 0.3);
  border-radius: 1rem;
  
}

h1 {
  font-family: 'Satisfy', cursive;
}

.background {
  background: #270f36; /* Old browsers */
background: -moz-linear-gradient(top, #270f36 0%, #642b6b 27%, #c86b98 67%, #f09f9c 80%, #ffc19f 92%, #fd9d7f 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top, #270f36 0%,#642b6b 27%,#c86b98 67%,#f09f9c 80%,#ffc19f 92%,#fd9d7f 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom, #270f36 0%,#642b6b 27%,#c86b98 67%,#f09f9c 80%,#ffc19f 92%,#fd9d7f 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#270f36', endColorstr='#fd9d7f',GradientType=0 ); /* IE6-9 */

position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
overflow: hidden;
z-index:-1;
}
</style>
