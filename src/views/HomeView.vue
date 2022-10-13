<template>
  <div class="wrapper">
    <section className="home__img__section">
      <div className="container">
        <h1>Привет!</h1>

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
        <img id="first_hex" alt="" class="hexagon__img " src=".././assets/1.png">
        <img id="second_hex" alt="" class="hexagon__img " src=".././assets/2.png">
        <img id="third_hex" alt="" class="hexagon__img " src=".././assets/3.png">
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
    //this.initAOS()
  }


}
</script>

<style lang="sass" scoped>


.bordered
  border: 10px solid transparent
  border-image: linear-gradient(to left top, #5051f9 20%, #00f7ff 30%, transparent 50%)
  border-image-slice: 1


.hexagon__img
  position: absolute
  height: 30vh
  top: 0

  &:nth-child(2)
    top: -20vh
    left: 0

  &:nth-child(3)
    top: 2.6vh
    left: 13vh

  &:nth-child(4)
    top: -20vh
    left: 26vh


.home__img__section
  min-height: 100vh
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