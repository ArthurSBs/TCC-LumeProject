<script setup>
import Background from '@/components/design-components/Background.vue';
import LogIn from '@/components/menus/LogIn.vue';
</script>

<template>
    <Background/>
    <main>
        <LogIn/>
    </main>
</template>

<style lang="scss">
main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
}
</style>