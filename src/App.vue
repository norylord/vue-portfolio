<template>
  <nav-bar/>
  <section class="home__img__section">
    <div class="container">

    </div>
  </section>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Roboto Thin', sans-serif

.container
  max-width: 1140px
  margin: 0 auto
  background: #eee
</style>