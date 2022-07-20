<template>
    <div class="indexLayout">
        <div>
            <index-header></index-header>
        </div>
        <div>
            <index-menu></index-menu>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
  import IndexMenu from './index-components/index-menu.vue'
  import IndexHeader from './index-components/index-header.vue'
  export default {
      components: {
          IndexMenu,
          IndexHeader
      },
  }
</script>

<style scoped>
    .indexLayout {

    }
</style>
