<template>
  <nav-bar/>
  <router-view v-slot="{ Component }">
    <transition name="slide-fade">
      <component :is="Component"/>
    </transition>
  </router-view>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {NavBar}


}
</script>

<style lang="sass">
@import "styles/Normalize.css"
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Roboto Thin', sans-serif
  text-decoration: none

body::-webkit-scrollbar
  display: none

.slide-fade-enter-active
  transition: all .3s linear

.slide-fade-leave-active
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.slide-fade-enter, .slide-fade-leave-to
  transition: all .3s
  transform: translateX(10px)
  opacity: 0

footer
  height: 100px
  background: #212121
  margin: auto
  font-size: 30px
  color: #eee
  align-items: center
  justify-content: center
  display: flex

</style>