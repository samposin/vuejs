<template>
    <div class="container">
        <h1>Home</h1>
        <p>Home Description</p>
        {{config}}
    </div>
</template>

<script>

export default {
  //name: 'app',
  data () {
    return {
      title: 'Vue.js Demo Form'
    }
  },
  props:["config"],
  components: {
    //appForm: Form
  }
}
</script>