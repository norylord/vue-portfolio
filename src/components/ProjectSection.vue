<template>
  <section class="project__section">
    <div v-if="projectKey % 2 === 0" class="half__section">
      <slot></slot>
    </div>
    <div class="half__section">
      <div class="section__info">
        <h1>{{ name }}</h1>
        <h3>{{ shortDesc }}</h3>
        <h4>{{ desc }}</h4>
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
  }
}
</script>

<style lang="sass" scoped>
.project__section
  display: flex
  justify-content: center
  flex-direction: row
  flex-wrap: wrap
  padding: 20px

  .half__section

    flex: 1 0 45vh
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center

    .section__info
      display: flex
      flex: 1 0 45vh
      min-width: 500px
      flex-direction: column
      justify-content: space-around
      align-items: center
      background: rgba(255, 255, 255, 0.9)
      box-shadow: 0 0 20px #2a2a2a
      padding: 40px

    text-align: center
    padding: 20px

    h1
      font-weight: bold
      padding: 20px
      border-bottom: 2px solid #42b983


</style>
