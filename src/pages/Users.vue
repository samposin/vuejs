<template>
   <router-view :config="config"></router-view>
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