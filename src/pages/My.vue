<script setup lang="ts">
    import {userStore} from '../store/test';

    const {getTestNum} = userStore();
    console.log('testStore');
    console.log(getTestNum);



    console.log('my-page');
</script>

<template>
    <div>
        my-page
        <div>

        </div>
        <DemoA></DemoA>
        <el-button type="primary">Primary</el-button>
    </div>

</template>

<style>

</style>
