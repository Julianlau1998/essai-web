<template>
  <div>
      <TopNav />
      <div class="mx-10 my-4 text-center">
          <RouterView />
      </div>
  </div>
</template>

<script>
  import { RouterView } from 'vue-router'
  import TopNav from '@/components/navigation/TopNav.vue'
  export default {
      components: { TopNav },
      data () {
          return {
              test: 'test'
          }
      },
  }
</script>