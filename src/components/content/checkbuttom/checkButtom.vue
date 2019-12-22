<template>
  <div class="check-buttom" :class="{checked: isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name: 'CheckButtom',
    props: {
        isChecked: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
.check-buttom{
    border-radius: 50%;
    border: 2px solid #aaa;
}
.checked{
    background-color: red;
    border-color: red
}
</style>