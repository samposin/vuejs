<template>
    <div>
        <h1 class="text-center">{{title}}</h1>
        <app-form></app-form>
    </div>
</template>

<script>

import Form from '../components/form/Form.vue';

export default {
  name: 'app',
  data () {
    return {
      title: 'Vue.js Demo Form'
    }
  },
  components: {
    appForm: Form
  }
}
</script>