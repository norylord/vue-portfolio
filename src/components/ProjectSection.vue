<template>
  <section class="project__section">
    <div v-if="projectKey % 2 === 0" class="half__section">
      <slot></slot>
    </div>
    <div class="half__section">
      <div class="desc">
        <h1 class="desc__title">{{ name }}</h1>
        <h3 class="desc__shortDesc">{{ shortDesc }}</h3>
        <h4 class="desc__desc">{{ desc }}</h4>
      </div>
    </div>


    <div v-if="projectKey % 2 === 1" class="half__section">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projectKey: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    framework: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      required: true
    },
    shortDesc: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    bgDescColor: {
      type: String,
    }
  }
}
</script>

<style lang="sass" scoped>
@import "@/styles/backgrounds.sass"
.project__section
  display: flex
  justify-content: center
  flex-direction: row
  flex-wrap: wrap
  height: 100vh
  background: rgba(165, 171, 154, 0)
  backdrop-filter: blur(5px)
  //linear-gradient(to right bottom, rgba(33, 33, 33, 0.8), rgba(16, 63, 46, 0.8), rgba(33, 33, 33, 0.8))
  color: #eee
  border-radius: 15px

  text-align: center

  .half__section
    height: 100vh
    flex: 1 0 45vh
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    .section__info
      background: #1D2939
      display: flex
      flex: 1 0 45vh

      flex-direction: column
      justify-content: space-around
      align-items: center
      box-shadow: 0 0 20px #2a2a2a
      padding: 40px

    .desc
      background: rgba(30, 39, 47, 0.9)
      height: 100vh
      padding: 20px
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column

      &__title
        font-size: 4vw
        margin: 0
        font-weight: bold
        padding: 20px
        border-bottom: 5px solid transparent
        border-image: linear-gradient(0.25turn, rgba(255, 249, 34, 0), rgb(249, 145, 80), rgba(56, 2, 155, 0))
        border-image-slice: 1

      &__shortDesc
        font-size: 30px
        margin: 20px

      &__desc
        font-size: 25px
</style>
