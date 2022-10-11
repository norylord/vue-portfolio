<template>
  <div class="RIO_card">
    <img :src="character.thumbnail_url" alt="" style="height: 200px">
    <div class="char_desc">
      <h1>{{ character.name }}</h1>
      <h2>Раса: {{ character.race }}</h2>
      <h2>Класс: {{ character.class }}</h2>
      <h3>Специализация: {{ character.active_spec_name }}</h3>
      <h3>Мир: {{ character.realm }}</h3>
    </div>
  </div>
</template>

<script>
import RequestService from "@/services/RequestService";

export default {
  data() {
    return {
      character: {}
    }
  },
  methods: {
    async getCharacter() {
      const res = await RequestService.RaiderIOCharacter()
      this.character = res.data
      console.log(this.character)
    }
  },
  mounted() {
    this.getCharacter()
  }
}
</script>

<style lang="sass" scoped>
.RIO_card
  display: flex
  justify-content: space-around
  align-items: center
  padding: 20px
  width: 600px
  height: 300px
  color: #eee
  background: linear-gradient(to right top, #454545, #680c0c, #454545FF)
  border-radius: 15px

  img
    border-radius: 50%

  .char_desc
    display: flex
    flex-direction: column
    justify-content: space-around
    margin: 20px
</style>