<template>
  <nav-bar/>
  <div id="fullpage">
    <section class="home__img__section">
      <div  class="container">
        <h1>Заголовок</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci blanditiis culpa cum dignissimos eaque hic libero modi nam nostrum officiis quod rerum ullam, ut vero voluptas voluptatibus. Error, molestias!</p>
      </div>
    </section>
    <section class="home__img__section">
      <div  class="container">
        <h1>Заголовок</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci blanditiis culpa cum dignissimos eaque hic libero modi nam nostrum officiis quod rerum ullam, ut vero voluptas voluptatibus. Error, molestias!</p>
      </div>
    </section>
    <section class="home__img__section">
      <div   class="container">
        <h1>Заголовок</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci blanditiis culpa cum dignissimos eaque hic libero modi nam nostrum officiis quod rerum ullam, ut vero voluptas voluptatibus. Error, molestias!</p>

      </div>
    </section>
    <section class="home__img__section">
      <div class="container">
        <h1>Заголовок</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci blanditiis culpa cum dignissimos eaque hic libero modi nam nostrum officiis quod rerum ullam, ut vero voluptas voluptatibus. Error, molestias!</p>

      </div>
    </section>
    <section class="home__img__section">
      <div class="container">
        <h1>Заголовок</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci blanditiis culpa cum dignissimos eaque hic libero modi nam nostrum officiis quod rerum ullam, ut vero voluptas voluptatibus. Error, molestias!</p>

      </div>
    </section>
  </div>


</template>

<script>
import NavBar from "@/components/NavBar";



export default {
  components: {NavBar},
  methods: {
  },


}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Roboto Thin', sans-serif

.wrapper
  width: 100vw
  height: 100vh
  scroll-snap-type: y mandatory
  scroll-snap-stop: always
  scroll-behavior: smooth
  overflow-y: auto

.container
  max-width: 1140px
  height: 600px
  margin: 50px auto
  background: rgb(255, 255, 255)
  display: flex
  justify-content: space-around
  flex-direction: column
  align-items: center
  text-align: center
  padding: 50px
  background-size: 100%

.home__img__section
  min-height: 110vh
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  text-align: center
  background-position: center
  background-repeat: no-repeat
  background-attachment: fixed
  background-size: cover
  animation: imagebulger 200s infinite
  scroll-snap-align: center
  flex-shrink: 0


  h1
    font-size: 50px
    padding: 50px
    margin-bottom: 20px
  p
    font-size: 35px
.home__img__section
  &:nth-child(1)
    background-image: url("./assets/Holo Texture 03.png")
  &:nth-child(3)
    background-image: url("./assets/Holo Texture 08.png")
  &:nth-child(5)
    background-image: url("./assets/Holo Texture 10.png")


@keyframes imagebulger
  0%, 100%
    background-size: 100% auto
    -webkit-background-size: 100%

  50%
    background-size: 150% auto
    -webkit-background-size: 150%



.footer
  height: 200px
  background: #212121
</style>