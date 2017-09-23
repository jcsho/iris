<template>
  <div>
    <b-navbar toggleable="md" type="dark">

      <b-navbar-brand class="ml-3">IAT 343</b-navbar-brand>

      <!--hamburger menu-->
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <!--navigation tabs-->
      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/script">Script</b-nav-item>
          <b-nav-item to="/concept">Concepts</b-nav-item>
          <b-nav-item to="/storyboard" disabled>Storyboard</b-nav-item>
          <b-nav-item to="/animatic" disabled>Animatic</b-nav-item>
          <b-nav-item to="/final" disabled>Final</b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>

    <div>
      <nuxt/>
    </div>
  </div>
</template>

<style>

</style>
