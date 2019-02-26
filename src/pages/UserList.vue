<template>
    <div class="container">
        <h1>User List</h1>
        <p>User List  Description</p>
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