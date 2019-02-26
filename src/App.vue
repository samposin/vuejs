<template>
  <div id="app" class="container">
    <div class="row justify-content-center">
      <div class="col-xs-12 col-sm-10 col-md-6">
        {{ $route.meta.title }}
        <h1>
          <router-link :to="{name: 'home'}">
            Home
          </router-link>
        </h1>
        <navigationMenu></navigationMenu>
        <!--<transition name="fade">-->
        <router-view :config="config"></router-view>
        <!--</transition>-->
      </div>
    </div>
  </div>
</template>

<script>
import navigationMenu from './components/Menu.vue'
export default {
  name: 'app',
  data () {
    return {
      title: 'Vue.js Demo Form',
      config:{
        key1:1,
        key2:2,
      }
    }
  },
  components: {
    navigationMenu
  }
}
</script>

<style lang="scss">
  h1 {
    margin-bottom: 30px;
  }

  #app {
    padding: 20px;
  }
</style>
