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
  }
}
</script>

<style lang="sass" scoped>
.project__section
  display: flex
  min-height: 500px
  justify-content: center
  flex-direction: row
  flex-wrap: wrap

  .half__section

    flex: 1 0 50%
    min-width: 500px
    display: flex
    flex-direction: column
    justify-content: space-around
    align-items: center

    border-bottom: 1px solid lightgray
    text-align: center
    padding: 60px

    h1
      font-weight: bold
      padding: 20px
      border-bottom: 2px solid #42b983


</style>
