<template>
    <div class="autoBreadcrumb">
        <div class="toggleMenuIcon" @click="onMenuToggle">icon</div>
        <div>breadcrumb/xx/xx</div>
        <div>{{menuStore.isCollapse}}</div>
    </div>
</template>
<script setup lang="ts">
    import {menu} from '../store/menu'

    const menuStore = menu();
    const onMenuToggle = () => {
        menuStore.toggleCollapseStatus()
    }

</script>

<style scoped lang="less">
    .autoBreadcrumb {
        display: flex;
        align-items: center;

        .toggleMenuIcon {
            cursor: pointer;
            margin-right: 10px;
        }
    }
</style>
