<template>
  <div class="home row">
    <Painel class="d-none d-md-block col-md-4 bg-primary"/>
    <Chat class="col-12 col-md-8 bg-secondary"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Painel from '@/components/Painel.vue'
import Chat from '@/components/Chat.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Painel,
    Chat
  }
}
</script>

<style>
.home {
  height: 100vh;
}

body {
  overflow: hidden !important;
}
</style>
