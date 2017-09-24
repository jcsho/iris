<template>
  <div>

    <b-container class="mt-5 pt-5 pb-5 main">
      <b-row align-h="center">
        <b-col cols="10">
          <h1>Iris</h1>
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
          <h4>Updates</h4>
        </b-col>
      </b-row>

      <b-row align-h="center">
        <b-col cols="8">
          <ul>
            <li>2017-09-23: basic script outline</li>
          </ul>
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

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0 1em;
}
.main {
  color: white;
  background-color: rgba(225, 225, 225, 0.3);
  border-radius: 1rem; 
}
</style>
