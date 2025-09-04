<script setup>
import { shallowRef } from 'vue';
import LogIn from '@/components/menus/LogIn.vue';
import SignIn from '@/components/menus/SignIn.vue';

const menuId = shallowRef(LogIn);

const switchMenu = (menuName) => {
    console.log('muda pls', menuId)
    menuId.value = menuName
}

</script>

<template>
    <main>
        <component :is=menuId @change-view="switchMenu"/>
    </main>
</template>

<style scoped lang="scss">
main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
}
</style>