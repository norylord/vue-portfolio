<template>
  <div class="navbar">
    <div class="navbar__logo__section">
      <h1>Norylord</h1>
    </div>
    <div class="navbar__items__section">
      <div class="navbar__item">Главная</div>
      <div class="navbar__item">Проекты</div>
      <div class="navbar__item">GitHub</div>
      <div class="navbar__item">Telegram</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.navbar
  background: #eee
  display: flex
  position: fixed
  width: 100%

  &__logo__section
    flex: 1 0 20%
    display: flex
    justify-content: center
    align-items: center

  &__items__section
    flex: 1 0 50%
    display: flex
    justify-content: center

  &__item
    font-weight: 600
    display: flex
    padding: 20px
    align-items: center
    justify-content: center
    flex-basis: 20%
    position: relative
    border: none

    &:after
      content: ''
      position: absolute
      width: 0
      height: 5px
      left: 50%
      bottom: 0
      background-color: #5051f9
      transition: all ease-in-out .2s

    &:hover
      cursor: pointer
      &:after
        width: 100%
        left: 0
</style>