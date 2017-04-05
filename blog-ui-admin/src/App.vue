<template>
  <div id="app">
    <router-view
        transition="fade"
        transition-mode="out-in">

    </router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  .fade-transition{
      opacity: 0.2;
  }

  .fade-enter, .fade-leave{
      opacity: 0;
  }
</style>
