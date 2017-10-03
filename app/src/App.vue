<template>
  <message>{{ message }}</message>
</template>

<script>
import Message from './components/Message.vue';
import axios from 'axios';

export default {
  components: { Message },
  data() {
    return {
      message: ""
    }
  },
  mounted() {
    axios.get('/echo/v1?message=Hello!').then(
      response => this.message = response.data.message
    )
  }
}
</script>

<style>
</style>
