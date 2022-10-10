<template>
  <div class="wrapper">
    <section className="home__img__section">
      <div className="container">
        <h1>Привет!</h1>
        <h2 class="test">проекты<span>.JS</span></h2>
        <p>Добро пожаловать на мой сайт-портфолио!</p>
      </div>
    </section>
    <section className="home__img__section">
      <div class="container" data-aos="fade-in" data-aos-duration="1500">
        <h1>Настоящий мастер - это вечный ученик</h1>
        <h2>Мастер Йи</h2>
        <p>Именно эта фраза постоянно напоминает мне о том, что нет предела совершеству</p>
        <img alt="" class="circle__img" src=".././assets/circle.png" style="width: 40vh; height: 40vh">
      </div>
    </section>
    <section className="home__img__section">
      <div class="container" data-aos="fade-in" data-aos-duration="1500">
        <h1>Заголовок</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci blanditiis culpa cum dignissimos eaque
          hic libero modi nam nostrum officiis quod rerum ullam, ut vero voluptas voluptatibus. Error, molestias!</p>


      </div>
    </section>
    <section className="home__img__section">
      <div class="container bordered" data-aos="fade-in" data-aos-duration="1500">
        <h1>Заголовок</h1>
        <img id="first_hex" alt="" class="hexagon__img " src=".././assets/hexa1.png" style="height: 25vh">
        <img id="second_hex" alt="" class="hexagon__img " src=".././assets/hexa1.png" style="height: 25vh">
        <img id="third_hex" alt="" class="hexagon__img " src=".././assets/hexa1.png" style="height: 25vh">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci blanditiis culpa cum dignissimos eaque
          hic libero modi nam nostrum officiis quod rerum ullam, ut vero voluptas voluptatibus. Error, molestias!</p>

      </div>
    </section>
    <section className="home__img__section">
      <div class="container" data-aos="fade-in" data-aos-duration="1500">
        <h1>Заголовок</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci blanditiis culpa cum dignissimos eaque
          hic libero modi nam nostrum officiis quod rerum ullam, ut vero voluptas voluptatibus. Error, molestias!</p>
      </div>
    </section>
  </div>


</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'


export default {
  methods: {
    initAOS() {
      AOS.init()
    }
  },
  mounted() {
    this.initAOS()
  }


}
</script>

<style lang="sass" scoped>
.test
  font-size: 80px
  font-family: 'Roboto', sans-serif
  font-weight: bold
  background: linear-gradient(to right top, #00eaff, #f398ff, #00eaff)
  background-size: cover
  color: #fff
  -webkit-text-fill-color: transparent
  -webkit-background-clip: text
  -moz-background-clip: text

  span
    background-size: cover
    font-family: 'Roboto', sans-serif
    font-weight: 800
    color: #fff
    -webkit-text-fill-color: transparent
    -webkit-background-clip: text
    -moz-background-clip: text
    background-image: url(".././assets/water.jpg")

.wrapper
  height: 100vh
  -ms-overflow-style: none
  /* IE and Edge */
  scrollbar-width: none

  &::-webkit-scrollbar
    display: none

//scroll-snap-type: y mandatory
//scroll-behavior: auto
//scroll-snap-stop: always

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

.bordered
  border: 10px solid transparent
  border-image: linear-gradient(to left top, #5051f9 20%, #00f7ff 30%, transparent 50%)
  border-image-slice: 1

.triangles__img
  position: absolute
  top: 0
  left: 0

.first_hex:hover #second_hex
  transform: rotate(- 180deg)


.first_hex:hover
  transform: rotate(- 180deg)

.second_hex:hover
  .container .hexagon__img
    transform: rotate(- 180deg)

.second_hex:hover
  transform: rotate(- 180deg)

.third_hex:hover ~ .hexagon__img
  transform: rotate(- 180deg)

.third_hex:hover
  transform: rotate(- 180deg)

.hexagon__img
  position: absolute
  z-index: -1
  top: 0
  right: 100px
  transition: all 1s ease-out

  &:hover
    transition: all 1s ease-out
    transform: rotate(180deg)

  &:nth-child(2)
    top: -30vh
    left: 0

  &:nth-child(3)
    top: -7vh
    left: 0

  &:nth-child(4)
    top: -18.5vh
    left: 20vh


.home__img__section
  min-height: 90vh
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  background-position: center
  background-repeat: no-repeat
  background-attachment: fixed
  animation: imagebulger 30s infinite ease-in-out
  scroll-snap-align: start

  h1
    font-size: 40px
    margin-bottom: 20px

  p
    font-size: 25px

.home__img__section
  &:nth-child(1)
    background-image: url(".././assets/Holo Texture 03.png")

  &:nth-child(3)
    background-image: url(".././assets/Holo Texture 08.png")

  &:nth-child(5)
    background-image: url(".././assets/Holo Texture 10.png")


@keyframes imagebulger
  0%, 100%
    background-size: 100% auto
    -webkit-background-size: 100%

  50%
    background-size: 150% auto
    -webkit-background-size: 150%

@keyframes inf-rotate
  0%
    transform: rotate(0)
  100%
    transform: rotate(180deg)

@keyframes move
  0%
    width: 3vw
  50%
    width: 75vw
  100%
    width: 3vw
</style>