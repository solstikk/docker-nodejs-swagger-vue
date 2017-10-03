<template>
  <message>{{ message }}</message>
</template>

<script>
import Message from './components/Message.vue';
export default {
  components: { Message },
  data () {
    return {
      message: "Hello!"
    }
  }
}
</script>

<style>
</style>
