<template>
  <input :value="modelValue" class="input" type="text" @input='updateInput'>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  },
}
</script>

<style lang="sass" scoped>
.input
  padding: 10px 40px
  margin: 20px 0
  outline: none
  border: 0
  text-align: center
  font-weight: 300
  background: #1D2939
  border-radius: 100px
  color: #eee
  font-size: 20px

  &::placeholder
    color: rgba(238, 238, 238, 0.72)


  &:focus
    transition: border-bottom-color 0.3s ease-in-out
</style>