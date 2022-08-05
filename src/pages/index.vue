<template>
    <div class="indexLayout">
        <div class="layoutHeader">
            <index-header></index-header>
        </div>
        <div class="layoutMenu">
            <index-menu></index-menu>
        </div>
        <div class="layoutContent">
            <router-view></router-view>
        </div>

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

<style scoped lang="less">
    @headerHeight: 80px;
    @menuWidth: 200px;

    .indexLayout {
        width: 100vw;
        height: 100vh;
        box-sizing: border-box;
        position: relative;
        padding-top: @headerHeight;
        padding-left: @menuWidth;

        .layoutHeader, .layoutMenu {
            position: absolute;
        }
        .layoutHeader {
            top: 0;
            left: @menuWidth;
            right: 0;
            height: @headerHeight;
            background: #cccccc;
        }
        .layoutMenu {
            top: 0;
            bottom: 0;
            left: 0;
            width: @menuWidth;
            background: #b3d4fc;
        }
        .layoutContent {
            height: 100%;
            background: #fcad54;
            overflow: auto;

        }
    }
</style>
