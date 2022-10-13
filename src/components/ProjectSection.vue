<template>
  <section class="project__section">
    <div v-if="projectKey % 2 === 0" class="half__section">
      <slot></slot>
    </div>
    <div class="half__section">

        <h1>{{ name }}</h1>
        <h3>{{ shortDesc }}</h3>
        <h4>{{ desc }}</h4>
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
  height: 70vh
  padding: 20px
  background: linear-gradient(to right bottom, rgba(33, 33, 33, 0.8), rgba(16, 63, 46, 0.8), rgba(33, 33, 33, 0.8))
  margin: 0 5vw
  color: #eee
  border-radius: 15px

  text-align: center


  h1
    font-size: 4vw
    font-weight: bold
    padding: 20px
    border-bottom: 2px solid #42b983

  .half__section

    flex: 1 0 45vh
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center
    padding: 20px

    .section__info
      display: flex
      flex: 1 0 45vh
      flex-direction: column
      justify-content: space-around
      align-items: center
      box-shadow: 0 0 20px #2a2a2a
      padding: 40px
</style>
