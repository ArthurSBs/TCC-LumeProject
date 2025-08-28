<script>
import LogIn from '@/components/menus/LogIn.vue';
import SignIn from '@/components/menus/SignIn.vue';

export default {
    components: {
        LogIn,
        SignIn
    },

    data() {
        return {
            menuId: "LogIn"
        }
    },

    methods: {
        switchMenu(menuName){
            this.menuId = menuName
        }
    }
}

</script>

<template>
    <Background/>
    <main>
        <component :is="menuId" @change-view="switchMenu"></component>
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