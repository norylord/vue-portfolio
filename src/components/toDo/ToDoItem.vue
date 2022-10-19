<template>

  <div class="toDoItem"

  >
    <div class="title__container">
      <button :class="[item.complete ? 'completed' : null, 'btn_complete']" @click="toggleCompleteItem(item.id)">
        <img v-if="item.complete " alt="" src="@/assets/check.png" style="width: 23px; height: 23px">
      </button>
      <h2 :class="['toDoItem__title']" :style="item.complete  ? 'text-decoration: line-through' : null">{{
          item.title
        }}</h2>
    </div>

    <div class="btn__container">
      <!--      <button v-if="item.complete === true" class="btn unsuccess" @click.stop="toggleCompleteItem(item.id)">-->
      <!--        Невыполнено-->
      <!--      </button>-->
      <!--      <button v-if="item.complete === false" class="btn success" @click.stop="toggleCompleteItem(item.id)">-->
      <!--        Выполнено-->
      <!--      </button>-->

      <button class="btn delete" @click.stop="removeItem(item.id)">Удалить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    removeItem: {
      type: Function
    },
    completeItem: {
      type: Function
    }
  },
  data() {
    return {
      toggle: false,
    }
  },
  methods: {
    toggleCompleteItem(id) {
      this.completeItem(id)
      this.toggle = false
    }
  }
}
</script>

<style lang="sass" scoped>
.toDoItem
  display: flex
  justify-content: space-between
  text-align: center
  position: relative
  flex-flow: row wrap
  width: 95%
  padding: 5px 10px
  border-radius: 10px
  margin: 5px
  background: rgba(29, 41, 57, 0.1)
  cursor: pointer


  &__title
    display: flex
    justify-content: center
    align-items: center
    word-break: break-word
    position: relative
    padding: 0 10px
    font-weight: 300

  .completed
    text-decoration: line-through

  .btn
    border: none
    justify-content: center
    align-items: center
    padding: 5px 25px
    flex: 0 0 auto
    cursor: pointer
    margin: 10px
    border-radius: 100px

  .success
    background: #42b983
    color: #eee

  .delete
    color: #eee
    background: #1D2939
    letter-spacing: 0.5px
    transition: .3s ease-in-out all

    &:hover
      transition: .3s ease-in-out all
      background: #740b0b

  .unsuccess
    background: cornflowerblue
    color: #eee

.title__container
  display: flex
  align-items: center

.btn_complete
  width: 30px
  height: 30px
  border-radius: 50%
  background: transparent
  transition: .3s all
  margin: 10px
  border: 0.1px solid #1D2939

.completed
  transition: .3s all
  background: #1D2939

input[type='checkbox']
  margin: 0 10px
  width: 25px
  background: rgba(29, 41, 57, 0.1)
  border-radius: 50%
  height: 25px

  &:checked
    accent-color: #1D2939

  &:checked + h2
    text-decoration: line-through


</style>