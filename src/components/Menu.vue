<template>
  <!-- A grey horizontal navbar that becomes vertical on small screens -->
  <nav id="nav" class="navbar navbar-expand-sm bg-light">

    <!-- Links -->
    <ul class="navbar-nav">
      <li class="nav-item" v-for="(route, index) in routes" :key="index">
          <router-link :to="route" class="nav-link" active-class="active">
              {{ route.title }}
          </router-link>
      </li>
    </ul>
  </nav>
    
</template>
<script>
  export default {
    data() {
      return {
        
      }
    },
    computed: {
        routes: function () {
            var routes = [];

            for (var i in this.$router.options.routes) {
              if (!this.$router.options.routes.hasOwnProperty(i) && routes.includes(route)){
                  continue
              }
              var route = this.$router.options.routes[i];
              if(route.hasOwnProperty('title')) {
                  routes.push(route);
              }
            }
            return routes;
        }
    },
    mounted() {
      //
    }
  }
</script>