<template>
  <nav-bar/>
  <router-view v-slot="{ Component }">
    <component :is="Component"/>
  </router-view>
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
  font-family: 'Open Sans', sans-serif
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
  position: relative

.container
  max-width: 1140px
  min-width: 70vw
  min-height: 60vh
  margin: 50px auto
  background: #fff
  display: flex
  justify-content: center
  flex-direction: column
  align-items: center
  text-align: center
  padding: 50px
  position: relative


  h1
    border-bottom: 2px solid #5051f9
    min-width: 30vh
    padding-bottom: 50px

  .circle__img
    position: absolute
    z-index: -1
    animation: inf-rotate infinite 30s linear
    top: -30vh
    right: 0
    left: 0

.wrapper
  -ms-overflow-style: none
  height: 100vh
  overflow-y: auto
  scroll-snap-type: y mandatory
  position: relative
  /* IE and Edge */
  animation: fade ease-in-out 0.5s


  &::-webkit-scrollbar
    display: none

@keyframes fade
  0%
    left: .3%
    opacity: 0
  100%
    left: 0
    opacity: 1
</style>