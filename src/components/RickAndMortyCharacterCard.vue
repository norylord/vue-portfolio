<template>
  <div v-if="character.hasOwnProperty('name')" class="card">
    <img :src=character.image alt="">
    <div class="card__info">
      <div class="card__info__section">
        <h1 class="card__info__name">{{ character.name }}</h1>
        <div class="card__info__status">
          <div :class="[this.character.status === 'Alive' ? 'alive' : 'dead','status__icon']"></div>
          {{ character.status }} - {{ character.species }}
        </div>
      </div>
      <div class="card__info__section">
        <p>Последняя локация:</p>
        <div class="card__info__data">{{ character.location.name }}</div>
      </div>
      <div class="card__info__section">
        <p>Первое появление:</p>
        <div class="card__info__data">{{ locationName }}</div>
      </div>

    </div>
  </div>
</template>

<script>
import RequestService from "@/services/RequestService";

export default {
  data() {
    return {
      locationName: '',
      character: {}
    }
  },
  props: {},

  methods: {
    async getRandRickAndMortyCharacter() {
      let randId = Math.floor(Math.random() * 100)
      const res = await RequestService.RickAndMortyRandCharacter(randId)
      this.character = res.data
    }
  },
  mounted() {
    this.getRandRickAndMortyCharacter()
  }
}
</script>

<style lang="sass" scoped>
.card
  display: flex
  flex-flow: column nowrap
  background: linear-gradient(to right bottom, #212121, #103f2e, #212121)

  color: #eee
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5)
  border-radius: 20px
  text-align: start
  word-break: break-word
  margin: 20px 10px
  transition: all 0.2s linear

  &:hover
    transform: scale(1.02)
    transition: all 0.2s linear
    box-shadow: 0 0 50px rgba(193, 244, 113, 0.5)

  .status__icon
    height: 15px
    width: 15px
    margin-right: 5px
    border-radius: 50%

  .alive
    background: rgb(85, 204, 68)

  .dead
    background: rgb(214, 61, 46)

  &__info
    padding: 15px 20px
    width: 300px
    display: flex
    flex-flow: column nowrap
    justify-content: space-around

    label
      color: rgba(115, 118, 128, 0.95)

    &__name
      cursor: pointer
      font-size: 25px
      margin-bottom: 10px

      &:hover
        color: #42b983

    &__status
      display: flex
      align-items: center

    &__data
      font-size: 20px

  img
    width: 300px
    height: 300px
    border-radius: 20px 20px 0 0

@media (min-width: 630px)
  .card
    flex-flow: row nowrap


    img
      border-radius: 20px 0 0 20px

@media (min-width: 768px)
  .card
    flex-flow: row nowrap


    img
      border-radius: 20px 0 0 20px

@media (min-width: 1200px)
  .card
    flex-flow: row nowrap


    img
      border-radius: 20px 0 0 20px
</style>