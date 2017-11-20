<template>
    <div>

    <b-navbar toggleable="md" type="dark">

      <b-navbar-brand class="ml-3">IAT 343</b-navbar-brand>

      <!--hamburger menu-->
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <!--navigation tabs-->
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item to="/" exact>Home</b-nav-item>
          <b-nav-item to="/script">Script</b-nav-item>
          <b-nav-item to="/concept">Concepts</b-nav-item>
          <b-nav-item to="/storyboard">Storyboard</b-nav-item>
          <b-nav-item to="/animatic">Animatic</b-nav-item>
          <b-nav-item to="/final" disabled>Final</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>

  <div class="background">
    <nuxt/>
  </div>

  </div>
</template>

<style>
.background {
  background: #270f36;
  /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #270f36 0%,
    #642b6b 27%,
    #c86b98 67%,
    #f09f9c 80%,
    #ffc19f 92%,
    #fd9d7f 100%
  );
  /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #270f36 0%,
    #642b6b 27%,
    #c86b98 67%,
    #f09f9c 80%,
    #ffc19f 92%,
    #fd9d7f 100%
  );
  /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #270f36 0%,
    #642b6b 27%,
    #c86b98 67%,
    #f09f9c 80%,
    #ffc19f 92%,
    #fd9d7f 100%
  );
  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#270f36",
      endColorstr="#fd9d7f",
      GradientType=0
    );
  /* IE6-9 */
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
