<template>

  <div class="toDoItem"
       @click="toggle = !toggle"
  >
    <div class="title__container">
        <input type='checkbox' value={value} id={id} name={name} onChange={onChange}/>
      <h2 :class="['toDoItem__title', item.complete ? 'completed' : null]">{{ item.title }}</h2>
    </div>

    <div class="btn__container">
<!--      <button v-if="item.complete === true" class="btn unsuccess" @click.stop="toggleCompleteItem(item.id)">-->
<!--        Невыполнено-->
<!--      </button>-->
<!--      <button v-if="item.complete === false" class="btn success" @click.stop="toggleCompleteItem(item.id)">-->
<!--        Выполнено-->
<!--      </button>-->

      <button class="btn delete" @click.stop="removeItem(item.id)">Remove</button>
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
  width: 80%
  padding: 20px 40px
  border-radius: 100px
  margin: 15px 0
  background: rgba(29, 41, 57, 0.05)
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

  .unsuccess
    background: cornflowerblue
    color: #eee

.title__container
  display: flex
  align-items: center

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